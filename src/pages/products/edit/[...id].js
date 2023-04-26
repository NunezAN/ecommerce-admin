import React, { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import ProductForm from "../../../../components/ProductForm";

const EditProduct = () => {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      const productData = await axios.get("/api/products?id=" + id);
      setProductInfo(productData.data);
      // console.log(productData.data);
    };
    fetchData();
  }, [id]);

  return (
    <Layout>
      <h1 className="">Edit Product</h1>
      {productInfo && (<ProductForm {...productInfo}></ProductForm>)}
    </Layout>
  );
};

export default EditProduct;
