import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SearchBar() {
  const { handleSearchTermChange, handleFormSubmit, searchTerm } = useContext(AppContext);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input placeholder="Enter A Song, Album, or Artist" value={searchTerm} onChange={handleSearchTermChange} />
        <button>Search</button>
      </form>
    </div>
  );
}
