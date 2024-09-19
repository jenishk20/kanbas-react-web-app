import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Jenish Sunil Kothari : Section 1</h1>
      <h2>Lab Assignments</h2>
      <Link to="/Labs">Go to Labs</Link>

      <h2>Kanbas Application</h2>
      <Link to="/Kanbas">Go to Kanbas</Link>

      <h2>Source Code Repos</h2>
      <ul>
        <li>
          <a
            href="https://github.com/jenishk20/kanbas-react-web-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kanbas Source Code
          </a>
        </li>
        
      </ul>
    </div>
  );
}
