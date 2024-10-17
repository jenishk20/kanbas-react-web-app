import { Link, useParams, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  console.log(pathname, cid);
  const links = [
    { label: "Home", path: "/Kanbas/Courses/" + cid + "/Home" },
    { label: "Modules", path: "/Kanbas/Courses/" + cid + "/Modules" },
    { label: "Piazza", path: "/Kanbas/Courses/" + cid + "/Piazza" },
    { label: "Zoom", path: "/Kanbas/Courses/" + cid + "/Zoom" },
    { label: "Assignments", path: "/Kanbas/Courses/" + cid + "/Assignments" },
    { label: "Quizzes", path: "/Kanbas/Courses/" + cid + "/Quizzes" },
    { label: "People", path: "/Kanbas/Courses/" + cid + "/People" },
  ];
  console.log(links);
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => {
        return (
          <>
            <Link
              key={index}
              to={link.path}
              id={"wd-course-" + link.label.toLowerCase() + "-link"}
              className={
                "list-group-item text-danger border border-0" +
                (pathname.includes(link.label) ? " active" : "")
              }
            >
              {link.label}
            </Link>
            <br />
          </>
        );
      })}
    </div>
  );
}
