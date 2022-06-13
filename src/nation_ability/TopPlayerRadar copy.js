import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

/*
넘겨 받을 것
data
nationality_name
player_number
<TopPlayerHex data={dataset} player_number={0} nationality_name={nations[0]}/>
*/

function TopPlayerHex(props) {
    if (props.data == null) return (<></>)
    if (props.data.length == 0) return (<></>)
    

    const svgRef = useRef(null);
    let data = props.data.filter((v) => v.nationality_name == props.nationality_name)
                        .sort((a, b) => {
                                if (a.overall < b.overall) return 1;
                                if (a.overall == b.overall) return 0;
                                else return -1;
                        });

    if (data.length == 0) return <></>

    const MAX_ABILITY_COUNT = 6;
    const d = 50;                              // 육각형 한변의 길이(상하단만 유효, 중앙 한변의 길이는 살짝 길어짐.)
    const moveXaxis = 80;                       // 그래프를 X축으로 이동시킬 값
    const moveYaxis = 20;                       // 그래프를 Y축으로 이동시킬 값

    const width = 2 * d + moveXaxis * 2;        // 데이터 양에 따라 svg의 크기를 조절
    const height = 2 * d + moveYaxis * 2;       // 데이터 양에 따라 svg의 크기를 조절

    const hex_x1 = 0;                           // 육각형 x좌표들. 오름차순
    const hex_x2 = d/2;
    const hex_x3 = 3*d/2;
    const hex_x4 = 2*d;

    const hex_y1 = 0;                           // 육각형 y좌표들. 오름차순
    const hex_y2 = d;
    const hex_y3 = 2*d;

    // 비율에 맞게 x,y 좌표값을 수정해 줌.
    const calcPortion = function(score, reverse = false) {
        return reverse?score/100:1-score/100;
    };

    // 성향 그래프의 중앙 보조선들(75%, 50%, 25%)를 그릴 떄 사용
    const calcHexPos = function(hex, portion = 1) {
        let newHex = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]];
        for(var i = 0; i < hex.length; i++) {
            newHex[i][0] = (hex[i][0] - moveXaxis) * portion + (1 - portion) * d + moveXaxis;
            newHex[i][1] = (hex[i][1] - moveYaxis) * portion + (1 - portion) * d + moveYaxis;
        }
        return newHex;
    };



    let playerAbility = []
    for(var i = 0; i < MAX_ABILITY_COUNT + 1; i++) {
        var newAbility = {};
        newAbility.ability_name = Object.keys(data[props.player_number])[i + 37];
        newAbility.ability_value1 = data[props.player_number][newAbility.ability_name];
        newAbility.ability_value2 = data[props.player_number][newAbility.ability_name];
        playerAbility[i] = newAbility;
    }
                            //  고정값    hexagon의 비율                                     svg 이동 정보
    playerAbility[0].ability_value1 = d/2 + d/2 *calcPortion(playerAbility[0].ability_value1)        + moveXaxis
    playerAbility[0].ability_value2 =       d   *calcPortion(playerAbility[0].ability_value2)        + moveYaxis

    playerAbility[1].ability_value1 = d   + d/2 *calcPortion(playerAbility[1].ability_value1, true)  + moveXaxis
    playerAbility[1].ability_value2 =       d   *calcPortion(playerAbility[1].ability_value2)        + moveYaxis

    playerAbility[2].ability_value1 = d   + d   *calcPortion(playerAbility[2].ability_value1, true)  + moveXaxis
    playerAbility[2].ability_value2 = d                                                          + moveYaxis

    playerAbility[3].ability_value1 = d   + d/2 *calcPortion(playerAbility[3].ability_value1, true)  + moveXaxis
    playerAbility[3].ability_value2 = d   + d   *calcPortion(playerAbility[3].ability_value2, true)  + moveYaxis

    playerAbility[4].ability_value1 = d/2 + d/2 *calcPortion(playerAbility[4].ability_value1)        + moveXaxis
    playerAbility[4].ability_value2 = d   + d   *calcPortion(playerAbility[4].ability_value2, true)  + moveYaxis

    playerAbility[5].ability_value1 =       d   *calcPortion(playerAbility[5].ability_value1)        + moveXaxis
    playerAbility[5].ability_value2 = d                                                          + moveYaxis

    playerAbility[6].ability_name = playerAbility[0].ability_name           // 7번쨰 값은 원점을 연결하기 위해 첫번쨰 요소랑 같게
    playerAbility[6].ability_value1 = playerAbility[0].ability_value1
    playerAbility[6].ability_value2 = playerAbility[0].ability_value2


    const frame = [[hex_x2 + moveXaxis, hex_y1 + moveYaxis],            // hexagon 최외각 좌표들
                    [hex_x3 + moveXaxis, hex_y1 + moveYaxis],
                    [hex_x4 + moveXaxis, hex_y2 + moveYaxis],
                    [hex_x3 + moveXaxis, hex_y3 + moveYaxis],
                    [hex_x2 + moveXaxis, hex_y3 + moveYaxis],
                    [hex_x1 + moveXaxis, hex_y2 + moveYaxis],
                    [hex_x2 + moveXaxis, hex_y1 + moveYaxis]]

    // 중앙 75% 50% 25% 보조선 hexagon 설정
    const frames = [calcHexPos(frame, 0.75), calcHexPos(frame, 0.5), calcHexPos(frame, 0.25)]


    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const hexLine = d3.line();              // hexagon frame
        const hex_path = d3.line().x((v) => v.ability_value1).y((v) => v.ability_value2);   // hexagon value

        // 최외각 hexagon
        svg
            .selectAll("hexagon")
            .data([frame])
            .join((enter) => enter.append("path"))
            .attr("d", (v) => hexLine(v))
            .attr("fill", "none")
            .attr("stroke", "red");

        // 내부 hexagon
        svg
            .selectAll("hexagon")
            .data(frames)
            .join((enter) => enter.append("path"))
            .attr("d", (v) => hexLine(v))
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-dasharray", "1px 1px");

        // 선수 ability
        // svg
        //     .selectAll("hexagon.ability")
        //     .data([data])
        //     .join((enter) => enter.append("path"))
        //     .attr("d", (v) => hex_path(v))
        //     .attr("fill", "none")
        //     .attr("stroke", "blue");
        

        // // 각 능력의 꼭짓점에 능력이름을 적어줄 것임. 그때 사용할 보정값
        // const xDiff = [-55, 10, 10, 30, -90, -55];
        // const yDiff = [5, 5, 5, 5, 5, 5];

        // // 능력 이름
        // svg
        //     .selectAll("ability.name")
        //     .data(data)
        //     .enter()
        //     .append("text")
        //     .text((d) => d.ability_name)
        //     .attr("x", (d, i) => frame[i][0] + xDiff[i])
        //     .attr("y", (d, i) => frame[i][1] + yDiff[i]);
        //     // .attr("font-family", "sans-serif")
        //     // .attr("font-size", "20px")
        //     // .attr("fill", "black");
        


        
    }, []);



    return (
        <div className="nation-ability-top-player-hex">
            <svg ref={svgRef} width={width} height={height}></svg>
        </div>
    )
}

export default TopPlayerHex;