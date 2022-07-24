import React from "react";
import "./register.scss";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="registerHeader">
        <span className="registerLogo">Instagram</span>
        <span className="registerDesc">
          Đăng ký để xem ảnh và video từ bạn bè
        </span>
        <button className="registerFacebook">
          <AiFillFacebook className="registerIcon" /> Đăng nhập bằng Facebook
        </button>
      </div>
      <div className="registerHr"></div>Hoặc <div className="registerHr"></div>
      <div className="registerForm">
        <input type="text" placeholder="Số di động hoặc email" />
        <input type="text" placeholder="Tên đầy đủ" />
        <input type="text" placeholder="Tên người dùng" />
        <input type="text" placeholder="Mật khẩu" />
        <button className="registerButton">Đăng ký</button>
        <span className="registerPolicy">
          Bằng cách đăng ký, bạn đồng ý với{" "}
          <b>Điều khoản, Chính sách dữ liệu</b> và <b>Chính sách cookie</b> của
          chúng tôi.
        </span>
      </div>
      <div className="registerLoginn">
        <span>
          Ban co tai khoan? <span className="registerLogin"><Link to='/login'>Đăng nhập</Link></span>
        </span>
      </div>
    </div>
  );
};

export default Register;
