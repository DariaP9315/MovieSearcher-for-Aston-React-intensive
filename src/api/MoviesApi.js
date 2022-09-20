import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
//import { APIKey } from './MovieApiKey';

export const moviesAPI = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://www.omdbapi.com/`,
    //baseUrl: `https://kinopoiskapiunofficial.tech/api/v2.2/films/`
  }),
  //   prepareHeaders: (headers, { getState }) => {
  //     headers.set('X-API-KEY', 'a6e12735-bb34-431a-96c6-27deaa1c7e93');
  //     headers.set('Content-Type', 'application/json');
  //     console.log(headers);
  //     return headers;
  //   },
  endpoints: (build) => ({
    fetchAllMovies: build.query({
      query: () => ({
        url: `?apikey=${process.env.REACT_APP_API_KEY_OMDB}&s=something`,
        //url: `top?type=TOP_100_POPULAR_FILMS`,
      }),
      transformResponse: (data) => {
        const transformedData = [];

        for (let i = 0; i < data.Search.length; i++) {
          let obj = {};
          for (let key in data.Search[i]) {
            obj[key[0].toLowerCase() + key.slice(1)] = data.Search[i][key];
          }
          transformedData.push(obj);
        }

        return transformedData;
      },
      //   transformResponse: (response, meta, error) => {
      //     console.log(response.meta.headers);
      //   },
    }),

    fetchOneMovie: build.query({
      query: (query) => ({
        url: `?apikey=${process.env.REACT_APP_API_KEY_OMDB}&i=${query}&plot=full`,
      }),
      transformResponse: (data) => {
        const transformedData = {};

        for (let key in data) {
          transformedData[key.toLowerCase()] = data[key];
        }

        return transformedData;
      },
    }),
  }),
});

export const { useFetchAllMoviesQuery, useFetchOneMovieQuery } = moviesAPI;
