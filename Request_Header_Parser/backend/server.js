import express from "express";
import apiRoutes from "./routes/api.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5000;

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST} at port: ${PORT}`);
});
