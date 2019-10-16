import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TitleTemplate from "./component/Main/TitleTemplate";
import ViewerPage from "./page/ViewerPage";
import { createStore } from "redux";

function App() {
  console.log(window.outerWidth);
  return (
    <div className="App">
      <TitleTemplate />
      <ViewerPage />
    </div>
  );
}

export default App;
