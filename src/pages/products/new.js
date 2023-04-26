import React, { useState } from "react";
import Layout from "../../../components/Layout";
import ProductForm from "../../../components/ProductForm";

const NewProducts = () => {
  return (
    <Layout>
      <h1 className="">New Product</h1>
      <ProductForm></ProductForm>
    </Layout>
  );
};

export default NewProducts;
