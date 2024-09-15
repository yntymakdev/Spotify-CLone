import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOption) => {
  const result = await baseQuery(args, api, extraOption);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,

  refetchOnFocus: true,
  refetchOnReconnect: false,
  tagTypes: ["api"],
  endpoints: () => ({}),
});
