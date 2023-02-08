import React from "react";
import "./App.css";
import Sidebar from "./Navbar/Sidebar";
import Gallery from "./Gallery/gallery";
function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
