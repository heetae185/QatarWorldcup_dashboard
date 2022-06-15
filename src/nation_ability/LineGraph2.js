import React from "react";
import * as d3 from "d3";
import {useEffect, useRef, useState } from "react";
import input_data from "../data/value.csv";

let years = ["1986", "1990", "1994", "1998", "2002", "2006", "2010", "2014", "2018"];
let ranks = ["1위","2위","3위","4위","8강","16강","32강","64강"]
let country = [];
let rank_1986 = [];
let rank_1990 = [];
let rank_1994 = [];
let rank_1998 = [];
let rank_2002 = [];
let rank_2006 = [];
let rank_2010 = [];
let rank_2014 = [];
let rank_2018 = [];
let T1, T2;
let T1_address, T2_address;
let once = true;
let verti = 320; // 전체 세로 길이 조절
let hori = 660; // 전체 가로 길이 조절

let graph_verti = verti*9/10; // 숫자를 통해 그래프의 세로 조절(바닥이 높아짐)
let graph_hori = hori*32/33; // 숫자를 통해 그래프의 가로 조절(우측이 짧아짐)
let start_hori = hori*3/33; // 숫자를 통해 그래프의 가로 조절(좌측이 짧아짐)
let start_verti = verti*3/10; // 숫자를 통해 그래프의 세로 조절(천장이 낮아짐)
let hori_space = (graph_hori - start_hori)/8;
let verti_space = (graph_verti - start_verti)/7;
let title_hori = graph_hori/2 + 20;
let multi_color = "#C14D4D";
let single_color = "#70193D";


function Graph(props){
  const [data, setData] = useState([]);
  const [multi, setData_multi] = useState([]);
  const svgRef = useRef(null);
  const GetData = async () => {
      let file = await d3.csv(input_data);
      for(var i=0; i<file.length; i++){
        country.push(file[i].Country)
        rank_1986.push(file[i].A)
        rank_1990.push(file[i].B)
        rank_1994.push(file[i].C)
        rank_1998.push(file[i].D)
        rank_2002.push(file[i].E)
        rank_2006.push(file[i].F)
        rank_2010.push(file[i].G)
        rank_2014.push(file[i].H)
        rank_2018.push(file[i].I)
      }
      if(props.compare.length == 1){
        let dataset = Single();
        dataset = Calc(dataset);
        for(let i=0; i<dataset.length; i++){
          dataset[i] = Calc(dataset[i]);
        }
        setData(dataset);
        once = false;
      }
      else if(props.compare.length > 1){
      let datasets = Multi();
      let dataset = datasets[0];
      let dataset_multi = datasets[1];
      for(let i=0; i<dataset.length; i++){
        dataset[i] = Calc(dataset[i]);
      }
      for(let j=0; j<dataset.length; j++){
        dataset_multi[j] = Calc(dataset_multi[j]);
      }
      setData(dataset);
      setData_multi(dataset_multi);
      once = false;
    }
  }

  GetData();


  useEffect(() => {
    const svg = d3.select(svgRef.current)
    // .style('border', '4px #70193D solid')
    // .style('border-radius', '20px')
    // .style('margin', '20px')
    // .style('padding', '10px');

    svg                           //기존에 있던 제목과 가로축 세로축 중복 제거
    .selectAll(".line_dot")
    .remove();
    svg                           
    .selectAll(".line_dot2")
    .remove();
    svg                           
    .selectAll(".line2")
    .remove();
    svg
    .selectAll(".line_title")
    .remove();
    svg
    .selectAll(".line_axis")
    .remove();
    svg
    .selectAll(".line1_country")
    .remove();

    svg
    .selectAll(".line2_country")
    .remove();

    svg.selectAll(".country_dot")
    .remove();

    svg.selectAll(".tooltip_single")
    .remove();

    svg.selectAll(".tooltip_multi")
    .remove();

    if(props.compare.length > 1){
      single_color = "#70193d";
    }
    else single_color = "#70193D";
    const xScale = d3.scaleLinear().domain([0,data.length-1]).range([start_hori,graph_hori]);
    const yScale = d3.scaleLinear().domain([0,7]).range([graph_verti,start_verti]);
    const xAxis = d3.axisBottom(xScale).ticks(0);
    const yAxis = d3.axisLeft(yScale).ticks(0);
    svg.select(".x-axis").style("transform", "translateY(" + graph_verti + "px)").call(xAxis);
    svg.select(".y-axis").style("transform", "translateX(" + start_hori  + "px)").call(yAxis);
    const myLine = d3
    .line()
    .x((v, i)=> xScale(i))
    .y((v)=> yScale(v));

    svg
    .append("text")
    .attr("class", "line1_country")
    .attr("x", start_hori - 13)
    .attr("y", start_verti - 18)
    .attr("font-size", "10px")
    .style("text-anchor", "left")
    .text(props.compare[0])
    .attr("fill", "black");


   svg
    .append("circle")
    .attr("class", "country_dot")
    .attr("cx", start_hori - 20)
    .attr("cy", start_verti - 21)
    .attr("stroke", single_color)
    .attr("fill", single_color)
    .attr("r", 2.5);

    svg
    .selectAll(".line")
    .data([data])
    .join((enter)=> enter.append("path"))
    .attr("class", "line")
    .attr("d", (v) => myLine(v))
    .attr("fill", "none")
    .attr("stroke",single_color)
    .attr("stroke-width", 3);

    var tooltip_single = svg
    .append("text")
    .style("position", "absolute")
    .style("border-radius", "4px 4px 4px 4px")
    .style("background-color", "#E2E2E2")
    .style("visibility", "hidden")
    .style("font-size", "12px")
    .style("text-anchor", "middle")
    .attr("class", "tooltip_single");

    svg
    .selectAll(".line_dot")
    .data(data)
    .enter().append("circle")
    .attr("class","line_dot")
    .attr("cx", (v, i)=> xScale(i))
    .attr("cy",(v)=> yScale(v))
    .attr("r", 2.5)
    .on("mouseover", function(v,i){
      var text_rank; 
      if(i == 0) text_rank = "64강";
      if(i == 1) text_rank = "32강";
      if(i == 2) text_rank = "16강";
      if(i == 3) text_rank = "8강";
      if(i == 4) text_rank = "4위";
      if(i == 5) text_rank = "3위";
      if(i == 6) text_rank = "2위";
      if(i == 7) text_rank = "1위";
    tooltip_single.style("visibility", "visible")
    .text(text_rank)
    .attr("font-weight", "bold")
    .attr("y", v.offsetY - (graph_verti)/(verti*1/14))
    .attr("x", v.offsetX - hori_space/(hori/60));})
  .on("mouseout", function(){
    tooltip_single.style("visibility", "hidden");});;

   svg
    .append("text")
    .attr("class", "line_title")
    .attr("font-weight", "bold")
    .attr("x", title_hori)
    .attr("y", start_verti - verti_space - 35)
    .attr("dy", "0.5em")
    .style("text-anchor", "middle")
    .text("과거 월드컵 순위")
    .attr("fill", "#70193D");



for(let k=0; k<7; k++){
    svg
    .append("line")
    .attr("class", "line_axis")
    .attr("x1", start_hori)
    .attr("x2", graph_hori)
    .attr("y1", start_verti + verti_space*k)
    .attr("y2", start_verti + verti_space*k)
    .style("stroke", "gray")
    .style("stroke-width", 0.3);
}

for(let l=0; l<9; l++){
    svg
    .append("text")
    .attr("class", "line_axis")
    .attr("x", start_hori + hori_space*l)
    .attr("y", graph_verti + 18)
    .attr("font-size", "12px")
    .style("text-anchor", "middle")
    .text(years[l])
    .attr("fill", "black");
}
for(let m=0; m<8; m++){
  svg
  .append("text")
  .attr("class", "line_axis")
  .attr("x", start_hori-20)
  .attr("y", start_verti+5 + verti_space*m)
  .attr("font-size", "12px")
  .style("text-anchor", "middle")
  .text(ranks[m])
  .attr("fill", "black");
}

}, [data]);
useEffect(() => {
  const svg = d3.select(svgRef.current)
  const xScale = d3.scaleLinear().domain([0,data.length-1]).range([start_hori,graph_hori]);
  const yScale = d3.scaleLinear().domain([0,7]).range([graph_verti,start_verti]);
  const xAxis = d3.axisBottom(xScale).ticks(0);
  const yAxis = d3.axisLeft(yScale).ticks(0);
  svg.select(".x-axis").style("transform", "translateY(" + graph_verti + "px)").call(xAxis);
  svg.select(".y-axis").style("transform", "translateX(" + start_hori  + "px)").call(yAxis);
  const myLine = d3
  .line()
  .x((v, i)=> xScale(i))
  .y((v)=> yScale(v));

    var tooltip_multi = svg
    .append("text")
    .style("position", "absolute")
    .style("border-radius", "4px 4px 4px 4px")
    .style("background-color", "#E2E2E2")
    .style("visibility", "hidden")
    .style("font-size", "12px")
    .style("text-anchor", "middle")
    .style("margin", "30px")
    .attr("class", "tooltip_multi");
  

 svg
  .append("text")
  .attr("class", "line2_country")
  .attr("x", start_hori - 13)
  .attr("y", start_verti - 33)
  .attr("font-size", "10px")
  .style("text-anchor", "left")
  .text(props.compare[1])
  .attr("fill", "black");

  svg
  .append("circle")
  .attr("class", "country_dot")
  .attr("cx", start_hori - 20)
  .attr("cy", start_verti - 36)
  .attr("stroke", multi_color)
  .attr("fill", multi_color)
  .attr("r", 2.5);

  svg
  .selectAll(".line2")
  .data([multi])
  .join((enter)=> enter.append("path"))
  .attr("class", "line2")
  .attr("d", (v) => myLine(v))
  .attr("fill", "none")
  .attr("stroke",multi_color)
  .attr("stroke-width", 3);

  svg
  .selectAll(".line_dot2")
  .data(multi)
  .enter().append("circle")
  .attr("class","line_dot2")
  .attr("cx", (v, i)=> xScale(i))
  .attr("cy",(v)=> yScale(v))
  .attr("r", 2.5)
  .on("mouseover", function(v,i){
      var text_rank; 
      if(i == 0) text_rank = "64강";
      if(i == 1) text_rank = "32강";
      if(i == 2) text_rank = "16강";
      if(i == 3) text_rank = "8강";
      if(i == 4) text_rank = "4위";
      if(i == 5) text_rank = "3위";
      if(i == 6) text_rank = "2위";
      if(i == 7) text_rank = "1위";
    tooltip_multi.style("visibility", "visible")
    .text(text_rank)
    .attr("font-weight", "bold")
    .attr("y", v.offsetY - (graph_verti)/(verti*1/18))
    .attr("x", v.offsetX - hori_space/(hori/60));})
  .on("mouseout", function(){
    tooltip_multi.style("visibility", "hidden");});
}, [multi]);
function Calc(rank){
  if(rank == 1) rank = 7;
  if(rank == 2) rank = 6;
  if(rank == 3) rank = 5;
  if(rank == 4) rank = 4;
  if(rank == 8) rank = 3;
  if(rank == 16) rank = 2;
  if(rank == 32) rank = 1;
  if(rank == 64) rank = 0;
  return rank;
}
function Single(){
  T1 = props.compare[0];
  for(var i=0; i<country.length; i++){
    if(country[i] == T1){
      T1_address = i;
      break;
    }
  }
  let dataset1 = [rank_1986[T1_address], rank_1990[T1_address], rank_1994[T1_address], rank_1998[T1_address], rank_2002[T1_address], rank_2006[T1_address],
  rank_2010[T1_address], rank_2014[T1_address], rank_2018[T1_address]];
  return dataset1;
}
function Multi(){
  T1 = props.compare[0];
  T2 = props.compare[1];
  for(var i=0; i<country.length; i++){
    if(country[i] == T1){
      T1_address = i;
      break;
    }
  }
  for(var j=0; j<country.length; j++){
    if(country[j] == T2){
      T2_address = j;
      break;
    }
  }
  let dataset1 = [rank_1986[T1_address], rank_1990[T1_address], rank_1994[T1_address], rank_1998[T1_address], rank_2002[T1_address], rank_2006[T1_address],
  rank_2010[T1_address], rank_2014[T1_address], rank_2018[T1_address]];
  let dataset2 = [rank_1986[T2_address], rank_1990[T2_address], rank_1994[T2_address], rank_1998[T2_address], rank_2002[T2_address], rank_2006[T2_address],
  rank_2010[T2_address], rank_2014[T2_address], rank_2018[T2_address]];
  let dataset = [dataset1, dataset2];
  return dataset;
}
return (
  <>
    <svg id={"line_data"} ref={svgRef} width={hori} height={verti}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  </>
);
}

export default Graph;
