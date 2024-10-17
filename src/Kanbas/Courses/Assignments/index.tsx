import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlsButtons";
import { LuNewspaper } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { assignments } from "../../Database";
export default function Assignments() {
  const navigate = useNavigate();
  const { cid } = useParams();
  console.log(cid);
  const filteredAssignments = assignments.filter(
    (assignments) => assignments.course === cid
  );
  console.log(filteredAssignments);
  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center mb-3">
        <div className="position-relative me-2">
          <AiOutlineSearch
            className="position-absolute"
            style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }}
          />
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            style={{ paddingLeft: "30px" }}
            className="form-control border border-medium"
          />
        </div>
        <button
          id="wd-add-assignment-group"
          className="btn btn-secondary ms-auto"
        >
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
          {filteredAssignments.map((assignment: any) => {
            return (
              <ul
                className="wd-lessons list-group rounded-0"
                onClick={() =>
                  navigate(
                    `/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`
                  )
                }
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
                            href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                          >
                            {assignment.title}
                          </a>
                        </div>
                        <p>
                          Multiple Modules | <b>Not available until</b>{" "}
                          {assignment.notAvailableUntil} | <br />
                          Due {assignment.dueDate} | {assignment.points} pts
                        </p>
                      </div>
                    </div>
                    <LessonControlButtons />
                  </div>
                </li>
              </ul>
            );
          })}
        </li>
      </ul>
    </div>
  );
}
