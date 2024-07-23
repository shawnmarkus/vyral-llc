// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const ApiSlice = createApi({
  reducerPath: 'bookTicket',
  baseQuery: fetchBaseQuery({baseUrl: ''}),
  tagTypes: [],
  endpoints: builder => ({}),
});

export default ApiSlice;
