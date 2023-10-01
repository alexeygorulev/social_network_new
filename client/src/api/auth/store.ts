import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3444' }),
  endpoints: (builder) => ({
    sendUserAuthData: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    subscribeUser: builder.mutation({
      query: (data) => ({
        url: '/auth/registration',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});
if (!apiSlice) {
  throw new Error('apiSlice is undefined');
}
export const { useSendUserAuthDataMutation, useSubscribeUserMutation } = apiSlice;
