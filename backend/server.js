import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetchPrices from "./app/utils/node-corn.js"
dotenv.config();
import ConfigureData from "./confiq/db.js";
import userCtrl from "./app/controllers/usercontrollers.js";
import portfolioCltr from "./app/controllers/portfolioControllers.js";
import authenticationUser from "./app/middlewares/authentication.js";
const app = express();
const port = process.env.PORT || 5025;
ConfigureData();
app.use(cors());
app.use(express.json()); 
// Routes
app.post("/register", userCtrl.register);
app.post("/login", userCtrl.login);
// portfolio routes
app.get("/portfolio", authenticationUser, portfolioCltr.getPortfolio);



// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
