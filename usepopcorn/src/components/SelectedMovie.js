import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

export default function SelectedMovie({
  handleBack,
  id,
  KEY,
  setSelectedId,
  setWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(id);

  const {
    imdbID,
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(
    function () {
      if (!title) return;

      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );

  function handleClick() {
    const newWatchedMovie = {
      poster,
      title,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating: Number(userRating),
      imdbID,
    };

    setWatched((prev) => [...prev, newWatchedMovie]);
    setSelectedId(null);
  }

  useEffect(
    function () {
      function escPress(e) {
        if (e.code === "Escape") {
          setSelectedId(null);
        }
      }

      document.addEventListener("keydown", escPress);

      return function () {
        document.removeEventListener("keydown", escPress);
      };
    },
    [setSelectedId]
  );

  useEffect(
    function () {
      async function handleMovie() {
        setisLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${id}`
        );

        const data = await res.json();

        setisLoading(false);
        setMovie(data);
      }
      handleMovie();
    },
    [id, KEY]
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={handleBack}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`}></img>
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxStars={10}
                    size={24}
                    setUserRating={setUserRating}
                  />

                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleClick}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>{`You've already rated this movie with ${
                  watched.find((movie) => movie.imdbID === id)?.userRating
                } ⭐`}</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
