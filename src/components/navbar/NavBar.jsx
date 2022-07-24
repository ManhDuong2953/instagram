import React, { useState } from "react";
import "./navbar.scss";
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { RiSafariLine, RiSendPlaneFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { BiCommentAdd } from "react-icons/bi";
import Hr from "../hr/Hr";
import { Link } from "react-router-dom";
const NavBar = () => { 
  
  return (
    <>
      <div className="navBar">
        <div className="subNav">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" />
          </div>
          {/* <div className="search">
            <div className="searchInput">
              <div className="searchIcon">
                <AiOutlineSearch />
              </div>
              <input
                value={valueInput}
                type="text"
                onChange={(e) => KeyWordInput(e.target.value)}
                onKeyUp={(e) => handleInput(e)}
                placeholder="Tìm kiếm"
              />
            </div>
          </div> */}

          <div className="list">
            <ul className="listItems">
              <li className="item">
                <Link to="/">
                  <AiFillHome className="itemIcon" />
                </Link>
              </li>
              <li className="item">
                <Link to="/inboxs">
                  <FiSend className="itemIcon" />
                </Link>
              </li>
              <li className="item">
                <Link to="/newPost">
                  <BiCommentAdd className="itemIcon" />
                </Link>
              </li>
              <li className="item">
                <Link to="/stories">
                  <RiSafariLine className="itemIcon" />
                </Link>
              </li>
              <li className="item">
                <Link to="">
                  <AiOutlineHeart className="itemIcon" />
                </Link>
              </li>
              <li className="item">
                <Link to="/settings">
                  <img
                    className="avatar"
                    src="https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Hr />
    </>
  );
};

export default NavBar;

                // }