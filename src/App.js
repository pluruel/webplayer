import React from "react";
import "./App.css";
import TitleTemplate from "./component/Main/TitleTemplate";
import ViewerPage from "./page/ViewerPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TitleTemplate />
      <Route path="/player" component={ViewerPage} />
    </div>
  );
}

export default App;
