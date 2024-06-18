import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return <h2>Product Detail Page for Product ID: {id}</h2>;
};

export default ProductDetail;
