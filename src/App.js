import DivRight from './DivRight';
import LeftBottom from './LeftBottom';
import LeftTop from './LeftTop';
import flag from './imgs/Q.jpeg'
import chart1 from './imgs/chart.png'
import player from './imgs/player.jpeg'
import pChart from './imgs/p_chart.png'
import gradeChart from './imgs/grade.png'
import cpr_chart from './imgs/chart.png';
import logo from "./imgs/logo.png"

import './style.css'
import React, {startTransition, useState, useRef, useEffect } from "react";
import * as d3 from "d3";

import input_data from "./data/value.csv";
import dataset_csv from "./data/dataset.csv"
import mapping_csv from "./data/nations-mapping.csv"
import overall_mean_csv from "./data/overall-mean.csv"
import fifa_rank_csv from "./data/FIFA_Ranking.csv"

import TopPlayerFace from "./nation-ability/TopPlayerFace";
import TopPlayerRadar from "./nation-ability/TopPlayerRadar";
import NationInfo from "./nation-ability/NationInfo";
import Wrapper from './Wrapper'
import TopFlag from "./nation-ability/TopFlag";
import TopPlayerInfo from "./nation-ability/TopPlayerInfo"
import CompareChart from "./nation-ability/CompareChart"


import Graph from "./nation-ability/LineGraph2";


let nationMapping = null;
let overallMeanData = null;
let fifaRankData = null;
let isLoaded = false;

function App(props) {
    // csv파일 읽어서 저장할 공간
    const [dataset, setDataset] = useState([]);
    // 선택한 나라를 담을 변수
    const [nations, setNations] = useState([]);

    const GetDataOnce = async() => {
        nationMapping = await d3.csv(mapping_csv);
        overallMeanData = await d3.csv(overall_mean_csv);
        fifaRankData = await d3.csv(fifa_rank_csv);
        isLoaded = true
    }
    if(!isLoaded) GetDataOnce();
    const GetDataset = async () => {
        let data = await d3.csv(dataset_csv);

        if (nations.length == 1) {
            setDataset(data.filter((v) => v.nationality_name == nations[0]));
        } else if (nations.length == 2) {
            setDataset([
                ...data.filter((v) => v.nationality_name == nations[0]),
                ...data.filter((v) => v.nationality_name == nations[1])
            ]);
        }
        else {
            setDataset([]);
        }
        
    }


    useEffect(() => {
        GetDataset()
    }, [nations]);

    // function TwoNations(){
    //     var LEFT=document.querySelector('.LEFT');
    //     var GRADE=document.querySelector('.gradeChart');
    //     var CPR=document.querySelector('.Compare');
    //     var NAT2=document.querySelector('.right_up2');

    //     LEFT.append(GRADE);
    //     NAT2.style.display="block";
    //     CPR.style.display="block";
    // }

    // if(nations.length>1){  
    //     //국가 두 개 선택시 국가 국가비교 차트 왼쪽으로
    //     var LEFT=document.querySelector('.LEFT');
    //     var GRADE=document.querySelector('.grade');
    //     GRADE.style.cssText='flex-basis:40%; background-color:orange'
    //     LEFT.append(GRADE);
    // }

    //FILTER 시훈님코드
    const onClickNations = ((e) => {
    // 1. 중복확인
    if (nations.indexOf(e) >= 0) {
        setNations([...nations.filter((v) => v != e)])
    }
    // 2. 길이확인
    else if (nations.length < 2 ){
        setNations([...nations, e])
    }
    });

    function NationAbilityTopChart(props) {
        // console.log(dataset.length);
        if ((dataset.length <= 0 || nations.length < props.nation_index)) {
            
            return (
                <></>
            )
        }
        const svgRef = useRef(null);
        let abilitys = [];

        const moveXaxis = 80;
        const data = dataset.filter((v) => v.nationality_name == nations[0]);
        if (data.length == 0) {return (<></>)}
        
        for(let i = 0; i < 10; i++) {
            let newAbility = {};
            newAbility.ability_name = Object.keys(data[0])[i + 37];
            newAbility.ability_value = data[0][newAbility.ability_name];
            abilitys[abilitys.length] = newAbility;
        }
            
        // console.log(abilitys.map((v, i) => i))
        useEffect(() => {
            const svg = d3.select(svgRef.current);
    
            const xScale = d3
            .scaleLinear()
            .domain([0, 100])
            .range([0, 400])
    
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

            .attr("x", (v) => moveXaxis)                       // barchart의 기준 x값
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
            <svg ref ={svgRef} height="380px" width="500px" >
                <g className="y-axis"></g>
            </svg>
    )
    }

  return ( 
    <>
    <Wrapper>
        <div className='LEFT'>

        <div className="left_up">
            {/* <p>{nations}</p> */}
            <img width="100%"  src={logo} alt="logo_img" id='logoImg'></img>
        </div> {/*left_up*/}   

        {/* leftdown */}
        <div className="left_down">
            <div className='LeftBottom2'>
                <div className="box1">
                    <b><h3 id="group1">그룹A</h3></b>
                    <div className='group_infos'>
                        <div className='group_infoA1'>
                        <button onClick={() => onClickNations('Qatar')} id="A1" value="카타르" name="Group">
                            <img width="30%" src={flag} alt="국가 사진"/>
                            <p>카타르</p>
                            </button>
                        </div>

                        <div className='group_infoA2'>                              
                            <button onClick={() => onClickNations('Ecuador')} id="A2" value="에콰도르" name="Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/ec.png"  alt="국가 사진"/>
                                <p>에콰도르</p>
                            </button>
                        </div>
                        <div className='group_infoA3'>  
                            <button onClick={() => onClickNations('Senegal')} type = "button" id = "A3" value = "세네갈" name = "Group">
                            <img width="30%" src="https://cdn.sofifa.net/flags/sn.png" alt="국가 사진"/>
                            <p>세네갈</p>
                            </button>
                        </div>
                        <div className='group_infoA4'>   
                            <button onClick={() => onClickNations('Netherlands')} type = "button" id = "A4" value = "네덜란드" name = "Group">
                            <img width="30%" src="https://cdn.sofifa.net/flags/nl.png" alt="국가 사진"/>
                            <p>네덜란드</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="box2">
                    <b><h3 id="group2">그룹B</h3></b>
                    <div className='group_infos'>
                        <div className='group_infoB1'>
                        <button onClick={() => onClickNations('England')} id = "B1" value = "영국" name = "Group">
                            <img width="30%" src="https://cdn.sofifa.net/flags/gb-eng.png" alt="국가 사진"/>
                        <p>영국</p>
                        </button>
                        </div>
                        <div className='group_infoB2'>   
                            <button onClick={() => onClickNations('Iran')} id = "B2" value = "이란" name = "Group">
                            <img width="30%" src="https://cdn.sofifa.net/flags/ir.png" alt="국가 사진"/>
                            <p>이란</p>
                            </button>                         
                        </div>

                        <div className='group_infoB3'>  
                            <button onClick={() => onClickNations('United States')} type = "button" id = "B3" value = "미국" name = "Group">
                            <img width="30%" src="https://cdn.sofifa.net/flags/us.png" alt="국가 사진"/>
                            <p>미국</p>
                            </button>
                        </div>
                        <div className='group_infoB4'> 
                        <button onClick={() => onClickNations('Netherlands')} type = "button" id = "B4" value = "네덜란드" name = "Group">
                        <img width="30%" src="https://cdn.sofifa.net/flags/nl.png" alt="국가 사진"/>
                        <p>네덜란드</p>
                        </button>
                        </div>  
                    </div>
                </div>
            </div>

            <div className='LeftBottom3'>
                <div class="box3">
                    <b><h3 id="group3">그룹C</h3></b>
                    <div className='group_infos'>
                        <div className='group_infoC1'>
                            <button onClick={() => onClickNations('Argentina')} type = "button" id = "C1" value = "아르헨티나" name = "Group">
                        <img width="30%" src="https://cdn.sofifa.net/flags/ar.png" alt="국가 사진"/>
                            <p>아르헨티나</p>
                            </button>
                        </div>
                        <div className='group_infoC2'>                              
                            <button onClick={() => onClickNations('Saudi Arabia')} type = "button" id = "C2" value = "사우디아라비아" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/sa.png" alt="국가 사진"/>
                                <p>사우디아라비아</p>
                            </button>
                        </div>
                        <div className='group_infoC3'> 
                            <button onClick={() => onClickNations('Mexico')} type = "button" id = "C3" value = "멕시코" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/mx.png" alt="국가 사진"/>
                                <p>멕시코</p>
                            </button>
                        </div>
                        <div className='group_infoC4'>  
                            <button onClick={() => onClickNations('Poland')} type = "button" id = "C4" value = "폴란드" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/pl.png" alt="국가 사진"/>
                                <p>폴란드</p>
                            </button>  
                        </div>
                    </div>
                </div>

                <div class="box4">
                    <b><h3 id="group4">그룹D</h3></b>
                    <div className='group_infos'>
                        <div className='group_infoD1'>
                            <button onClick={() => onClickNations('France')} type = "button" id = "D1" value = "프랑스" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/fr.png" alt="국가 사진"/>
                                <p>프랑스</p>
                            </button> 
                        </div>
                        <div className='group_infoD2'>                              
                            <button onClick={() => onClickNations('Iran')} type = "button" id = "D2" value = "이란" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/ec.png" alt="국가 사진"/>
                                <p>이란</p>
                            </button>
                        </div>
                        <div className='group_infoD3'> 
                            <button onClick={() => onClickNations('Denmark')} type = "button" id = "D3" value = "덴마크" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/dk.png" alt="국가 사진"/>
                                <p>덴마크</p>
                            </button>
                        </div>
                        <div className='group_infoD4'> 
                            <button onClick={() => onClickNations('Tunisia')}type = "button" id = "D4" value = "튀니지" name = "Group" >
                                <img width="30%" src="https://cdn.sofifa.net/flags/tn.png" alt="국가 사진"/>
                                <p>튀니지</p>
                            </button>
                        </div> 
                    </div>
                </div>
            </div>
                
            <div className='LeftBottom4'>
                <div class="box5">
                    <b><h3 id="group5">그룹E</h3></b>
                    <div className='group_infos'>
                        <div className='group_infoE1'>
                            <button onClick={() => onClickNations('Spain')} type = "button" id = "E1" value = "스페인" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/es.png" alt="국가 사진"/>
                                <p>스페인</p>
                            </button>
                        </div>
                        <div className='group_infoE2'>                              
                            <button onClick={() => onClickNations('Iran')}type = "button" id = "E2" value = "이란" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/ec.png" alt="국가 사진"/>
                                <p>이란</p>
                            </button>
                        </div>
                        <div className='group_infoE3'> 
                            <button onClick={() => onClickNations('Germany')} type = "button" id = "E3" value = "독일" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/de.png" alt="국가 사진"/>
                                <p>독일</p>
                            </button>
                        </div>
                        <div className='group_infoE4'>  
                            <button onClick={() => onClickNations('Japan')} type = "button" id = "E4" value = "일본" name = "Group" >
                                <img width="30%" src="https://cdn.sofifa.net/flags/jp.png" alt="국가 사진"/>
                                <p>일본</p>
                            </button>
                        </div>  
                    </div>
                </div>

                <div class="box6">
                    <b><h3 id="group6">그룹F</h3></b>
                        <div className='group_infos'>
                            <div className='group_infoF1'>
                                <button onClick={() => onClickNations('Belgium')} type = "button" id = "F1" value = "벨기에" name = "Group">
                                    <img width="30%" src="https://cdn.sofifa.net/flags/be.png" alt="국가 사진"/>
                                    <p>벨기에</p>
                                </button>
                            </div>
                        <div className='group_infoF2'>                              
                            <button onClick={() => onClickNations('Spain')} type = "button" id = "F2" value = "캐나다" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/ca.png" alt="국가 사진"/>
                                <p>캐나다</p>
                            </button>
                        </div>
                        <div className='group_infoF3'>  
                            <button onClick={() => onClickNations('Morocco')} type = "button" id = "F3" value = "모로코" name = "Group" >
                                <img width="30%" src="https://cdn.sofifa.net/flags/ma.png"alt="국가 사진"/>
                                <p>모로코</p>
                            </button>
                        </div>
                        <div className='group_infoF4'>  
                            <button onClick={() => onClickNations('Croatia')} type = "button" id = "F4" value = "크로아티아" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/hr.png" alt="국가 사진"/>
                                <p>크로아티아</p>
                            </button>
                        </div>  
                    </div>
                </div>
            </div>

            <div className='LeftBottom5'>
                <div className="box7">
                    <b><h3 id="group7">그룹G</h3></b>
                    <div className='group_infos'>
                    <div className='group_infoG1'>
                        <button onClick={() => onClickNations('Brazil')} type = "button" id = "G1" value = "브라질" name = "Group">
                        <img width="30%" src="https://cdn.sofifa.net/flags/br.png" alt="국가 사진"/>
                        <p>브라질</p>
                        </button>
                    </div>
                    <div className='group_infoG2'>                              
                        <button onClick={() => onClickNations('Serbia')} type = "button" id = "G2" value = "세르비아" name = "Group">
                            <img width="30%" src="https://cdn.sofifa.net/flags/rs.png" alt="국가 사진"/>
                            <p>세르비아</p>
                        </button>
                    </div>
                    <div className='group_infoG3'> 
                        <button onClick={() => onClickNations('Switzerland')} type = "button" id = "G3" value = "스위스" name = "Group" >
                            <img width="30%" src="https://cdn.sofifa.net/flags/ch.png" alt="국가 사진"/>
                            <p>스위스</p>
                        </button>
                    </div>

                    <div className='group_infoG4'>  
                        <button onClick={() => onClickNations('Cameroon')} type = "button" id = "G4" value = "카메룬" name = "Group">
                            <img width="30%" src="https://cdn.sofifa.net/flags/cm.png" alt="국가 사진"/>
                            <p>카메룬</p>
                        </button>
                    </div>  
                </div>
            </div>

                <div className="box8">
                    <b><h3 id="group8">그룹H</h3></b>
                    <div className='group_infos'>
                    <div className='group_infoH1'>
                        <button onClick={() => onClickNations('Portugal')} type = "button" id = "H1" value = "포르투갈" name = "Group">
                        <img width="30%" src="https://cdn.sofifa.net/flags/pt.png"alt="국가 사진"/>
                        <p>포르투갈</p>
                        </button>
                    </div>
                        <div className='group_infoH2'>                             
                            <button  onClick={() => onClickNations('Gana')} type = "button" id = "H2" value = "가나" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/gh.png" alt="국가 사진"/>
                                <p>가나</p>
                            </button>
                        </div>
                        <div className='group_infoH3'>  
                            <button onClick={() => onClickNations('Uruguay')} type = "button" id = "H3" value = "우르과이" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/uy.png" alt="국가 사진"/>
                                <p>우르과이</p>
                            </button>
                        </div>
                        <div className='group_infoH4'>  
                            <button onClick={() => onClickNations('Korea Republic')} type = "button" id = "H4" value = "한국" name = "Group">
                                <img width="30%" src="https://cdn.sofifa.net/flags/kr.png" alt="국가 사진"/>
                                <p>대한민국</p>
                            </button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>  
        {/*left_down*/}                
        </div>  {/*LEFT */}

        <div className='RIGHT'>
            <div className='div_right'>
            {nations.length > 0 ? <>
                <div className="div_right_top">
                    <div className='Div_NationAbilityFlag'>
                        <TopFlag nationality_name={nations[0]} data={dataset} mapping={nationMapping} ranking={fifaRankData} overall_mean={overallMeanData}/>
                    </div>
                    <div className="div_right_top_right">
                        {/* <NationAbilityTopChart nation_index={0} /> */}
                        <NationAbilityTopChart nation_index={0} />
                    </div>
                </div>
            
            <div className="div_right_bottom">
                <div className="div_right_bottom_split">
                    <div className="top_player">
                        <div className="top_player_face">
                        <TopPlayerInfo data={dataset} player_number={0} nationality_name={nations[0]} mapping={nationMapping}/>
                        </div>
                        <div className="top_player_hexagon">
                        <TopPlayerRadar data={dataset} player_number={0} nationality_name={nations[0]}/>
                        </div>
                    </div>
                    <div className="top_player_ability">
                        {/* <h2>top_player_ability</h2> */}
                    </div>
                </div>
                <div className="div_right_bottom_split">
                    <div className="top_player">
                        <div className="top_player_face">
                        <TopPlayerInfo data={dataset} player_number={1} nationality_name={nations[0]} mapping={nationMapping}/>
                        </div>
                        <div className="top_player_hexagon">
                        <TopPlayerRadar data={dataset} player_number={1} nationality_name={nations[0]}/>
                        </div>
                    </div>
                    <div className="top_player_ability">
                        {/* <h2>top_player_ability</h2> */}
                    </div>
                </div>
                <div className="div_right_bottom_split">
                    <div className="top_player">
                    <div className="top_player_face">
                        <TopPlayerInfo data={dataset} player_number={2} nationality_name={nations[0]} mapping={nationMapping}/>
                        </div>
                        <div className="top_player_hexagon">
                        <TopPlayerRadar data={dataset} player_number={2} nationality_name={nations[0]}/>
                        </div>
                    </div>
                    <div className="top_player_ability">
                        {/* <h2>top_player_ability</h2> */}
                    </div>
                </div>
            </div>
            </>:<></>}
            
            {nations.length > 1?
            <>
            <div className="div_right_top">
                <div className='Div_NationAbilityFlag'>
                    <TopFlag nationality_name={nations[1]} data={dataset} mapping={nationMapping} ranking={fifaRankData} overall_mean={overallMeanData}/>
                </div>
                <div className="div_right_top_right">
                    <NationAbilityTopChart nation_index={1} />
                </div>
            </div>
            <div className="div_right_bottom">
                <div className="div_right_bottom_split">
                    <div className="top_player">
                        <div className="top_player_face">
                            <TopPlayerInfo data={dataset} player_number={0} nationality_name={nations[1]} mapping={nationMapping}/>
                        </div>
                        <div className="top_player_hexagon">
                            <TopPlayerRadar data={dataset} player_number={0} nationality_name={nations[1]}/>
                        </div>
                    </div>
                    <div className="top_player_ability">
                        {/* <h2>top_player_ability</h2> */}
                    </div>
                </div>
                <div className="div_right_bottom_split">
                    <div className="top_player">
                        <div className="top_player_face">
                            <TopPlayerInfo data={dataset} player_number={1} nationality_name={nations[1]} mapping={nationMapping}/>
                        </div>
                        <div className="top_player_hexagon">
                            <TopPlayerRadar data={dataset} player_number={1} nationality_name={nations[1]}/>
                        </div>
                    </div>
                    <div className="top_player_ability">
                        {/* <h2>top_player_ability</h2> */}
                    </div>
                </div>
                <div className="div_right_bottom_split">
                    <div className="top_player">
                        <div className="top_player_face">
                            <TopPlayerInfo data={dataset} player_number={2} nationality_name={nations[1]} mapping={nationMapping}/>
                        </div>
                        <div className="top_player_hexagon">
                            <TopPlayerRadar data={dataset} player_number={2} nationality_name={nations[1]}/>
                        </div>
                    </div>
                    <div className="top_player_ability">
                        {/* <h2>top_player_ability</h2> */}
                    </div>
                </div>               
            </div>
            </>:<></>}
            </div>{/*div_right 첫번째 국가  -> 자동 선택되게 만들었습니다~*/}

        
        <div className='grade'>
            {nations.length > 1?<>
            <div className='gradeChart'>
                <Graph compare={nations} />
                <CompareChart nations={nations} mapping={nationMapping} data={overallMeanData} />
            </div>
            </>:<></>}

        </div> {/*과거 성적 비교 */}

        {/* <button onClick={TwoNations}>2Nations Ver</button> */}      
        </div>{/*RIGHT*/}
    </Wrapper> 
    </>
  );
}

    
export default App;