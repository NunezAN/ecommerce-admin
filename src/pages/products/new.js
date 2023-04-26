import React, { useState } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";

const NewProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const handleNewProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
    setTitle("");
    setDescription("");
    setPrice("");
  };
  return (
    <Layout>
      <form onSubmit={handleNewProduct}>
        <h1 className="">New Product</h1>
        <label>Product name</label>
        <input
          type="text"
          placeholder="Product name"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          type="text"
          placeholder="Description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price (in USD)</label>
        <input
          type="number"
          placeholder="Price"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="btn-primary">Save</button>
      </form>
    </Layout>
  );
};

export default NewProducts;
