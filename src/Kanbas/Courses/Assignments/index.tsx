import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlsButtons";
import { LuNewspaper } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"; 

export default function Assignments() {
  const navigate = useNavigate();
  return (
    <div id="wd-assignments">
            <div className="d-flex align-items-center mb-3">
        <div className="position-relative me-2">
          <AiOutlineSearch className="position-absolute" style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }} />
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            style={{ paddingLeft: "30px" }}
            className="form-control border border-medium" 
          />
        </div>
        <button id="wd-add-assignment-group" className="btn btn-secondary ms-auto">
          + Group
        </button>
        <button id="wd-add-assignment" className="btn btn-danger  ms-2">
          + Assignment
        </button>
      </div>
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-4 fs-3" />
              <strong>ASSIGNMENTS</strong>
            </div>
            <div className="d-flex align-items-center">
              <p className="border border-dark rounded px-2 py-1 text-muted bg-light me-2">
                40% of Total
              </p>
              <span> + : </span>
            </div>
          </div>
          <ul
            className="wd-lessons list-group rounded-0"
            onClick={() => navigate("#/Kanbas/Courses/1234/Assignments/123")}
          >
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-4 fs-3" />
                  <LuNewspaper
                    className="me-4 fs-3"
                    style={{ color: "green" }}
                  />
                  <div>
                  <div>
                      <a
                        className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/A2"
                      >
                        A1 - HTML
                      </a>
                    </div>
                    <p>
                      Multiple Modules | <b>Not available until</b> May 6 at
                      12:00 AM | <br />
                      Due May 13 at 11:59 PM | 100 pts
                    </p>
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-4 fs-3" />
                  <LuNewspaper
                    className="me-4 fs-3"
                    style={{ color: "green" }}
                  />
                  <div>
                  <div>
                      <a
                        className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/A2"
                      >
                        A2 - CSS
                      </a>
                    </div>
                    <p>
                      Multiple Modules | <b>Not available until</b> May 13 at
                      12:00 AM | <br />
                      Due May 20 at 11:59 PM | 100 pts
                    </p>
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-4 fs-3" />
                  <LuNewspaper
                    className="me-4 fs-3"
                    style={{ color: "green" }}
                  />
                  <div>
                    <div>
                      <a
                        className="wd-assignment-link"
                        href="#/Kanbas/Courses/1234/Assignments/A2"
                      >
                        A3 - Javascript
                      </a>
                    </div>
                    <p>
                      Multiple Modules | <b>Not available until</b> May 20 at
                      12:00 AM | <br />
                      Due May 27 at 11:59 PM | 100 pts
                    </p>
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
