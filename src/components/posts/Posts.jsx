/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Post from "../post/Post";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import "./posts.scss";

import VnNational from "./JSONTIKTOK/VnNational.json";
import aov from "./JSONTIKTOK/aov.json";
import beatvn from "./JSONTIKTOK/beatvn.json";
import bienhinh from "./JSONTIKTOK/bienhinh.json";
import boxing from "./JSONTIKTOK/boxing.json";
import car from "./JSONTIKTOK/car.json";
import florentino from "./JSONTIKTOK/florentino.json";
import messi from "./JSONTIKTOK/messi.json";
import mu from "./JSONTIKTOK/mu.json";
import reactjs from "./JSONTIKTOK/reactjs.json";
import ronaldo from "./JSONTIKTOK/ronaldo.json";
import soccer from "./JSONTIKTOK/soccer.json";
import trend from "./JSONTIKTOK/trend.json";

const Posts = () => {
  const [valueInit, setValueInit] = useState("");
  const [valueSuccess, setValueSuccess] = useState("aov");
  const [data, setData] = useState(aov);
  console.log(data)
  function handleInput(e) {
    if (e.key === "Enter") {
      var valueHandle = valueInit.split(" ").join("").toLocaleLowerCase();
      setValueSuccess(valueHandle);
      setValueInit("");
      console.log(data);
    }
  }
  function KeyWordInput(e) {
    setValueInit(e);
  }

  useEffect(() => {
    function dataHandle() {
      if (
        [
          "việtnam",
          "độituyểnviệtnam",
          "vn",
          "độituyểnquốcgia",
          "quanghải",
          "parkhangseo",
          "u23việtnam",
          "u23vn",
        ].includes(valueSuccess)
      ) {
        setData(VnNational);
      } else if (
        [
          "aov",
          "liênquânmobile",
          "liênquân",
          "hightlight",
          "đấutrườngdanhvọng",
        ].includes(valueSuccess)
      ) {
        setData(aov);
      } else if (
        [
          "beat",
          "beatvn",
          "beatđỏ",
          "news",
          "tintức",
          "thờisự",
          "bảntinhot",
          "tinmớinhất",
        ].includes(valueSuccess)
      ) {
        setData(beatvn);
      } else if (
        ["trendbiếnhình", "change", "thayđổi"].includes(valueSuccess)
      ) {
        setData(bienhinh);
      } else if (
        ["boxing", "boxer", "quyềnanh", "mma", "miketypeson", "võđài"].includes(
          valueSuccess
        )
      ) {
        setData(boxing);
      } else if (
        [
          "siêu xe",
          "suppercar",
          "lamborghini",
          "buggati",
          "ferrari",
          "mẹc",
          "mercedesbenz",
          "mercedes",
          "bmw",
        ].includes(valueSuccess)
      ) {
        setData(car);
      } else if (
        [
          "flo",
          "florentino",
          "túcóny",
          "vàđâylàfolontino",
          "vàđâylàflorentino",
          "nhặthoa",
          "hightlightflo",
        ].includes(valueSuccess)
      ) {
        setData(florentino);
      } else if (
        [
          "lionelmessi",
          "m10",
          "messi",
          "skill",
          "goat",
          "vuốtrâu",
          "ngườihùngchile",
        ].includes(valueSuccess)
      ) {
        setData(messi);
      } else if (["manchesterunited", "mu", "mufc"].includes(valueSuccess)) {
        setData(mu);
      } else if (["reactjs", "react"].includes(valueSuccess)) {
        setData(reactjs);
      } else if (
        [
          "cr7",
          "cristianoronaldo",
          "bảycỏ",
          "chịbảy",
          "hôipen",
          "ronaldo",
          "đánhđầu",
          "siêusao",
        ].includes(valueSuccess)
      ) {
        setData(ronaldo);
      } else if (
        ["trend", "xuhướng", "videothịnhhành", "topthịnhhành"].includes(
          valueSuccess
        )
      ) {
        setData(trend);
      } else if (
        ["football", "soccer", "bóngđá", "thểthao"].includes(valueSuccess)
      ) {
        setData(soccer);
      } else {
        setData("");
      }
    }
    dataHandle();
  }, [valueSuccess]);

  function ShowPosts(data) {
    if (data!=="") {
      return data.map((item, index) => (
        <Post
          key={index}
          id={index}
          className="videoPost"
          userAvt={item.author.avatar_168x168.url_list[0]}
          subName={item.author.unique_id}
          nameUser={item.author.nickname}
          src=""
          vdsrc={item.video.download_addr.url_list[2]}
          likes={item.statistics.digg_count}
          status={item.desc}
          hashtag={item.text_extra.map((htag) => " #" + htag.hashtag_name)}
          countCmt={item.statistics.comment_count}
        />
      ));
    } else if (!data) {
      return (
        <>
          <BsSearch className="iconErrorSearch" />
          <h1>Không có kết quả nào</h1>
          <p>{`Chúng tôi không tìm thấy kết quả nào cho nội dung ${valueSuccess}`}</p>
        </>
      );
    }
  }

  return (
    <>
      <div className="search">
        <div className="searchInput">
          <div className="searchIcon">
            <AiOutlineSearch />
          </div>
          <input
            value={valueInit}
            type="text"
            onChange={(e) => KeyWordInput(e.target.value)}
            onKeyDown={(e) => {
              handleInput(e);
            }}
            placeholder="Tìm kiếm"
          />
        </div>
      </div>

      <div className="posts">{ShowPosts(data)}</div>
    </>
  );
};

export default Posts;
