import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import "./presentational.css";

const Widget = ({ isMinimized, className, onClick }) => {
  const widgetClassName = classNames("widgetContainer", className, {
    minimizedWidget: isMinimized
  });

  return (
    <div onClick={onClick} className={widgetClassName}>
      <img src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/white/png/128/comments-o.png" />
    </div>
  );
};

export default Widget;
