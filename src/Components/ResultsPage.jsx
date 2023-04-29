import ItemList from "./ItemList";
import { NavLink, Link, Outlet } from "react-router-dom";
import SearchForm from "./SearchForm";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function ResultsPage() {
  const { getClassName, resultsArray, searchTermPersist, toProperCase } = useContext(AppContext);

  return (
    <>
      <SearchForm />
      <section id="results-page">
        <h2 className="italic">Results for "{searchTermPersist}"</h2>
        {/* <Link to="/">Back</Link> */}
        <nav id="results-nav">
          <ul>
            {resultsArray.length > 0 &&
              resultsArray.map((key) => {
                return (
                  <li key={key}>
                    <NavLink to={key} className={getClassName}>
                      {toProperCase(key)}
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
