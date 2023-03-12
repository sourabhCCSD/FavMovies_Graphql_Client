import { useState } from "react";
import useMoviesHook from "../hooks/useMoviesHook";

const MoviesList = () => {
  const { error, loading, data } = useMoviesHook();

  const [clickedMovie, setClickedMovie] = useState("");
  console.log(clickedMovie, "izzdl");

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <h4>loading...</h4>;
  }

  return (
    <div>
      <div
        style={{
          marginTop: "40px",
          minHeight: "30vh",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {data &&
          data.movies.map((movie, index) => (
            <div
              onClick={() => setClickedMovie(movie)}
              key={index}
              style={{
                marginLeft: "20px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#0E313F",
                  cursor: "pointer",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#cecece",
                }}
              >
                {movie.name}
              </span>
            </div>
          ))}
      </div>

      {clickedMovie && (
        <div style={{ height: "40vh", width: "40vh", marginLeft: "500px" }}>
          <div
            style={{
              height: "300px",
              width: "700px",
              backgroundColor: "#cecece",
              display: "flex",
            }}
          >
            <div>
              <img
                style={{ width: "250px", height: "300px" }}
                src={clickedMovie.movieImage}
              />
            </div>
            <div style={{ marginLeft: "40px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2>{clickedMovie.name}</h2>
                <h4 style={{ marginLeft: "20px" }}>( {clickedMovie.release} )</h4>
              </div>
              <div style={{ marginTop: "-30px" }}>
                <h4>({clickedMovie.genre})</h4>
              </div>
              <h3>{`${clickedMovie.worldWideCollection} Million $`}</h3>

              <div style={{ display: "flex" }}>
                <div>
                  <img
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "20px",
                    }}
                    src={clickedMovie.director.directorImage}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <span>
                    {`${clickedMovie.director.name} - ${clickedMovie.director.age} years`}{" "}
                  </span>
                  <div>
                    <span>{clickedMovie.director.nationality}</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>Watch on :</div>
                <div>
                  <img
                    style={{
                      height: "40px",
                      width: "40px",
                      marginLeft: "20px",
                    }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png"
                  />
                </div>
                <div>
                  <img
                    style={{
                      height: "40px",
                      width: "80px",
                      marginLeft: "20px",
                    }}
                    src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png"
                  />
                </div>
                <div>
                  <img
                    style={{
                      height: "40px",
                      width: "60px",
                      marginLeft: "20px",
                    }}
                    src="https://cdn.dribbble.com/users/347174/screenshots/10899700/4-3_dribbble_3_1_4x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesList;
