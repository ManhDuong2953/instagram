import React from "react";
import "../infor/inforUS.scss";
const InforUser = (props) => {
  return (
    <div>
      <div className="postInfo" style={props.styleList}>
        <img
        className="postAvatar"
        style={props.styleList}
          src={props.src}
          onError={(event) => {
            event.target.onerror = "";
            event.target.src = "https://scr.vn/wp-content/uploads/2020/07/T%E1%BA%A3i-h%C3%ACnh-n%E1%BB%81n-%C4%91%E1%BA%B9p-7.jpg";
            return true;
          }}
        />
        <div className="nameUser">
          <span className="mainName">
            {props.name || "Người dùng Instagram"}
          </span>
          <span className="subName">{props.subname || ""}</span>
        </div>
      </div>
    </div>
  );
};
export default InforUser;
