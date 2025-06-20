import SelectedMovie from "./SelectedMovie";
import WatchedMovie from "./WatchedMovie";
import WatchedMoviesSummary from "./WatchedMoviesSummary";
import { useState } from "react";

export default function WatchedMovies({
  watched,
  selectedId,
  handleBack,
  KEY,
  setSelectedId,
  setWatched,
}) {
  const [isOpen2, setIsOpen2] = useState(true);
  const [rating, setRating] = useState(0);

  function handleDelete(id) {
    setWatched((prev) => prev.filter((movie) => movie.imdbID !== id));
  }

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 &&
        (selectedId ? (
          <SelectedMovie
            handleBack={handleBack}
            id={selectedId}
            KEY={KEY}
            setSelectedId={setSelectedId}
            setWatched={setWatched}
            watched={watched}
            userRating={rating}
            setUserRating={setRating}
          />
        ) : (
          <>
            <WatchedMoviesSummary watched={watched} />
            <ul className="list">
              {watched.map((movie) => (
                <WatchedMovie
                  movie={movie}
                  key={movie.imdbID}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          </>
        ))}
    </div>
  );
}
