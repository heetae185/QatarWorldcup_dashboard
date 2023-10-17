import * as d3 from "d3";
import React from "react";
import "./style.css";
import flag from "./imgs/Q.jpeg";
import cpr_chart from "./imgs/chart.png";

function Compare(props) {
  return (
    <>
      <div className="Compare">
        <div className="compare1">
          <div className="Nat1">
            <b>
              <h2>{props.Cpr_nat1}</h2>
            </b>
            <img id="Nat1" src={flag} alt="1st Nat" />
          </div>
          <div className="Nat2">
            <b>
              <h2>{props.Cpr_nat2}</h2>
            </b>
            <img id="Nat2" src={flag} alt="2nd Nat" />
          </div>
        </div>

        <div className="compare2">
          <div className="cpr_chart1">
            <b>
              <h2>나라비교차트이름1</h2>
            </b>
            <img src={cpr_chart} alt="나라비교차트1" />
          </div>
          <div className="cpr_chart2">
            <b>
              <h2>나라비교차트이름2</h2>
            </b>
            <img src={cpr_chart} alt="나라비교차트2" />
          </div>
          <div className="cpr_chart3">
            <b>
              <h2>나라비교차트이름3</h2>
            </b>
            <img src={cpr_chart} alt="나라비교차트3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Compare;
