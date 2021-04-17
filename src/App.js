import React, { useState } from "react";
import "./styles.css";

const movieDB = {
  Action: [
    { name: "Avengers Infinity Way", rating: "8.4" },
    { name: "The Dark Knight", rating: "9.0" },
    { name: "Avengers End Game", rating: "8.4" },
  ],

  Horror: [
    { name: "Alien", rating: "8.4" },
    {
      name: "The Shining",
      rating: "8.4",
    },
    {
      name: "It",
      rating: "7.3",
    },
  ],
  ScienceFiction: [
    {
      name: "Matrix ",
      rating: "8.7",
    },
    {
      name: "Arrival",
      rating: "7.9",
    },
    {
      name: "Passengers ",
      rating: "7",
    },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>My Movie recommendation 🎬 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout list of recommended movies. Select a genre to get started.{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button className="Btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li className="movie" key={movie.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
