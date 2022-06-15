import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
/*
넘겨 받을 것
data
nationality_name
player_number

https://d3-graph-gallery.com/graph/barplot_grouped_basicWide.html
*/
function CompareChart(props) {
    // console.log(props)
    // console.log(props.data)
    // props.data 접근하면 react애러뜸 못고침 ㅅㄱ
    if (props.data == null ) return <></>;
    if (props.data.length == 0 ) return <></>;
    // console.log(props.data)
    const svgRef = useRef(null);

    const margin = {top: 10, right: 30, bottom: 20, left: 50},
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;
    const moveXaxis = 30;
    const moveYaxis = 30;
    const moveYaxisT = height - moveYaxis;
    const moveYaxisS = - moveYaxis;

    // let data = [{group: "공격", nation1: '12', nation2: '1'},
    //                 {group: "미드필더", nation1: '6', nation2: '6'},
    //                 {group: "수비", nation1: '11', nation2: '28'},];
    let data = [{group: "공격", nation1: 0, nation2: 0},
                    {group: "미드필더", nation1: 0, nation2: 0},
                    {group: "수비", nation1: 0, nation2: 0},];
    const groups = ["공격", "미드필더", "수비"];
    const subgroups = ["nation1", "nation2"];


    data = [{group: "공격", nation1: '12', nation2: '1'},
                    {group: "미드필더", nation1: '6', nation2: '6'},
                    {group: "수비", nation1: '11', nation2: '28'},];

    let value = props.data[props.data.map((v) => v.Team == props.nations[0]).indexOf(true)];

    data[0].nation1 = value.a;
    data[1].nation1 = value.m;
    data[2].nation1 = value.d;
    value = props.data[props.data.map((v) => v.Team == props.nations[1]).indexOf(true)];
    // console.log(value)
    // console.log(data)
    data[0].nation2 = value.a;
    data[1].nation2 = value.m;
    data[2].nation2 = value.d;

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // Add X axis
        const xScale = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])

        // svg.append("g")
        // .attr("transform", `translate(0, ${height})`)
        // .call(d3.axisBottom(xScale).tickSize(0));

        const xAxis = d3.axisBottom(xScale).tickSize(0);
        svg.select(".x-axis")
            .style("transform", "translate(" + moveXaxis + "px, " + moveYaxisT +"px)")
            .style("font-size", "16px")
            .call(xAxis);

        // Add Y axis
        const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([ height, 0 ]);

        const yAxis = d3.axisLeft(yScale);
        svg.select(".y-axis")
        .style("transform", "translate(" + moveXaxis + "px, " + moveYaxisS + "px)")
            .call(yAxis);
            // console.log("translate(" + moveXaxis + ", " + "0" + ")");

        // const yAxis = d3.axisLeft(yScale)

        // Another scale for subgroup position?
        const xSubgroup = d3.scaleBand()
        .domain(subgroups)
        .range([0, xScale.bandwidth()])
        .padding([0.05])

        // color palette = one color per subgroup
        const color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#70193d','#C14D4D','#4daf4a'])


        // Show the bars
        svg.append("g")
        .selectAll("g")
        // Enter in data = loop group per group
        .data(data)
        .join("g")
        .attr("transform", d => `translate(${xScale(d.group)}, 0)`)
        .selectAll("rect")
        .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
        .join("rect")
        .attr("x", d => xSubgroup(d.key) + moveXaxis)
        .attr("y", d => yScale(d.value) - moveYaxis)
        .attr("width", xSubgroup.bandwidth())
        .attr("height", d => height - yScale(d.value))
        .attr("fill", d => color(d.key))
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
        ;



        function mouseover(e, v) {
            svg.selectAll('rect')
                // .attr("fill", "#e41a1c")
                .attr("opacity", 0.3)
            // d3.select(this).attr("fill", "#50001D");
            d3.select(this).attr("opacity", "1")
            tooltip.style("visibility", "visible")
                // .attr("opacity", 1)
                .text(v.value)
                // .attr("x",  e.screenX - e.offsetX + moveXaxis + 100)
                // .attr("x", e.target.x.animVal.value + 30)
                // .attr("y", e.target.y.animVal.value)
                .attr("x", e.x + 50 - 700)
                .attr("y", 60)
                console.log(e.target.x.animVal.value)
                console.log(e.target.y.animVal.value)
                console.log(e.x)
                console.log(e.y)
                console.log(e)
                // console.log(v)
                // console.log(v)
                // console.log(e.target.x.animVal.value)
                // console.log(e.offsetX)
                // console.log(e.offsetY)
            // svg.selectAll("text").attr("font-weight", "bold")
        }
        function mouseout(e) {
            svg.selectAll('rect')
                // .attr("fill", "#70193D")
                .attr("opacity", "1")
            d3.select(this).attr("opacity", "1");
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
        .style("margin", "24px")
        .attr("class", "tooltip")
        // .style("fill", "white")
        // .style("board", "2px")
    }, []);

    return (
        <div padding={20}>
        <svg ref={svgRef} width={width} height={height}>
            <g className="x-axis"></g>
            <g className="y-axis"></g>
        </svg>
        </div>
        )
}

export default CompareChart;