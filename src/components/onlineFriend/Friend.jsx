import React from "react";
import "./friend.scss";
import InforUser from "../infor/InForUser";
import data from "../posts/JSONTIKTOK/aov.json";

const Friend = () => {
  return (
    <div className="friend">
      <ul className="listsFriends">
        {data.map((item,index) => (
          <li key={index} className="friendItem">
            <InforUser 
            styleList={{ flexDirection: "column", margin: 0 }}
            src={item.author.avatar_168x168.url_list[0]}
            // subName={item.}
            name={item.author.unique_id.slice(0, 9) + "..."}
            styleImg={{ width: "55px", height: "55px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friend;
