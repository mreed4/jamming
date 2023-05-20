import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";

export default function ResultsPage() {
  const { getClassName, resultsArray, searchTermPersist, toProperCase } = useContext(AppContext);

  return (
    <section id="results-page">
      <div className="italic dim" id="query-reminder">
        Results for "{searchTermPersist}"
      </div>
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
      <Outlet /> {/* See line 27 of App.jsx */}
    </section>
  );
}
