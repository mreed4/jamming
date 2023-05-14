import { Link, useNavigate } from "react-router-dom";
import SearchForm from "./Search/SearchForm";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <h1 id="site-title">
          <Link to="/">Audiophile</Link>
        </h1>
        <SearchForm />
      </div>
      <hr />
      <button onClick={() => navigate(-1)} className="back-button" type="button">
        &larr; Back
      </button>
    </header>
  );
}
