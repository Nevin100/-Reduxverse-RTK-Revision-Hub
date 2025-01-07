import React from "react";
import { useUpdateProductMutation } from "../app/service/dummyData.js";

const UpdateProduct = ({ productID }) => {
  const [updateProduct, { data }] = useUpdateProductMutation();

  const handleUpdateProduct = async () => {
    try {
      const UpdatedProductData = {
        title: "New Title",
      };

      await updateProduct({
        id: productID,
        updateProduct: UpdatedProductData,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleUpdateProduct}>Update Product</button>
    </div>
  );
};

export default UpdateProduct;
