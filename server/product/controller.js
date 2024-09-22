import pool from "../db.js";
import {
  getProductsdetails,
  getProductById,
  addProduct1,
  byCategory1,
  deleteProduct1,
  updateProduct1,
} from "./queries.js";

export const getProducts = async (req, res) => {
  try {
    const result = await pool.query(getProductsdetails);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const getProductByID = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query(getProductById, [id]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
export const addProduct = async (req, res) => {
  const { name, category_id, price } = req.body;
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query(addProduct1, [name, category_id, price]);
    res.status(201).send("product added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const byCategory = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query(byCategory1, [id]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query(deleteProduct1, [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    // Ensure that we only send one response
    if (!res.headersSent) {
      return res.status(500).json({ message: "Server error" });
    }
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const { name, category_id, price } = req.body;
  if (!name || !category_id || !price) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    // Update the product in the database
    const result = await pool.query(updateProduct1, [
      name,
      category_id,
      price,
      id,
    ]);

    // Check if the product was found and updated
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Return the updated product
    res.json({
      message: "Product updated successfully",
      product: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      return res.status(500).json({ message: "Server error" });
    }
  }
};
