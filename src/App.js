import React from "react";
import "./App.css";
import TitleTemplate from "./component/Main/TitleTemplate";
import ViewerPage from "./page/ViewerPage";

function App() {
  return (
    <div className="App">
      <TitleTemplate />
      <ViewerPage />
    </div>
  );
}

export default App;
