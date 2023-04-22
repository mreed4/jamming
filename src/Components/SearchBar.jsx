import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

export default function SearchBar() {
  const { handleSearchTermChange, handleFormSubmit, searchTerm } = useContext(AppContext);

  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    handleFormSubmit();
    navigate("/results");
  }

  return (
    <section id="search-bar">
      <form onSubmit={handleSearch}>
        <input placeholder="Enter A Song, Album, or Artist" value={searchTerm} onChange={handleSearchTermChange} />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
