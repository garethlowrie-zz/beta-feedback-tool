import React from "react";
import ReactDOM from "react-dom";
import Feedback from "./Feedback/container";
import "font-awesome/css/font-awesome.min.css";
import "./presentational.css";

const App = () => {
  return (
    <div className="App">
      <Feedback />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
