export default function Modules() {
  return (
    <div>
      <h2>Modules</h2>
      <button>View Progress</button> <button>Collapse All</button>{" "}
      <select>
        <option>Publish All</option>{" "}
      </select>
      <button>+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Understanding the HTML Layout
                </li>
                <li className="wd-content-item">
                  Understanding the Canvas Structure
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">HTML Tags </li>
                <li className="wd-content-item">React Routing</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Understanding HTML Basics</li>
                <li className="wd-content-item">
                  Building the structure of a webpage
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to HTML Elements and Attributes
                </li>
                <li className="wd-content-item">
                  Structuring a Webpage Using HTML
                </li>
                <li className="wd-content-item">
                  Best Practices for Semantic HTML
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  HTML & CSS: Design and Build Websites - Chapter 1: Structure
                  of an HTML Document
                </li>
                <li className="wd-content-item">MDN Web Docs - HTML Basics</li>
                <li className="wd-content-item">
                  Full Stack Developer Guide - Chapter 3: Building a Webpage
                  Layout with HTML
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS</li>
                <li className="wd-content-item">Styling your webpage</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 1
                </li>
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 2
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to Wev Development
                </li>
                <li className="wd-content-item">Creating an HTTP Server</li>
                <li className="wd-content-item">Creating an Git Account</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 4</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to JavaScript</li>
                <li className="wd-content-item">
                  Adding interactivity to your website
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
