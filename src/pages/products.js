import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

const Products = () => {
  return <Layout>
    <Link href="/products/new" className="bg-green-700 text-white px-6 py-2 text-xl rounded-lg shadow">Add new product</Link>
  </Layout>;
};

export default Products;
