import React from "react";
import "./messages.scss";
import { useState } from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineSmile,
  AiOutlinePicture,
  AiOutlineHeart,
} from "react-icons/ai";

const Messages = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText("");
    setTodos([...todos, text]);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setText("");
      setTodos([...todos, text]);
    }
  }

  return (
    <div className="messages">
      <div className="messagesWithFriend">
        <div className="messagesHeader">
          <div className="messagesInfo">
            <div className="messagesImg">
              <img
                src="assets\image\272267703_454494759633903_452663243069414998_n.jpg"
                alt=""
              />
            </div>
            <div className="messagesName">
              <span className="name">Dương Văn Mạnh</span>
              <span className="messagesAgo">12 giờ trước</span>
            </div>
          </div>
          <AiOutlineInfoCircle className="messagesNotice" />
        </div>
        <div className="messagesHr"></div>
        <ul className="boxChat">
          {todos.map((todo, index) => (
            <li key={index}>{todo} </li>
          ))}
        </ul>

        <div className="messagesSend">
          <div className="messagesInput">
            <AiOutlineSmile className="messagesSmile" />
            <input
              value={text}
              onChange={handleChange}
              placeholder="Nhắn tin..."
              onKeyDown={e=>handleKeyDown(e)}
            />
          </div>
          <div className="messagesReact" style={{lineHeight: "0"}}>
            {text === "" ? (
              <div>
                <AiOutlinePicture />
                <AiOutlineHeart style={{ marginLeft: "10px" }} />
              </div>
            ) : (
              <span className="messagesPush" onClick={handleClick}>
                Gửi
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
