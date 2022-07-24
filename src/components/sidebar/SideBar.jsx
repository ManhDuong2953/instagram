import React from "react";
import Footer from "../footer/Footer";
import "./sidebar.scss";
import InforUser from "../infor/InForUser";
import data from "../posts/JSONTIKTOK/aov.json";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarProfile">
        <InforUser
          subname="Dương Mạnh"
          styleImg={{ width: "55px", height: "55px" }}
          src="https://symbols.vn/wp-content/uploads/2021/11/hinh-tuong-Florentino-Lien-quan-che-bua.jpg"
          name="_duongmanh2953"
        />
        <span className="profileSwitch">Chuyển</span>
      </div>
      <div className="friendMore">
        <div className="friendTiltle">
          <span className="titleHide">Gợi ý cho bạn</span>
          <span className="titleMore">Xem tất cả</span>
        </div>
        <ul className="friendList">
          {data.map((item, index) => (
            <li key={index} className="itemMore">
              <InforUser
                src={item.author.avatar_168x168.url_list[0]}
                name={item.author.nickname}
                subName={item.author.unique_id.slice(0, 9) + "..."}
                styleImg={{ width: "55px", height: "55px" }}
              />
              <span className="itemFollow">Theo dõi</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarFooter">
        <Footer />
      </div>
    </div>
  );
};

export default SideBar;
