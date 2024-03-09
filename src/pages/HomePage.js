import MainBody from "../components/Body/MainBody/MainBody";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const loginState = useSelector((state) => state.login.login);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginState) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <MainBody />
    </>
  );
}
export default HomePage;
