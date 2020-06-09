import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  MISTAKES_COUNT: 5
};

ReactDOM.render(
    <App
      mistakesCount = {Settings.MISTAKES_COUNT}/>,
    document.querySelector(`#root`)
);
