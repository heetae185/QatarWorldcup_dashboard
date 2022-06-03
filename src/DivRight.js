import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import dataset_csv from "./data/dataset.csv"


// dafault value
const PLAYER_NUMBER = 0;
const MAX_PLAYER = 3;
const MAX_ABILITY = 15;



/*
    ■■□□□□
    □□□□□□
    □□□□□□
    나라이름과 국기를 가져오는 함수
*/
function GetNationFlag(props) {
    const [url, setUrl] = useState(null);
    const [nation, setNation] = useState(null);

    const GetData = async () => {
        let file = await d3.csv(dataset_csv);
        setUrl(file[props.player_number].nation_flag_url);
        setNation(file[props.player_number].nationality_name);
    }

    useEffect(() => {
        GetData();
    }, []);

    return (
        <div className="nationality">
            <p>{nation}</p>
            <img src={url} className="nation_flag"></img>
        </div>
    )
}


/*
    □□■■■■
    □□□□□□
    □□□□□□
    수평 막대 그래프를 만드는 함수
    해당 국가의 평균값을 보여준다.
*/
let once1 = true;
function HorizontalBar(props) {
    const [data, setData] = useState([]);
    const svgRef = useRef(null);

    const moveXaxis = 200;

    const GetData = async () => {
        let dataset = await d3.csv(dataset_csv);
        let newPlayer = []
        for(var i = 0; i < MAX_ABILITY; i++) {
            var newAbility = {};
            newAbility.ability_name = Object.keys(dataset[props.player_number])[i + 38];
            newAbility.ability_value = dataset[props.player_number][Object.keys(dataset[props.player_number])[i + 38]];
            newPlayer[i] = newAbility;
        }

        setData([...newPlayer]);
        once1 = false
    };

    if (once1) {
        GetData();
    }
    
    useEffect(() => {
        const svg = d3.select(svgRef.current);

        const yScale =d3
        .scaleBand()                               // 단순 용도인듯.
        .domain(data.map((v, i) => v.ability_name)) // map은 순서를 알려주는 것 같음.
        .range([0, 350])                    
        .padding(0.45);                             // 막대그래프 굵기 조걸

        const yAxis = d3.axisLeft(yScale).ticks(data.length);
        svg.select(".y-axis").style("transform", "translateX(" + moveXaxis + "px)")
        .style("font", "20px times").call(yAxis);            // 폰트 크기 조절

        svg.selectAll(".bar")
        .data(data)
        .join("rect")  
        .attr("class", "bar")                   // 속석은 바차트
        .attr("x", moveXaxis)                   // barchart의 기준 x값
        .attr("y", d => yScale(d.ability_name)) // barchart의 기준 y값
        .attr("width", d => d.ability_value)    // 바의 너비 조절
        .attr("height", yScale.bandwidth())     // 바의 높이 조절
        .attr("fill", "#70193D");                // 바차트 내부 채우기
        
        svg.selectAll(".bar.text")
        .data(data)                                         // data연결
        .enter().append("text")
            .attr("class", "text")
            .attr("text-anchor", "middle")                  // 중앙 정렬
            .attr("x", (d) => moveXaxis + 140)              // x위치
            .attr("y", (d) => yScale(d.ability_name) +12)   // y위치
            .attr("font-family", "sans-serif")              // 글꼴
            .attr("font-size", "14px")                      // 폰트 크기
            // .attr("fill", "black")                          // 폰트 색상?
            .text((d) => d.ability_value);                  // 실제 text값
    }, [data]);

    return (
        <div className="country_ability">
            <p className="ability_category" >{props.ability_category}</p>
            <svg ref ={svgRef} width={400} height = {400}>
                <g className="y-axis"></g>
            </svg>
        </div>
    )
}

/*
    □□□□□□
    ■□■□■□
    □□□□□□
    선수의 얼굴 사진을 가져온다.
*/
function GetPlayerFace(props) {
    const [url, setUrl] = useState();
    
    const GetData = async () => {
        let dataset = await d3.csv(dataset_csv);
        setUrl(dataset[props.player_number].player_face_url)
    };
    GetData()
    return (
        <img src={url}></img>
    )
}

/*
    □□□□□□
    □■□■□■
    □□□□□□
    선수의 정보를 6각 성향 그래프로 보여준다.
*/
let once3 = true;
function TopPlayerHexagon(props) {
    const svgRef = useRef(null);
    const [data, setData] = useState([{ability_name:"", ability_value1:"", ability_value2:""}]);
                                // data 빈 값이라도 넣어야 애러 안뜸.
    const MAX_ABILITY_COUNT = 6;

    // const _s32 = Math.sqrt(3) / 2;   정삼각형으로 이루어진 육각형 만들때 필요
    const d = 100;                              // 육각형 한변의 길이(상하단만 유효, 중앙 한변의 길이는 살짝 길어짐.)
    const moveXaxis = 80;                       // 그래프를 X축으로 이동시킬 값
    const moveYaxis = 30;                       // 그래프를 Y축으로 이동시킬 값

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
    const calcHexPos = function(hex, portion) {
        let newHex = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]];
        for(var i = 0; i < hex.length; i++) {
            newHex[i][0] = (hex[i][0] - moveXaxis) * portion + (1 - portion) * d + moveXaxis;
            newHex[i][1] = (hex[i][1] - moveYaxis) * portion + (1 - portion) * d + moveYaxis;
        }
        return newHex;
    };

    const GetData = async () => {
        let dataset = await d3.csv(dataset_csv);
        let newPlayer = []
        for(var i = 0; i < MAX_ABILITY_COUNT + 1; i++) {
            var newAbility = {};
            newAbility.ability_name = Object.keys(dataset[props.player_number])[i + 37];
            newAbility.ability_value1 = dataset[props.player_number][newAbility.ability_name];
            newAbility.ability_value2 = dataset[props.player_number][newAbility.ability_name];
            newPlayer[i] = newAbility;
        }
        //                          고정값    hexagon의 비율                                     svg 이동 정보
        newPlayer[0].ability_value1 = d/2 + d/2 *calcPortion(newPlayer[0].ability_value1)        + moveXaxis
        newPlayer[0].ability_value2 =       d   *calcPortion(newPlayer[0].ability_value2)        + moveYaxis

        newPlayer[1].ability_value1 = d   + d/2 *calcPortion(newPlayer[1].ability_value1, true)  + moveXaxis
        newPlayer[1].ability_value2 =       d   *calcPortion(newPlayer[1].ability_value2)        + moveYaxis

        newPlayer[2].ability_value1 = d   + d   *calcPortion(newPlayer[2].ability_value1, true)  + moveXaxis
        newPlayer[2].ability_value2 = d                                                          + moveYaxis

        newPlayer[3].ability_value1 = d   + d/2 *calcPortion(newPlayer[3].ability_value1, true)  + moveXaxis
        newPlayer[3].ability_value2 = d   + d   *calcPortion(newPlayer[3].ability_value2, true)  + moveYaxis

        newPlayer[4].ability_value1 = d/2 + d/2 *calcPortion(newPlayer[4].ability_value1)        + moveXaxis
        newPlayer[4].ability_value2 = d   + d   *calcPortion(newPlayer[4].ability_value2, true)  + moveYaxis

        newPlayer[5].ability_value1 =       d   *calcPortion(newPlayer[5].ability_value1)        + moveXaxis
        newPlayer[5].ability_value2 = d                                                          + moveYaxis

        newPlayer[6].ability_name = newPlayer[0].ability_name           // 7번쨰 값은 원점을 연결하기 위해 첫번쨰 요소랑 같게
        newPlayer[6].ability_value1 = newPlayer[0].ability_value1
        newPlayer[6].ability_value2 = newPlayer[0].ability_value2
        setData([...newPlayer]);
        once3 = false;
    };
    if (once3) {GetData();}

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
        svg
            .selectAll("hexagon.ability")
            .data([data])
            .join((enter) => enter.append("path"))
            .attr("d", (v) => hex_path(v))
            .attr("fill", "none")
            .attr("stroke", "blue");

        // 각 능력의 꼭짓점에 능력이름을 적어줄 것임. 그때 사용할 보정값
        const xDiff = [-75, 10, 10, 10, -110, -75];
        const yDiff = [5, 5, 5, 5, 5, 5];

        // 능력 이름
        svg
            .selectAll("ability.name")
            .data(data)
            .enter()
            .append("text")
            .text((d, i) => d.ability_name)
            .attr("x", (d, i) => frame[i][0] + xDiff[i])
            .attr("y", (d, i) => frame[i][1] + yDiff[i])
            .attr("font-family", "sans-serif")
            .attr("font-size", "20px")
            .attr("fill", "black");

    }, [frame]);

    return (
        <>
            <svg ref={svgRef} width={width} height={height}></svg>
        </>
    )
}

/*
    □□□□□□
    □□□□□□
    ■■■■■■
    TOP 선수들의 전반적인 능력치들.
*/
let once2 = true;
function TopPlayerAbility(props) {
    const [data, setData] = useState([]);
    const svgRef = useRef(null);
    
    const width = 600;
    const height = 200;
    const moveXaxis = 100;

    const firstColumn = 6; // start from 1
    const countOfDataColumn = 2;

    const GetData = async () => {
        let dataset = await d3.csv(dataset_csv);
        let newPlayer = []
        for(var i = 0; i < countOfDataColumn; i++) {
            var newAbility = {};
            newAbility.ability_name = Object.keys(dataset[props.player_number])[i + firstColumn - 1];
            newAbility.ability_value = dataset[props.player_number][newAbility.ability_name];
            newPlayer[i] = newAbility;
        }
        var newAbility = {};    // 수치 조정이 필요한 값이라 따로 불러옴.
        newAbility.ability_name = Object.keys(dataset[props.player_number])[2 + firstColumn - 1];
        newAbility.ability_value = dataset[props.player_number][newAbility.ability_name]/1000000;
        newPlayer[2] = newAbility;
        var newAbility = {};    // 수치 조정이 필요한 값이라 따로 불러옴22.
        newAbility.ability_name = Object.keys(dataset[props.player_number])[3 + firstColumn - 1];
        newAbility.ability_value = dataset[props.player_number][newAbility.ability_name]/10000;
        newPlayer[3] = newAbility;
        setData([...newPlayer]);

        once2 = false
    };

    if (once2) {GetData();}
    
    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const yScale =d3

        .scaleBand()        // domain -> range
        .domain(data.map((v,i ) => v.ability_name))
        .range([0, height-1])                    
        .padding(0.45);                     // 막대그래프 굵기 조걸

        const xScale = d3
        .scaleLinear()                         // Linear은 선형 변환
        .domain([0, 200])
        .range([moveXaxis, width]);                        // range의 첫 부분은 그래프를 그릴 부분. 따라서 margin이라 생각
        
        const yAxis = d3.axisLeft(yScale).ticks(data.length);
        svg.select(".y-axis").style("transform", "translateX(" + moveXaxis + "px)")
        .style("font", "20px times").call(yAxis);            // 폰트 크기 조절

        svg.selectAll(".bar")
        .data(data)
        .join("rect")  
        .attr("class", "bar")                   // 속석은 바차트
        .attr("x", moveXaxis)                   // barchart의 기준 x값
        .attr("y", d => yScale(d.ability_name)) // barchart의 기준 y값
        .attr("width", d => d.ability_value*3)    // 바의 너비 조절
        .attr("height", yScale.bandwidth())     // 바의 높이 조절
        .attr("fill", "#70193D");                // 바차트 내부 채우기
        
        // 수치 적어주자.
        svg.selectAll("text.bar")
        .data(data)
        .enter().append("text")
            .attr("class", "text")
            .attr("text-anchor", "middle")
            .attr("x", (d) => moveXaxis + d.ability_value*3 + 20)
            .attr("y", (d) => yScale(d.ability_name) +14)
            .attr("font-family", "sans-serif")
            .attr("font-size", "14px")
            .attr("fill", "black")
            .text((d) => d.ability_value);
    }, [data]);

    return (
        <div className="country_ability">
            <svg ref ={svgRef} width={600} height = {200}>
                <g className="y-axis"></g>
            </svg>
        </div>
    )
}


function DivRight() {
    return (
        <div className="div_right">
            <div className="div_right_top">
                    <GetNationFlag player_number="10"/>
                <div className="div_right_top_right">
                    <HorizontalBar player_number={PLAYER_NUMBER + 0} ability_category="공격"/>
                    <HorizontalBar player_number={PLAYER_NUMBER + 1} ability_category="미드필더"/>
                    <HorizontalBar player_number={PLAYER_NUMBER + 2} ability_category="수비"/>
                </div>
            </div>
            <div className="div_right_bottom">
                <div className="div_right_bottom_split">
                    <div className="top_player">
                        <div className="top_player_face">
                            <GetPlayerFace player_number={PLAYER_NUMBER}/>
                        </div>
                        <div className="top_player_hexagon">
                            <TopPlayerHexagon player_number={PLAYER_NUMBER}/>
                        </div>
                    </div>
                    <div className="top_player_ability">
                        <TopPlayerAbility player_number={PLAYER_NUMBER}/>
                    </div>
                </div>
                <div className="div_right_bottom_split">
                    <div className="top_player">
                        <div className="top_player_face">
                            <GetPlayerFace player_number={PLAYER_NUMBER + 1}/>
                        </div>
                        <div className="top_player_hexagon">
                            <TopPlayerHexagon player_number={PLAYER_NUMBER + 1}/>
                        </div>
                    </div>
                    <div className="top_player_ability">
                        <TopPlayerAbility player_number={PLAYER_NUMBER + 1}/>
                    </div>
                </div>
                <div className="div_right_bottom_split">
                    <div className="top_player">
                        <div className="top_player_face">
                            <GetPlayerFace player_number={PLAYER_NUMBER + 2}/>
                        </div>
                        <div className="top_player_hexagon">
                            <TopPlayerHexagon player_number={PLAYER_NUMBER + 2}/>
                        </div>
                    </div>
                    <div className="top_player_ability">
                        <TopPlayerAbility player_number={PLAYER_NUMBER + 2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DivRight;