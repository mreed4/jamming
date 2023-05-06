import { Link, useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  const navigate = useNavigate();

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
      <button onClick={() => navigate(-1)} className="back-button">
        &larr; Back
      </button>
    </header>
  );
}
