import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header>
      <div>
        <h1 id="site-title">
          <Link to="/">Audiophile</Link>
        </h1>
        <div id="conditional-search-bar">
          <SearchForm />
        </div>
      </div>
      <hr />
      <Link to="/results/tracks" className="back-button">
        &larr; Back
      </Link>
    </header>
  );
}
