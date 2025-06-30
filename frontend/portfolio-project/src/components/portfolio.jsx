import React, { useEffect, useState } from "react";
import axios from "axios";

const Portfolio = ({ userId }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`/api/portfolio/${userId}`);
      setPortfolio(res.data.portfolio || []);
      setTotalValue(res.data.totalValue || 0);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch portfolio");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();

    const interval = setInterval(() => {
      fetchPortfolio();
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [userId]);

  if (loading) return <p className="text-center text-lg font-medium">Loading portfolio...</p>;
  if (error) return <p className="text-center text-red-500 font-semibold">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">📊 Your Portfolio</h2>
      <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
        Total Value: ₹{Number(totalValue).toFixed(2)}
      </h3>

      {portfolio.length === 0 ? (
        <p className="text-center text-gray-500">No assets found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Symbol</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Type</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Quantity</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Current Price</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {portfolio.map((asset, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-800">{asset.symbol}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{asset.type}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{asset.quantity}</td>
                  <td className="px-4 py-2 text-sm text-green-700">₹{Number(asset.currentPrice || 0).toFixed(2)}</td>
                  <td className="px-4 py-2 text-sm text-blue-700">₹{Number(asset.value || 0).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
