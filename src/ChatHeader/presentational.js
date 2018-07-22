import React from "react";
import ReactDOM from "react-dom";
import "./presentational.css";

const Header = ({ children, onClose }) => {
  return (
    <header className="header clearfix">
      <a className="close" onClick={onClose}>
        ❌
      </a>
      {children}
    </header>
  );
};

export default Header;
