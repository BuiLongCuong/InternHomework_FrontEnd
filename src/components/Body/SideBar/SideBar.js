import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import "./SideBar.css"

export default function SideBar() {
    // const location = useLocation();
    // const [activeTab, setActiveTab] = useState(null);
    // useEffect(() => {
    //     const tab = location.pathname.split('/').pop();
    //     setActiveTab(tab)
    // }, [location.pathname]);
    return (
        <>
            <div className="sideBar">
                <div className="item">
                    <i className="fa-solid fa-user"></i> Profile
                </div>
                <div className="item">
                    <i className="fa-solid fa-book-open"></i> Lesson
                </div>
                <div className="item">
                    <i className="fa-solid fa-bell"></i> Notification
                </div>
                <div className="item">
                    <i className="fa-solid fa-clock"></i> Diary
                </div>
            </div>
        </>
    )
}