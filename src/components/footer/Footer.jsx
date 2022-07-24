import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footerList">
       <a href="http://"><li className="footerItem">Giới thiệu</li></a>
       <a href="http://"><li className="footerItem">Trợ giúp</li></a>
       <a href="http://"><li className="footerItem">Báo chí</li></a>
       <a href="http://"><li className="footerItem">API</li></a>
       <a href="http://"><li className="footerItem">Việc làm</li></a>
       <a href="http://"><li className="footerItem">Quyền riêng tư</li></a>
       <a href="http://"><li className="footerItem">Điều khoản</li></a>
       <a href="http://"><li className="footerItem">Vị trí</li></a>
       <a href="http://"><li className="footerItem">Ngôn ngữ</li></a>
      </ul>
      <div className="footerFrom">
        <span>© 2022 INSTAGRAM FROM TREE</span>
      </div>
    </div>
  );
};

export default Footer;
