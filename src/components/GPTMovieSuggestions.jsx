import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gemini = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gemini;

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black opacity-90 text-white ">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
