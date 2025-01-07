import React from "react";
import { useDeleteProductMutation } from "../app/service/dummyData.js";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data }] = useDeleteProductMutation();

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>{data?.title ? `${data.title} succesfully deleted` : ""}</h1>
      <button onClick={handleDeleteProduct}>Delete Product</button>
    </div>
  );
};

export default DeleteProduct;
