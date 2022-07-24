import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./post.scss";
import InforUser from "../infor/InForUser";
import { AiOutlineHeart, AiOutlineSmile, AiFillHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FiSend, FiMoreHorizontal } from "react-icons/fi";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";

const Post = (props) => {
  const Liked = props.likes;
  const [like, setLike] = useState(Liked);
  const [checkLike, setCheckLike] = useState(false);
  const [checkCmt, setCheckCmt] = useState(false);
  const [checkMark, setCheckMark] = useState(false);
  const [checkRM, setCheckRM] = useState(false);
  const listHeart = useRef();
  const listMedia = useRef();

  useLayoutEffect(()=>{
    listHeart.current = document.querySelectorAll(".likeHeartBig");
    listMedia.current = document.querySelectorAll(".iconHeart");
    listMedia.current.forEach((item, index) => {
      item.ondblclick =  () => {
        listHeart.current[index].classList.add("active");
        setTimeout(()=>{
          document.querySelector(".likeHeartBig.active").classList.remove("active");
        },900)
      };
    });
  },[])

  function handleLike() {
    setCheckLike(!checkLike);
    if (checkLike) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
  }

  function handleCmt(e) {
    if (e !== "") {
      setCheckCmt(true);
    } else {
      setCheckCmt(false);
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function handlePostMedia(props) {
    if (props.src) {
      return (
        <>
          <img src={props.src} alt="" className="postImage" />
          <div className="iconHeart">
            <AiFillHeart className="likeHeartBig" />
          </div>
        </>
      );
    }
    if (props.vdsrc) {
      return (
        <>
          <video
            src={props.vdsrc}
            id={props.id}
            // onClick={() => checkVideoPlay(props.id)}

            controls
            controlsList="nofullscreen"
            className="postImage"
          ></video>
          <div className="iconHeart">
            <AiFillHeart className="likeHeartBig" />
          </div>
        </>
      );
    } else {
      return (
        <p style={{ padding: "0 15px", margin: "5px 0 0" }}>
          Bài viết không có ảnh/video đính kèm
        </p>
      );
    }
  }

  return (
    <div className="post">
      <div className="PostHeader">
        <InforUser
          subname={props.subName}
          src={props.userAvt}
          name={props.nameUser}
        />
        <FiMoreHorizontal className="iconMore" />
      </div>

      <div
        className="postImg"
        onDoubleClick={() => {
          handleLike()
        }}
      >
        {handlePostMedia(props)}
      </div>
      <div className="postReactions">
        <div className="postReact">
          <div className="postIcons">
            <div className="postEmote">
              <div className="iconsReaction" onClick={handleLike}>
                {checkLike ? (
                  <AiFillHeart className="fillHeart" />
                ) : (
                  <AiOutlineHeart />
                )}
              </div>
              <label htmlFor="cmtPost">
                <BiMessageRounded className="iconsReaction" />
              </label>
              <FiSend className="iconsReaction" />
            </div>
            <div className="iconsMark" onClick={() => setCheckMark(!checkMark)}>
              {checkMark ? <BsFillBookmarkCheckFill /> : <BsBookmark />}
            </div>
          </div>
        </div>
        <div className="postLikes">
          <span>
            <b>{numberWithCommas(like)}</b> lượt thích
          </span>
        </div>
        <div className="postTitle">
          <span onClick={() => setCheckRM(false)}>
            {props.status.slice(0, 80)}
            {checkRM ? props.status.slice(80) : ""}
          </span>
          <button onClick={() => setCheckRM(true)} className="readMore">
            {checkRM ? "" : "...xem thêm"}
          </button>
        </div>
        <a href="#" className="hashtagPost">
          {props.hashtag || ""}
        </a>
        <div className="CountCmt">
          Xem tất cả {props.countCmt || 0} bình luận
        </div>
        <div className="postTimeago">
          <span>7 giờ trước</span>
        </div>
      </div>
      <div className="postHr"></div>
      <div className="postComments">
        <div className="postComment">
          <div className="commentInput">
            <AiOutlineSmile className="commentIcon" />
            <input
              onChange={(e) => handleCmt(e.target.value)}
              type="text"
              id="cmtPost"
              placeholder="Thêm bình luận..."
            />
          </div>
          <span
            className="commentPush"
            style={
              checkCmt
                ? { opacity: "1", cursor: "pointer" }
                : { opacity: "0.4", cursor: "not-allowed" }
            }
          >
            Đăng
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
