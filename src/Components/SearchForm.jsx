import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Wrappers/AppContext";

export default function SearchForm() {
  const { handleSearchTermChange, searchSpotify, searchTerm } = useContext(AppContext);

  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    searchSpotify(); // This will actually search for the term
    navigate("/results/tracks");
  }

  return (
    <form onSubmit={handleSearch}>
      <input placeholder="Enter A Song, Album, or Artist" value={searchTerm} onChange={handleSearchTermChange} autoFocus />
      <button type="submit" disabled={!searchTerm}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}
