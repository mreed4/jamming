import ItemList from "./ItemList";
import { NavLink, Link, Outlet } from "react-router-dom";
import SearchForm from "./SearchForm";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Helpers from "../util/Helpers";

export default function ResultsPage() {
  const { getClassName, resultsArray, searchTermPersist } = useContext(AppContext);

  return (
    <>
      <SearchForm />
      <section id="results-page">
        <h2>Results for "{searchTermPersist}"</h2>
        <Link to="/">Back</Link>
        <nav id="results-nav">
          <ul>
            {resultsArray.length > 0 &&
              resultsArray.map((key) => {
                return (
                  <li key={key}>
                    <NavLink to={key} className={getClassName}>
                      {Helpers.toProperCase(key)}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </nav>
        <div id="item-lists">
          <Outlet />
        </div>
      </section>
    </>
  );
}
