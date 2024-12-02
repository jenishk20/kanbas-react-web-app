import { Link } from "react-router-dom";
import image_1 from "../../images/image_1.jpeg";
import image_2 from "../../images/image_2.jpeg";
import image_3 from "../../images/image_3.jpeg";
import image_4 from "../../images/image_4.jpeg";
import image_5 from "../../images/image_5.png";
import image_6 from "../../images/image_6.jpg";
import image_7 from "../../images/Logo.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enrollInCourse, unenrollFromCourse } from "./enrollmentReducer";
import { fetchAllCourses } from "../Courses/client";
import * as courseClient from "../Courses/client";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  getAllCourses,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  getAllCourses: () => void;
}) {
  const images = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
  ];

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  
  const role = currentUser?.role;

  const dispatch = useDispatch();
  const [enrolledOnly, setEnrolledOnly] = useState(true);

  const toggleEnrollments = () => {
    getAllCourses();
    setEnrolledOnly(!enrolledOnly);
  };

  const handleEnrollmentToggle =  async (courseId: any, isEnrolled: any) => {
    console.log(courseId, isEnrolled);
    if (isEnrolled) {
      await courseClient.unenrollUserFromCourse(courseId, currentUser._id);
      dispatch(unenrollFromCourse({ courseId, userId: currentUser._id }));
    } else {
      await courseClient.enrollUserInCourse(courseId, currentUser._id);
      dispatch(enrollInCourse({ courseId, userId: currentUser._id }));
    }
  };

  const filteredCourses = enrolledOnly
    ? courses.filter((course) =>
        enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        )
      )
    : courses;

  console.log(courses, enrolledOnly, filteredCourses);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {role == "FACULTY" && (
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
          <br />
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </h5>
      )}
      {role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={toggleEnrollments}
        >
          {enrolledOnly ? "View All Courses" : "View Enrolled Courses"}
        </button>
      )}
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {enrolledOnly &&
            (role === "FACULTY"
              ? courses
              : courses.filter((course) =>
                  enrollments.some(
                    (enrollment: any) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  )
                )
            ).map((course, index) => {
              const imageIndex = index % images.length;
              const imageSrc = images[imageIndex];
              return (
                <div
                  className="wd-dashboard-course col"
                  style={{ width: "300px" }}
                  key={index}
                >
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <img src={imageSrc} width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name}
                        </h5>
                        <p
                          className="wd-dashboard-course-title card-text overflow-y-hidden"
                          style={{ maxHeight: 100 }}
                        >
                          {course.description}
                        </p>
                        <button className="btn btn-primary"> Go </button>
                        {role == "FACULTY" && (
                          <>
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>

                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}

          {!enrolledOnly && (
            <>
              {courses.map((course, index) => {
                const imageIndex = index % images.length;
                const imageSrc = images[imageIndex];
                return (
                  <div
                    className="wd-dashboard-course col"
                    style={{ width: "300px" }}
                    key={index}
                  >
                    <div className="card rounded-3 overflow-hidden">
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                      >
                        <img src={imageSrc} width="100%" height={160} />
                        <div className="card-body">
                          <h5 className="wd-dashboard-course-title card-title">
                            {course.name}
                          </h5>
                          <p
                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                            style={{ maxHeight: 100 }}
                          >
                            {course.description}
                          </p>
                          <button className="btn btn-primary"> Go </button>
                          {enrollments.some((enrollment: any) => {
                            return (
                              enrollment.user === currentUser._id &&
                              enrollment.course === course._id
                            );
                          }) ? (
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                handleEnrollmentToggle(course._id, true);
                              }}
                              className="btn btn-danger me-2 float-end"
                            >
                              Unenroll
                            </button>
                          ) : (
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                handleEnrollmentToggle(course._id, false);
                              }}
                              className="btn btn-success me-2 float-end"
                            >
                              Enroll
                            </button>
                          )}
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
