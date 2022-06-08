import * as d3 from "d3";
import React from "react";
import "./style.css";
import LeftTop from "./LeftTop";
import RightTop from "./RightTop";
import DivRight from "./DivRight";
import LeftBottom from "./LeftBottom";

function App() {
  return (
    <>
      <div className="All">
            <LeftTop/>
            <LeftBottom/>
            <DivRight/>
      </div>
    </>
  );
}

export default App;
