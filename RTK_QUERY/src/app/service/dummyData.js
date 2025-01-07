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

    //Get Products by ID : (Reading)
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    //Add New Products : {Updating}
    addNewProducts: builder.mutation({
      query: (newProduct) => ({
        url: `/product/add`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductsMutation,
} = productsApi; // `use${GetAllProducts}Query` or use${AddNewProducts}mutation hook creation
