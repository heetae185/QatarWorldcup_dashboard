import * as d3 from "d3";
import React from "react";
import "./style.css";
import Wrapper from "./Wrapper";
import LeftTop from "./LeftTop";
import RightTop from "./RightTop";
import RightTop2 from "./RightTop2";
import LeftBottom from "./LeftBottom";
import Compare from "./Compare";
import Grade from "./Grade";

function App() {
  return (
    <>
      <Wrapper>
        <div className="All">
          <LeftTop Nat_name="나라이름" Rank="랭크" Pred_rank="예측랭크" />
          <LeftBottom />
          <RightTop
            Nat_name="나라이름"
            PlayerName="선수 이름"
            Stat1="전력1"
            Stat2="전력2"
            Stat3="전력3"
          />
          <RightTop2
            Nat_name_2="나라이름"
            PlayerName_2="선수 이름"
            Stat2_1="전력1"
            Stat2_2="전력2"
            Stat2_3="전력3"
          />
          <Compare Cpr_nat1="첫번째 나라" Cpr_nat2="두번째 나라" />
          <Grade Nat_name="{나라 이름}" />
        </div>
      </Wrapper>
    </>
  );
}

export default App;
