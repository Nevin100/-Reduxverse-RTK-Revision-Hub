import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Creating instance of createApi :

export const productsApi = createApi({
  reducerPath: "products", //reducer Path
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }), //URL from where we will fetch the data
  endpoints: (builder) => ({
    //Get All Products : (Reading)
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  }), //
});

export const { useGetAllProductsQuery } = productsApi; // `use${GetAllProducts}Query` hook creation
