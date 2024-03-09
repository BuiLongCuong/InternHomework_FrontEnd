import Lesson from "../components/Body/MainBody/Lesson/Lesson";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LessonPage() {
  const loginState = useSelector((state) => state.login.login);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginState) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Lesson />
    </>
  );
}
export default LessonPage;
