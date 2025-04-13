// // src/features/products/productsApi.ts
// import { apiSlice } from "@/slices/apiSlice";
// import { PRODUCTS_URL_API } from "../constants";
// export const productsApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query<any, void>({
//       query: () => PRODUCTS_URL_API,
//     }),
//     getProductById: builder.query<any, string>({
//       query: (id) => `${PRODUCTS_URL_API}/${id}`,
//     }),
//   }),
// });

// export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
