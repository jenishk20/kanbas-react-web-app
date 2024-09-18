export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A1 - ENV + HTML
          </a>
          <p>
            Multiple Modules | <b>Module not available until</b> May 6 at 12:00
            AM |<br />
            Due May 13 11:59 AM | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A2 - CSS + Bootstrap
          </a>
          <p>
            Multiple Modules | <b>Module not available until</b> May 6 at 12:00
            AM |<br />
            Due May 13 11:59 AM | 100 pts
          </p>
        </li>
      </ul>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A3 - Javascript + React
          </a>
        </li>
        <p>
          Multiple Modules | <b>Module not available until</b> May 6 at 12:00 AM
          |<br />
          Due May 13 11:59 AM | 100 pts
        </p>
      </ul>
    </div>
  );
}
