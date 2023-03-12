import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIESLIST = gql`
  query {
    movies {
      name
      genre
      movieImage
      worldWideCollection
      release
      director {
        name
        age
        nationality
        directorImage
      }
    }
  }
`;

const useMoviesHook = () => {
  const { error, loading, data } = useQuery(GET_MOVIESLIST);


  return {
    error,
    loading,
    data,
  };
};

export default useMoviesHook;
