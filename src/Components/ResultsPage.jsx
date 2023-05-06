import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function ResultsPage() {
  const { getClassName, resultsArray, searchTermPersist, toProperCase } = useContext(AppContext);

  return (
    <section id="results-page">
      <h2 className="italic">Results for "{searchTermPersist}"</h2>
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
        <Outlet /> {/* See line 27 of App.jsx */}
      </div>
    </section>
  );
}
