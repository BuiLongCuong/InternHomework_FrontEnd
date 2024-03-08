import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/store";
import "./login.css";

function Login() {
  const [clickAdd, setClickAdd] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickAddHandler = () => {
    setClickAdd(true);
  };
  const moveHome = () => {
    dispatch(loginAction.ON_LOGIN());
    alert("login successfully");
    navigate("/");
  };
  return (
    <>
      <div className="layoutLogin">
        <img src="/images/logo.png" alt="" className="logoLogin" />
        <div className="boxContentLogin" onClick={moveHome}>
          <div className="contentLogin">
            <div className="icon"></div>
            <p>Tiếp tục với Apple</p>
          </div>
        </div>
        {clickAdd && (
          <div className="boxContentLogin" onClick={moveHome}>
            <div className="loginNonBg">
              <div className="icon"></div>
              <p>Tiếp tục với Google</p>
            </div>
          </div>
        )}

        {clickAdd && (
          <div className="boxContentLogin" onClick={moveHome}>
            <div className="loginNonBg">
              <div className="icon"></div>
              <p>Tiếp tục với Email</p>
            </div>
          </div>
        )}
        {!clickAdd && (
          <button className="loginBtn" onClick={clickAddHandler}>
            Khác
          </button>
        )}
      </div>
      {clickAdd && (
        <p className="footerLogin">
          Bằng việc tiếp tục, đồng nghĩa bạn đã đồng ý các điều khoản và
          chính sách
        </p>
      )}
    </>
  );
}
export default Login;
