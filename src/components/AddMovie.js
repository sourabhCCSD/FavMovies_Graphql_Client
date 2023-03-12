import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import useDirectorsHook from "../hooks/useDirectorsHook";

const AddMovie = () => {
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
        }
      }
    }
  `;

  const { data } = useDirectorsHook();

  const [movieName, setMovieName] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [directorPerson, setDirectorPerson] = useState("");
  const [wwc, setWwc] = useState("");
  const [movieImageInput, setMovieImageInput] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const yearData = [
    "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000","2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010","2011", "2012", "2012", "2014", "2015", "2016", "2017", "2018", "2019", "2020","2021", "2022", "2023"
  ];

  const ADD_MOVIE = gql`
    mutation AddMovie(
      $name: String!
      $genre: String!
      $directorId: ID!
      $release: String!
      $movieImage: String!
      $worldWideCollection: String!
    ) {
      addMovie(
        name: $name
        genre: $genre
        directorId: $directorId
        release: $release
        movieImage: $movieImage
        worldWideCollection: $worldWideCollection
      ) {
        name
        genre
        release
        movieImage
        worldWideCollection
      }
    }
  `;





  const [addMovie, { error, loading, dataa = data }] = useMutation(ADD_MOVIE, {
    variables: {
      name: movieName,
      genre: movieGenre,
      directorId: directorPerson,
      movieImage: movieImageInput,
      worldWideCollection: wwc,
      release: releaseYear,
    },
    refetchQueries: [{ query: GET_MOVIESLIST }],
  });

  console.log(
    movieName,
    movieGenre,
    movieImageInput,
    wwc,
    releaseYear,
    directorPerson,
    "in series"
  );

  return (
    <div style={{border: "1px solid", width: '30vw'}}>
      <div style={{width: '30vw', height: '30px', backgroundColor: 'black', display: 'flex', justifyContent: "center", alignItems: 'center'}}>
<span style={{color: "white"}}>Add Movie</span>
        </div>
      {
        <div style={{ width: "60vw", padding: "20px" }}>
          <div style={{ marginTop: "10px" }}>
            <span>Movie Name : </span>
            <input
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              style={{ width: "200px", height: "25px", borderRadius: "4px" }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <span>Genre : </span>
            <input
              value={movieGenre}
              onChange={(e) => setMovieGenre(e.target.value)}
              style={{ width: "200px", height: "25px", borderRadius: "4px" }}
            />
          </div>

          {
            <div style={{ marginTop: "10px" }}>
              <span>Movie Image URL : </span>
              <input
                value={movieImageInput}
                onChange={(e) => setMovieImageInput(e.target.value)}
                style={{ width: "200px", height: "25px", borderRadius: "4px" }}
              />
            </div>
          }

          <div style={{ marginTop: "10px" }}>
            <span>Release Year : </span>
            <select
              value={releaseYear}
              style={{ width: "100px", height: "25px", borderRadius: "4px" }}
              onChange={(e) => setReleaseYear(e.target.value)}
            >
              {yearData.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: "10px" }}>
            <span>World Wide Collection (in Million $) : </span>
            <input
              value={wwc}
              onChange={(e) => setWwc(e.target.value)}
              style={{ width: "100px", height: "25px", borderRadius: "4px" }}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <span>Director : </span>

            {console.log(directorPerson, "is everything i need")}

            <select
              onChange={(e) => setDirectorPerson(e.target.value)}
              value={directorPerson}
              style={{ width: "200px", height: "25px", borderRadius: "4px" }}
            >
              {dataa &&
                dataa.directors.map((director) => (
                  <option key={director.id} value={director.id}>
                    {director.name}
                  </option>
                ))}
            </select>

            <div style={{ marginTop: "20px" }}>
              <button
                onClick={() => addMovie()}
                style={{ height: "30px", width: "100px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default AddMovie;
