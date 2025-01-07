import React from "react";
import { useGetAllProductsQuery } from "../app/service/dummyData.js";

const AllProducts = () => {
  const { data } = useGetAllProductsQuery();

  return (
    <div>
      {data?.products.map((p) => (
        <h1 key={p.id}>{p.title}</h1>
      ))}
    </div>
  );
};

export default AllProducts;
