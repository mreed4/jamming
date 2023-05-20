import { Link } from "react-router-dom";

export default function LoadingPage() {
  return (
    <section id="loading-page">
      <h2>Loading...</h2>
      <p>
        If you are stuck on this page <Link to="/">click here</Link> to go back
      </p>
    </section>
  );
}
