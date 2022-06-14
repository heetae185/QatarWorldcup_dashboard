import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

/*
<TopChart nationality_name={nations[0]} data={dataset}/>
*/
function TopChart(props) {
    // console.log(props)
    // console.log(props.data)
    // props.data 접근하면 react애러뜸 못고침 ㅅㄱ
    if (props.data == null ) return <></>;
    if (props.data.length == 0 ) return <></>;

    let abilitys = [];
    const svgRef = useRef(null);

    const moveXaxis = 80;
    const data = props.data.filter((v) => v.nationality_name == props.nationality_name)
                            .filter((v) => parseInt(v.pace) != 0);
                            
    if (data.length == 0) {return (<></>)}
    
    for(let i = 0; i < 6; i++) {
        let newAbility = {ability_name: "", ability_value: 0};
        newAbility.ability_name = Object.keys(data[i])[i + 37];
        for(let j = 0; j < 10; j++) {
            newAbility.ability_value = parseInt(newAbility.ability_value) + parseInt(data[i][newAbility.ability_name]);
            
        }
        // console.log(newAbility.ability_value)
        newAbility.ability_value = parseInt(newAbility.ability_value / 10)
        abilitys[abilitys.length] = newAbility;
    }

    useEffect(() => {
        const svg = d3.select(svgRef.current);



        const xScale = d3
        .scaleLinear()
        .domain([0, 100])
        .range([0, 300])

        const yScale =d3
        .scaleBand()                               // 단순 용도인듯.
        .domain(abilitys.map((v) => v.ability_name)) // map은 순서를 알려주는 것 같음.
        .range([0, 299])                    
        .padding(0.45);                             // 막대그래프 굵기 조걸

        const yAxis = d3
            .axisLeft(yScale)
            .ticks(abilitys.length);
        
        svg.select(".y-axis")
            .style("transform", "translateX(" + moveXaxis + "px)")
            // .style("font", "20px times")
            .call(yAxis);            // 폰트 크기 조절
        
            // console.log(abilitys)
        svg.selectAll("bar")
        .data(abilitys)
        .join("rect")  
        .attr("class", "nation-chart-bar")                   // 속석은 바차트

        .attr("x", (v) => moveXaxis + 1)                       // barchart의 기준 x값
        .attr("y", (v) => yScale(v.ability_name))             // barchart의 기준 y값

        .attr("width", v => xScale(v.ability_value) + moveXaxis)    // 바의 너비 조절
        .attr("height", v => yScale.bandwidth())     // 바의 높이 조절
        .attr("fill", "#70193D")                // 바차트 내부 채우기

        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
        // .on("mousemove", mousemove)


        function mousemove(e) {
            tooltip .attr("x",  e.offsetX +30)
            .attr("y", e.offsetY + 30)
        }

        function mouseover(e, v) {
            svg.selectAll('rect')
                .attr("fill", "#F5DBDB")
                // .attr("opacity", "0.5")
            d3.select(this).attr("fill", "#50001D");
            tooltip.style("visibility", "visible")
                // .attr("opacity", "0")
                .text(v.ability_value)
                // .attr("x",  e.screenX - e.offsetX + moveXaxis + 100)
                .attr("x",  e.target.width.animVal.value + moveXaxis - 20)
                .attr("y", e.target.y.animVal.value  + 17)
                console.log(e.target)
                // console.log(e.target.x.animVal.value)
                // console.log(e.offsetX)
                // console.log(e.offsetY)
            // svg.selectAll("text").attr("font-weight", "bold")
        }
        function mouseout(e) {
            svg.selectAll('rect')
                .attr("fill", "#70193D")
                // .attr("opacity", "1")
            d3.select(this).attr("fill", "#70193D");
            tooltip.style("visibility", "hidden")
                // .text("dsfdfdsfdsdf")
        }

        let tooltip = svg
        .append("text")
        .attr("class", "tool-tip")
        .style("position", "absolute")
        .style("border-radius", "4px 4px 4px 4px")
        .style("background-color", "#E2E2E2")
        .style("visibility", "hidden")
        .style("font-size", "16px")
        .style("text-anchor", "middle")
        .style("margin", "30px")
        .attr("class", "tooltip")
        .style("fill", "white")

        // svg.selectAll("nation-chart-text")
        // .data(abilitys)                                         // data연결
        // .enter().append("text")
        //     .attr("class", "nation-chart-text")
        //     .attr("text-anchor", "middle")                  // 중앙 정렬
        //     .attr("x", (d) => xScale(d.ability_value)  + moveXaxis + 100)              // x위치
        //     .attr("y", (d) => yScale(d.ability_name) +15)   // y위치
        //     .text((d) => d.ability_value);                  // 실제 text값
    }, []);

    return (
        <svg ref ={svgRef} height="300px" width="500px" >
            <g className="y-axis"></g>
            {/* <g className="tool-tip"></g> */}
        </svg>
)
}

export default TopChart;