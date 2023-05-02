import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ProductForm = ({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) => {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goBack, setGoBack] = useState(false);
  const router = useRouter();

  console.log(_id);
  //function to update/create product in DB
  const handleSaveProduct = async (e) => {
    e.preventDefault();

    if (_id) {
      //update
      //todo-update product
    } else {
      //create
      const data = { title, description, price };
      await axios.post("/api/products", data);
    }
    setTitle("");
    setDescription("");
    setPrice("");
    setGoBack(true);
  };

  if (goBack) {
    router.push("/products");
  }

  return (
    <form onSubmit={handleSaveProduct}>
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
      <button type="submit" className="btn-primary hover:bg-green-700">
        Save
      </button>
      <button
        onClick={() => router.push("/products")}
        className="btn-primary mt-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default ProductForm;
