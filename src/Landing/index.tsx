import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link
import "./styles.css";
export default function Landing() {
  return (
    <div className="container text-center mt-5">
      <h1>Jenish Sunil Kothari : Section 1</h1>
      <div className="sub-component">
        <h2>Lab Assignments</h2>
        <Link to="/Labs" className="btn btn-primary mb-3">
          Go to Labs
        </Link>
      </div>
      <div className="sub-component">
        <h2>Kanbas Application</h2>
        <Link to="/Kanbas" className="btn btn-primary mb-3">
          Go to Kanbas
        </Link>
      </div>
      <div className="sub-component">
        <h2>Source Code Repos</h2>
        <ul className="list-unstyled">
          <li>
            <a
              href="https://github.com/jenishk20/kanbas-react-web-app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link"
            >
              Kanbas Source Code
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
