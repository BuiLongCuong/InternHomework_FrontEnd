import "./MainBody.css";
import Courses from "./courses/courses";
import Participating from "./Participating/Participating";

export default function MainBody() {
  return (
    <>
      <div className="mainBody">
        <Courses />
        <Participating />
      </div>
    </>
  );
}
