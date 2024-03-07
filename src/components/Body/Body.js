import SideBar from "./SideBar/SideBar";
import MainBody from "./MainBody/MainBody";
import "./Body.css"

export default function Body() {
    return (
        <>
            <div className="body">
                <SideBar/>
                <MainBody/>
            </div>
        </>
    )
}