export default function NavBar({ tempMovieDataLength, query, setQuery }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p className="num-results">
        {tempMovieDataLength > 0
          ? `Found ${tempMovieDataLength} results`
          : `Found 0 results`}
      </p>
    </nav>
  );
}
