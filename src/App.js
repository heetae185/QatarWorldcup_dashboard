import * as d3 from "d3";
import React from "react";
import "./style.css";
import LeftTop from "./LeftTop";
import RightTop from "./RightTop";

function App() {
  return (
    <>
      <div className="All">
        <LeftTop Nat_name="나라이름" Rank="랭크" Pred_rank="예측랭크" />
        <RightTop
          Nat_name="나라이름"
          PlayerName="선수 이름"
          Stat1="전력1"
          Stat2="전력2"
          Stat3="전력3"
        />
      </div>
    </>
  );
}

export default App;
