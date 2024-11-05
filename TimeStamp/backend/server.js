import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/api.js";

dotenv.config();
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use("/api", apiRoutes);

//Test route
app.get("/", (req, res) => {
  res.send("Welcome to the TimeStamp Microservice!");
});

app.listen(PORT, () => {
  console.log(`Server running on ${HOST} at port: ${PORT} `);
});
