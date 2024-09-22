import express from "express";
import { productRoutes } from "./product/routes.js";

import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

// Your middleware and routes setup
app.use("/api/products", productRoutes);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
