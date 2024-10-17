import { Link } from "react-router-dom";
import image_1 from "../../images/image_1.jpeg";
import image_2 from "../../images/image_2.jpeg";
import image_3 from "../../images/image_3.jpeg";
import image_4 from "../../images/image_4.jpeg";
import image_5 from "../../images/image_5.png";
import image_6 from "../../images/image_6.jpg";
import image_7 from "../../images/Logo.png";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;
  const images = [image_1,image_2,image_3,image_4,image_5,image_6,image_7];
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
           
          {courses.map((course, index) => {
            const imageIndex = index % images.length;
            const imageSrc = images[imageIndex];
            return (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
                key = {index}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                      <img
                        src={imageSrc}
                        width="100%"
                        height={160}
                      />
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
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
