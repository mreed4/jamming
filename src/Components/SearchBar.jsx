import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SearchBar() {
  const { handleSearchButton, handleSearchTermChange, searchTerm } = useContext(AppContext);

  return (
    <div>
      <input placeholder="Enter A Song, Album, or Artist" value={searchTerm} onChange={handleSearchTermChange} />
      <button onClick={handleSearchButton}>SEARCH</button>
    </div>
  );
}
