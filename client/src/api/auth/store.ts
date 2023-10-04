import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3444/social-network-api'
        : 'https://watch-together.ru/social-network-api',
  }),
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
