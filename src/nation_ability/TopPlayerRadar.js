import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import Radar from 'react-d3-radar';
/*
넘겨 받을 것
data
nationality_name
player_number
<TopPlayerHex data={dataset} player_number={0} nationality_name={nations[0]}/>
*/

function TopPlayerRadar(props) {
  if (props == null) return (<></>)
  if (props.data == null) return (<></>)
  if (props.data.length == 0) return (<></>)
  

  let data = props.data.filter((v) => v.nationality_name == props.nationality_name);


  if (data == null) return (<></>)
  if (data.length <= props.player_number) return (<></>)
  // console.log(data.length)


  const players = {
      variables: [
        {key: 'pace', label: 'Pace'},
        {key: 'shooting', label: 'Shooting'},
        {key: 'passing', label: 'Passing'},
        {key: 'dribbling', label: 'Dribbling'},
        {key: 'defending', label: 'Defending'},
        {key: 'physic', label: 'Physic'},
      ],
      sets: [{
        key: 'p1',
        label: 'My',
        values: {
          pace: parseInt(data[props.player_number].pace),
          shooting: parseInt(data[props.player_number].shooting),
          passing: parseInt(data[props.player_number].passing),
          dribbling: parseInt(data[props.player_number].dribbling),
          defending: parseInt(data[props.player_number].defending),
          physic: parseInt(data[props.player_number].physic),
        }     
  }]
    };

let mouseover = (() => <></>);
let mouseout = (() => <></>);
const svgRef = useRef(null);
useEffect(() => {
  const svg = d3.select(svgRef.current);

   mouseover = (e)  => {
    console.log("실행됨?")
    tooltip.style("visibility", "visible")
        .text(e.value)
  }
  mouseout = (e) => {
    tooltip.style("visibility", "hidden")
  }

  let tooltip = svg
  .append("text")
  .style("position", "absolute")
  .style("border-radius", "4px 4px 4px 4px")
  .style("background-color", "#E2E2E2")
  .style("visibility", "hidden")
  .style("font-size", "16px")
  .style("text-anchor", "middle")
  .style("margin", "24px")
  .attr("class", "tooltip")

  svg.selectAll("nation-ability-top-player-hex")
  .data(players)
  .join("Radar")  
  // .attr("x", (v) => moveXaxis + 1)                       // barchart의 기준 x값
  // .attr("y", (v) => yScale(v.ability_name))             // barchart의 기준 y값

  // .attr("width", v => xScale(v.ability_value) + moveXaxis)    // 바의 너비 조절
  // .attr("height", v => yScale.bandwidth())     // 바의 높이 조절
  // .attr("fill", "#70193D")                // 바차트 내부 채우기
  .attr("width", "200")
  .attr("height", "200")
  .attr("padding", "30")
  .attr("domainMax", "100")
  .attr("highlighted", null)
  // .attr("domainMax", "100")
  .on("mouseover", mouseover)
  .on("mouseout", mouseout)

}, []);

  
  return (
    <div className="nation-ability-top-player-hex">
      <Radar
        width={200}
        height={200}
        padding={30}
        domainMax={100}
        highlighted={null}
        onHover={(point) => {
          if (point) {
            console.log('hovered over a data point');
            // console.log(point)
            // mouseover(point)
          } else {
            console.log('not over anything');
            // mouseout(point)
          }
        }}

        data={players}
        />
        
        {/* <svg ref={svgRef} width={200} height={200}></svg> */}
  </div>
    )
}

export default TopPlayerRadar;

/*
{
    variables: [
            {key: 'pace', label: 'Pace'},
            {key: 'shooting', label: 'Shooting'},
            {key: 'passing', label: 'Passing'},
            {key: 'dribbling', label: 'Dribbling'},
            {key: 'defending', label: 'Defending'},
            {key: 'physic', label: 'Physic'},
              ],
    sets: [
        {
          key: 'me',
          label: 'My Scores',
          values: {
            pace: 40,
            shooting: 60,
            passing: 70,
            dribbling: 20,
            defending: 80,
            physic: 10,
          },
        },
        {
          key: 'everyone',
          label: 'Everyone',
          values: {
            pace: 100,
            shooting: 80,
            passing: 60,
            dribbling: 40,
            defending: 20,
            physic: 0,
          },
        },
    ],
  }
*/