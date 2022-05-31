import * as d3 from "d3";
import React from "react";
import "./style.css";
import flag from "./imgs/Q.jpeg";
import chart1 from "./imgs/chart.png";
import chart2 from "./imgs/chart2.png";
import player from "./imgs/player.jpeg";
import pChart from "./imgs/p_chart.png";

function RightTop(props) {
  return (
    <>
      <div class="right_up">
        <div className="rightUp1">
          <div class="Nat_Info">
            <h2>{props.Nat_name}</h2>
            <div className="RF">
              <img id="RF" src={flag} alt="flag img" />
            </div>
          </div>

          <div class="Chart1">
            <b>
              <h2>공격</h2>
            </b>
            <div className="divForChart1">
              <img id="Chart1" src={chart1} alt="전력바 차트" />
            </div>
          </div>

          <div class="Chart2">
            <b>
              <h2>미드필더</h2>
            </b>
            <div className="divForChart2">
              <img id="Chart2" src={chart1} alt="전력바 차트" />
            </div>
          </div>

          <div class="Chart3">
            <b>
              <h2>수비</h2>
            </b>
            <div className="divForChart3">
              <img id="Chart3" src={chart1} alt="전력바 차트" />
            </div>
          </div>
        </div>

        <div className="rightUp2">
          <div class="Player1">
            <div class="Player1_info">
              <div className="Player1_img">
                <img id="Player1" src={player} alt="선수 사진" />
              </div>
              <div className="Player1_stat">
                <h3>{props.PlayerName}</h3>
                <h3>{props.Stat1}</h3>
                <h3>{props.Stat2}</h3>
                <h3>{props.Stat3}</h3>
              </div>
            </div>

            <div className="divForStatChart1">
              <img id="P_chart1" src={pChart} alt="선수 전력" />
            </div>
          </div>

          <div class="Player2">
            <div class="Player2_info">
              <div className="Player2_img">
                <img id="Player2" src={player} alt="선수 사진" />
              </div>
              <div className="Player2_stat">
                <h3>{props.PlayerName}</h3>
                <h3>{props.Stat1}</h3>
                <h3>{props.Stat2}</h3>
                <h3>{props.Stat3}</h3>
              </div>
            </div>

            <div className="divForStatChart2">
              <img id="P_chart2" src={pChart} alt="선수 전력" />
            </div>
          </div>

          <div class="Player3">
            <div class="Player3_info">
              <div className="Player3_img">
                <img id="Player3" src={player} alt="선수 사진" />
              </div>
              <div className="Player3_stat">
                <h3>{props.PlayerName}</h3>
                <h3>{props.Stat1}</h3>
                <h3>{props.Stat2}</h3>
                <h3>{props.Stat3}</h3>
              </div>
            </div>

            <div className="divForStatChart3">
              <img id="P_chart3" src={pChart} alt="선수 전력" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightTop;
