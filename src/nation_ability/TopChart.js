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
        for(let j = 0; j < data.length; j++) {
            let newAbility = {};
            newAbility.ability_name = Object.keys(data[0])[i + 37];
            newAbility.ability_value += data[0][newAbility.ability_name];
            abilitys[abilitys.length] = newAbility;
        }
    }

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        const xScale = d3
        .scaleLinear()
        .domain([0, 100])
        .range([0, 500])

        const yScale =d3
        .scaleBand()                               // 단순 용도인듯.
        .domain(abilitys.map((v) => v.ability_name)) // map은 순서를 알려주는 것 같음.
        .range([0, 250])                    
        .padding(0.45);                             // 막대그래프 굵기 조걸

        const yAxis = d3
            .axisLeft(yScale)
            .ticks(abilitys.length);
        
        svg.select(".y-axis")
            .style("transform", "translateX(" + moveXaxis + "px)")
            // .style("font", "20px times")
            .call(yAxis);            // 폰트 크기 조절

        svg.selectAll("bar")
        .data(abilitys)
        .join("rect")  
        .attr("class", "nation-chart-bar")                   // 속석은 바차트

        .attr("x", (v) => v.ability_value)                       // barchart의 기준 x값
        .attr("y", (v) => yScale(v.ability_name))             // barchart의 기준 y값

        .attr("width", v => xScale(v.ability_value))    // 바의 너비 조절
        .attr("height", v => yScale.bandwidth())     // 바의 높이 조절
        // .attr("fill", "#70193D")                // 바차트 내부 채우기
        .attr("fill", "orange")                 // 바차트 내부 채우기


        .on("mouseover", mouseover)
        .on("mouseout", mouseout)


        function mouseover(d) {
            d3.select(this).attr("fill", "#000000");
            // console.log(d)
        }
        function mouseout(d) {
            d3.select(this).attr("fill", "#70193D");
        }





        // svg.selectAll("nation-chart-text")
        // .data(data)                                         // data연결
        // .enter().append("text")
        //     .attr("class", "nation-chart-text")
        //     .attr("text-anchor", "middle")                  // 중앙 정렬
        //     .attr("x", (d) => d.ability_value  + moveXaxis + 20)              // x위치
        //     .attr("y", (d) => yScale(d.ability_name) +12)   // y위치
        //     .text((d) => d.ability_value);                  // 실제 text값
    }, []);

    return (
        <svg ref ={svgRef} height="380px" width="400px" >
            <g className="y-axis"></g>
        </svg>
)
}

export default TopChart;