import React from "react";
import { useAddNewProductsMutation } from "../app/service/dummyData.js";

const AddNewProduct = () => {
  const [AddNewProduct, { data }] = useAddNewProductsMutation();

  const handleAddproduct = async () => {
    try {
      const newProduct = {
        id: 1,
        title: "Sexy-Tshirt",
        description:
          "This is one of the best and amazing shirt currently in the market",
      };

      await AddNewProduct(newProduct);
    } catch (error) {
      res.json("Error" + error);
    }
  };
  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleAddproduct}>Add New Products</button>
    </div>
  );
};

export default AddNewProduct;
