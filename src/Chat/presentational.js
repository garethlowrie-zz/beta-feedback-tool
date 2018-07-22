import React from "react";
import ReactDOM from "react-dom";
import ChatHeader from "../ChatHeader/presentational";
import ChatMessage from "../ChatMessage/presentational";
import classNames from "classnames";
import "./presentational.css";

const Chat = ({
  header,
  children,
  className,
  messages,
  inputValue,
  onChange,
  onClose,
  onKeyPress
}) => {
  const bodyClassName = classNames("chat-history", {
    centerNoMessages: messages.length === 0
  });

  return (
    <div className={classNames("live-chat", className)}>
      <ChatHeader onClose={onClose}>{header}</ChatHeader>

      <div className="chat">
        <div className={bodyClassName}>
          {messages &&
            messages.length > 0 &&
            messages.map(({ message, time, name }) => (
              <div>
                <ChatMessage name={name} time={time}>
                  {message}
                </ChatMessage>
                <hr className="rule" />
              </div>
            ))}

          {messages && messages.length === 0 && <div>{children}</div>}
        </div>

        <input
          className="input"
          type="text"
          placeholder="Type your message…"
          autoFocus
          value={inputValue}
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Chat;
