import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  // const location = useLocation();
  // const [activeTab, setActiveTab] = useState(null);
  // useEffect(() => {
  //     const tab = location.pathname.split('/').pop();
  //     setActiveTab(tab)
  // }, [location.pathname]);
  const navigate = useNavigate();
  const moveDiary = () => {
    navigate("/diary");
  };
  const moveNotification = () => {
    navigate("/notification");
  };
  const moveLesson = () => {
    navigate("/");
  };
  const moveProfile = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className="sideBar">
        <div className="item" onClick={moveProfile}>
          <i className="fa-solid fa-user"></i> Profile
        </div>
        <div className="item" onClick={moveLesson}>
          <i className="fa-solid fa-book-open"></i> Lesson
        </div>
        <div className="item" onClick={moveNotification}>
          <i className="fa-solid fa-bell"></i> Notification
        </div>
        <div className="item" onClick={moveDiary}>
          <i className="fa-solid fa-clock"></i> Diary
        </div>
      </div>
    </>
  );
}
