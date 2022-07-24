import React from "react";
import "./listfriends.scss";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";


const ListFriends = () => {
  return (
    <div className="listFriends">
      <div className="friendHeader">
        <div className="left"></div>
        <div className="center">
          <div className="friendInfo">
            <span>_tuanodayy</span>
            <AiOutlineArrowDown className="friendIcon" />
          </div>
        </div>
        <div className="right">
          <BsPencilSquare style={{ fontSize: "22px", cursor: "pointer" }} />
        </div>
      </div>
      <div className="friendHr"></div>
      <div className="friendAll">
        <div className="friendSingle">
          <div className="friendImg">
            <img
              src="assets/image/272267703_454494759633903_452663243069414998_n.jpg"
              alt=""
            />
          </div>
          <div className="friendInfos">
            <span>Bui Huu Tuan</span>
            <div className="infosMessage">
              <span className="messagesPast">Thanks you</span>-
              <span className="onlineAgo">12 tuần</span>
            </div>
          </div>
        </div>
        <div className="friendSingle">
          <div className="friendImg">
            <img
              src="assets/image/272267703_454494759633903_452663243069414998_n.jpg"
              alt=""
            />
          </div>
          <div className="friendInfos">
            <span>Bui Huu Tuan</span>
            <div className="infosMessage">
              <span className="messagesPast">Thanks you</span>-
              <span className="onlineAgo">12 tuần</span>
            </div>
          </div>
        </div>
        <div className="friendSingle">
          <div className="friendImg">
            <img
              src="assets/image/272267703_454494759633903_452663243069414998_n.jpg"
              alt=""
            />
          </div>
          <div className="friendInfos">
            <span>Bui Huu Tuan</span>
            <div className="infosMessage">
              <span className="messagesPast">Thanks you</span>-
              <span className="onlineAgo">12 tuần</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFriends;
