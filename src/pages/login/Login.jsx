import React from "react";
import "./login.scss";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="loginLogo">Instagram</span>
      <div className="loginForm">
        <input
          type="text"
          placeholder="Ten nguoi dung, email"
        />

        <input type="text" placeholder="Mat khau" />
        <button className="loginButton">Đăng kí</button>
      </div>

      <div className="loginHeader">
        <div className="loginHr"></div>Hoặc <div className="loginHr"></div>
        <button className="loginFacebook">
          <AiFillFacebook className="loginIcon" /> Đăng nhập bằng Facebook
        </button>
        <span className="loginForget">Quên mật khẩu?</span>
      </div>
      <div className="loginRegisterr">
        <span>
          Bạn chưa có tài khỏa ư?{" "}
          <span className="loginRegister"><Link to='/register'>Đăng kí</Link></span>
        </span>
      </div>
    </div>
  );
};

export default Login;
