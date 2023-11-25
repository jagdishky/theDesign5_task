import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TAG_POSTS } from '../apiTages';
import { API_ENDPOINT_POSTS, BASE_URL } from '../apiTypes';


export const POST_API = createApi({
    reducerPath: "POST_API",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        // prepareHeaders: (headers) => { return header(headers) },
        timeout: 5000,

    }),
    tagTypes: [TAG_POSTS],
    endpoints: (builder) => ({
        allPosts: builder.query({
            query: () => API_ENDPOINT_POSTS,
            providesTags: [TAG_POSTS],
        }),
    })
})
export const { useAllPostsQuery } = POST_API;