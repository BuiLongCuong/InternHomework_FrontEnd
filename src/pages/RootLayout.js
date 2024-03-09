import Header from "../components/Header/Header";
import SideBar from "../components/Body/SideBar/SideBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
