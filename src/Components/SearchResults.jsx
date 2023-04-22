import ItemList from "./ItemList";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SearchResults() {
  const { searchResults } = useContext(AppContext);

  return (
    Object.keys(searchResults).length > 0 && (
      <section id="search-results">
        <h2>Results</h2>
        <div id="item-lists">
          {Object.keys(searchResults)
            .reverse()
            .map((key) => {
              return <ItemList key={key} items={searchResults[key].items} itemType={key} />;
            })}
        </div>
      </section>
    )
  );
}
