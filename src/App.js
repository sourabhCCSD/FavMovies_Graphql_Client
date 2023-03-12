import React from "react";
import AddDirector from "./components/AddDirector";
import AddMovie from "./components/AddMovie";

import MoviesList from "./components/MoviesList";

const App = () => {
  return (
    <div>
      <div style={{ height: "50vh" }}>
        <span
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Sourabh's Favourite Movies
        </span>
        <div>
          <MoviesList />
        </div>
      </div>

      <div>
        <AddDirector />
        <div style={{ height: "50vh", marginTop: '30px' }}>
          <AddMovie />
        </div>
      </div>
    </div>
  );
};

export default App;
