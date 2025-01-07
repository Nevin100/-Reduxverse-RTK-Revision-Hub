import React from "react";
import { useGetProductByIdQuery } from "../app/service/dummyData";

const GetByIdProduct = () => {
  const { data } = useGetProductByIdQuery(2);
  console.log(data);
  return (
    <div>
      <h1>{data?.brand}</h1>
    </div>
  );
};

export default GetByIdProduct;
