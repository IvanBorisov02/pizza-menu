import Movie from "./Movie";
import { useState } from "react";

export default function Movies({
  tempMovieData,
  selectedId,
  handleSelectMovie,
}) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list">
          {tempMovieData?.map((movie) => (
            <Movie
              movie={movie}
              key={movie.imdbID}
              handleSelectMovie={handleSelectMovie}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
