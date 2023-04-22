import ItemList from "./ItemList";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SearchResults() {
  return (
    <section id="search-results">
      <h2>Results</h2>
      <Link to="/">Back</Link>
      <Link to="tracks">Tracks</Link>
      <Link to="artists">Artists</Link>
      <Link to="albums">Albums</Link>
      <div id="item-lists">
        <Outlet />
      </div>
    </section>
  );
}
