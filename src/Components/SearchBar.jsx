import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  function handleSearch() {
    onSearch(term);
  }

  function handleTermChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div>
      <input placeholder="Enter A Song, Album, or Artist" value={term} onChange={handleTermChange} />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
}
