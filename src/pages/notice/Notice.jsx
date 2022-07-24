import React from "react";
import "./notice.scss";

const Notice = () => {
  return (
    <div className="notice">
      <div className="noticeTime">
        <span>Tháng này</span>
      </div>
      <div className="noticeAll">
        <div className="noticeSingle">
          <div className="noticeInfo">
            <img
              src="assets/image/272267703_454494759633903_452663243069414998_n.jpg"
              alt=""
            />
            <span className="noticeDesc">
              <b>tuanodayy</b> đã bắt đầu theo dõi bạn
            </span>
            -<span style={{ fontSize: "12px", color: "gray" }}>12 tuần</span>
          </div>
          <button className="noticeFollow">Theo dõi</button>
        </div>
      </div>
    </div>
  );
};

export default Notice;
