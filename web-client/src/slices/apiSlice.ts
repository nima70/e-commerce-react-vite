// src/features/api/apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/constants";

export const apiSlice = createApi({
  reducerPath: "api", // 🔑 Slice name in store
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), // 🌐 Change to your actual base URL
  endpoints: () => ({}),
});
