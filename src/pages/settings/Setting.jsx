import React from "react";
import "./setting.scss";
import { CgProfile } from "react-icons/cg";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineChangeCircle } from "react-icons/md";

const Setting = () => {
  return (
    <div className="setting">
      <div className="options">
        <ul className="optionList">
          <li className="optionItem optionHover">
            <CgProfile className="optionIcon " /> Trang cá nhân
          </li>
          <li className="optionItem optionHover">
            <BsBookmark className="optionIcon" /> Đã lưu
          </li>
          <li className="optionItem optionHover">
            <AiOutlineSetting className="optionIcon" /> Cài đặt
          </li>
          <li className="optionItem optionHover">
            <MdOutlineChangeCircle className="optionIcon" /> Chuyển tài khoản
          </li>
        </ul>
      </div>
      <div className="settingHr"></div>
      <div className="settingLogout optionHover">
        <span>Đăng xuất</span>
      </div>
    </div>
  );
};

export default Setting;
