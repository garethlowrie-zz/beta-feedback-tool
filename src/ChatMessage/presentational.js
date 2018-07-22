import React from "react";
import ReactDOM from "react-dom";
import "./presentational.css";

const ChatMessage = ({ name, time, children }) => {
  return (
    <div className="chatContainer clearfix">
      <img
        src="https://uploads.codesandbox.io/uploads/user/764da6d9-97b2-4ecf-bddc-b634ae05c5d3/ILrr-icons8-circled-user-male-skin-type-3-48.png"
        alt=""
        width="42"
        height="42"
      />
      <div className="messageContent clearfix">
        <span className="time">{time}</span>
        <h5 className="nameHeader">{name}</h5>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
