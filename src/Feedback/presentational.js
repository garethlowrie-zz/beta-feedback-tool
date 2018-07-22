import React from "react";
import ReactDOM from "react-dom";
import Chat from "../Chat/container";
import Widget from "../Widget/presentational";
import classNames from "classnames";
import "./presentational.css";

const CustomHeader = <h4 className="headerText">Leave Feedback</h4>;

const Feedback = ({
  name,
  isMinimized,
  isOpen,
  onWidgetClick,
  onCloseClick,
  onSubmit
}) => {
  const chatClassName = classNames({
    showChat: isOpen
  });

  const widgetClassName = classNames({
    hideWidget: isOpen && !isMinimized,
    minimizeWidget: isMinimized
  });
  return (
    <div className="feedback">
      <Chat
        name={name}
        onClose={onCloseClick}
        onSubmit={onSubmit}
        className={chatClassName}
        header={CustomHeader}
      >
        <h2>Help us improve</h2>
        <p>
          We would love to find out more about your experience using our new
          featur. Got two minutes? Drop your thoughts in the box below and we
          will use this to shape the future of our product.
        </p>
      </Chat>
      <Widget
        isMinimized={isMinimized}
        onClick={onWidgetClick}
        className={widgetClassName}
      />
    </div>
  );
};

export default Feedback;
