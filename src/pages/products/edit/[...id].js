import React, { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goBack, setGoBack] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      const productData = await axios.get("/api/products?id=" + id);
      console.log(productData.data);
      setTitle(productData.data.title);
      setDescription(productData.data.description);
      setPrice(productData.data.price);
    };
    fetchData();
  }, [id]);
  const handleNewProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
    setTitle("");
    setDescription("");
    setPrice("");
    setGoBack(true);
  };
  if (goBack) {
    router.push("/products");
  }
  return (
    <Layout>
      <form onSubmit={handleNewProduct}>
        <h1 className="">Edit Product</h1>
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

export default EditProduct;
