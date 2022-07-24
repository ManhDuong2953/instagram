import React from "react";
import "./inboxs.scss";
import ListFriends from "./listFriends/ListFriends";
import Messages from "./messages/Messages";

const Inboxs = () => {
  return (
    <div className="inboxs">
      <div className="inboxListFriends">
        <ListFriends />
      </div>

      <div className="inboxMessages">
        <Messages />
      </div>
    </div>
  );
};

export default Inboxs;
