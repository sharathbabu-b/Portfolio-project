import cron from "node-cron";
import axios from "axios";
import Price from "../models/price.js";

const fetchPrices = async () => {
  const sources = ['https://prices', 'https://example.com/funds'];
  for (let url of sources) {
    const { data } = await axios.get(url);
    for (let item of data) {
      await Price.findOneAndUpdate(
        { symbol: item.symbol },
        { price: item.price, lastUpdated: new Date(), type: item.type },
        { upsert: true }
      );
    }
  }
};

export default fetchPrices;

cron.schedule('*/10 * * * *', fetchPrices);
