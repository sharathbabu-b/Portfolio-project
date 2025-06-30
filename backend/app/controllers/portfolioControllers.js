
import Assets from "../models/assets.js";
import Price from "../models/price.js"
const portfolioCltr={}

portfolioCltr.getPortfolio = async (req, res) => {
    const userId = req.params.userId;
  try {
    const assets = await Assets.find({ userId });
    const prices=await Price.find({})
    const price={}
    prices.forEach(p=>price[p.symbol]=p.price)

    const portfolio=assets.map(ele=>({
        symbol:ele.symbol,
        type:ele.type,
        quantity:ele.quantity,
        currentPrice:price[ele.symbol]||0,
        value:(price[ele.symbol]||0)*ele.quantity
    }))
    const totalValue=portfolio.reduce((sum,item)=>sum+item.value,0)
    res.json({ portfolio,totalValue});
  } catch (err) {
    res.status(500).json({ error: "Error fetching portfolio data" });
  }
};


portfolioCltr.add= async(req, res) => {
    const { userId, type, symbol, quantity } = req.body;
  try {
    const newAsset = new Assets({ userId, type, symbol, quantity });
    await newAsset.save();
    res.status(201).json({ message: "Asset added successfully", asset: newAsset });
  } catch (error) {
    res.status(500).json({ error: "Error adding asset" });
  }
};
portfolioCltr.update = async (req, res) => {
    const { assetId } = req.params;
    const { quantity } = req.body;
  try {
    const updatedAsset = await Assets.findByIdAndUpdate(
      assetId,
      { quantity },
      { new: true }
    );
    if (!updatedAsset) return res.status(404).json({ error: "Asset not found" });
    res.json({ message: "Asset updated", asset: updatedAsset });
  } catch (error) {
    res.status(500).json({ error: "Error updating asset" });
  }
};
portfolioCltr.remove = async (req, res) => {
    const { assetId } = req.params;
  try {
    const deleted = await Assets.findByIdAndDelete(assetId);
    if (!deleted) return res.status(404).json({ error: "Asset not found" });
    res.json({ message: "Asset deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting asset" });
  }
};
export default portfolioCltr