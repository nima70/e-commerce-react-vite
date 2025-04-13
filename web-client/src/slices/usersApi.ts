// src/features/users/usersApi.ts
import { apiSlice } from "@/slices/apiSlice";
import { USER_API } from "@/constants";
export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_API}/auth`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApi;
