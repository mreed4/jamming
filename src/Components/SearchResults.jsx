import ItemList from "./ItemList";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SearchResults() {
  const { searchResults } = useContext(AppContext);
  const { albums, artists, tracks } = searchResults;

  return (
    Object.keys(searchResults).length > 0 && (
      <section id="search-results">
        <h2>Results</h2>
        <div id="item-lists">
          <ItemList items={tracks.items} itemType="tracks" />
          <ItemList items={artists.items} itemType="artists" />
          <ItemList items={albums.items} itemType="albums" />
        </div>
      </section>
    )
  );
}
