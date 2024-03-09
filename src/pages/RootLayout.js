import Header from "../components/Header/Header";
import SideBar from "../components/Body/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import "./RootLayout.css"

function RootLayout() {
  return (
    <>
      <Header />
        <div className="layoutBody">
            <div className="sideBarBody">
                <SideBar/>
            </div>
            <div className="outletBody">
                <main>
                    <Outlet />
                </main>
            </div>

        </div>
    </>
  );
}

export default RootLayout;
