import { useState, useEffect } from "react";
import { BsGripVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import AssignmentDeleteModal from "./AssignmentDeleteModal";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const navigate = useNavigate();
  const { cid } = useParams();

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const assignments = useSelector(
    (state: any) => state.assignments.assignments
  );
  const filteredAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const handleDeleteModal = (id: string) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteAssignment(deleteId));
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setDeleteId("");
    setIsModalOpen(false);
  };

  return (
    <div id="wd-assignments">
      <AssignmentDeleteModal
        isModalOpen={isModalOpen}
        confirmDelete={confirmDelete}
        cancelDelete={cancelDelete}
      />
      {currentUser && currentUser.role === "FACULTY" && (
        <div className="d-flex align-items-center mb-3">
          <div className="position-relative me-2">
            <AiOutlineSearch
              className="position-absolute"
              style={{
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
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
          <button
            id="wd-add-assignment"
            className="btn btn-danger  ms-2"
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`)
            }
          >
            + Assignment
          </button>
        </div>
      )}

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
              <ul className="wd-lessons list-group rounded-0">
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
                    {currentUser && currentUser.role === "FACULTY" && (
                      <div>
                        <FaTrash
                          className="me-4 fs-3"
                          style={{ color: "red" }}
                          onClick={() => handleDeleteModal(assignment._id)}
                        />
                      </div>
                    )}
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
