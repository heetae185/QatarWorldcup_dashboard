import * as d3 from 'd3';
import React from 'react';
import './style.css'
import flag from './imgs/Q.jpeg';
import chart1 from './imgs/chart.png'
import player from './imgs/player.jpeg'
import pChart from './imgs/p_chart.png'

function RightTop2(props){
    return(
        <>
          <div className="right_up2">

              <div className='rightUp2_1'>
                <div className="Nat_Info_2">
                    <h2>{props.Nat_name_2}</h2>
                    <div className='RF_2'>
                        <img id="RF_2" src={flag} alt="flag img_2"/>
                    </div>
                </div>

                <div className="Chart2_1">
                    <b><h2>공격</h2></b>
                    <div className='divForChart2_1'>
                        <img id="Chart2_1" src={chart1} alt="전력바 차트"/>
                    </div>
                </div>
                
                <div className="Chart2_2">
                    <b><h2>미드필더</h2></b>
                    <div className='divForChart2_2'>
                        <img id="Chart2_2" src={chart1} alt="전력바 차트"/>
                    </div>
                </div>

                <div className="Chart2_3">
                    <b><h2>수비</h2></b>
                    <div className='divForChart2_3'>
                        <img id="Chart2_3" src={chart1} alt="전력바 차트"/>
                    </div>
                </div>
            </div>
    
                <div className='rightUp2_2'>
                    
                    <div className="Player2_1">
                        <div className="Player2_1_info">
                            <div className='Player2_1_img'>
                                <img id="Player2_1" src={player} alt="선수 사진"/>
                            </div>
                            <div className='Player2_1_stat'>
                                <h3>{props.PlayerName_2}</h3>
                                <h3>{props.Stat2_1}</h3>
                                <h3>{props.Stat2_2}</h3>
                                <h3>{props.Stat2_3}</h3>
                            </div>
                        </div>
                       
                        <div className='divForStatChart2_1'>
                            <img id="P_chart2_1" src={pChart} alt="선수 전력"/>
                        </div>
                    </div>   

                    <div className="Player2_2">
                        <div className="Player2_2_info">
                            <div className='Player2_2_img'>
                                <img id="Player2_2" src={player} alt="선수 사진"/>
                            </div>
                            <div className='Player2_2_stat'>
                                <h3>{props.PlayerName_2}</h3>
                                <h3>{props.Stat2_1}</h3>
                                <h3>{props.Stat2_2}</h3>
                                <h3>{props.Stat2_3}</h3>
                            </div>
                        </div>
                       
                        <div className='divForStatChart2_2'>
                            <img id="P_chart2_2" src={pChart} alt="선수 전력"/>
                        </div>
                    </div>   

                    <div className="Player2_3">
                        <div className="Player2_3_info">
                            <div className='Player2_3_img'>
                                <img id="Player2_3" src={player} alt="선수 사진"/>
                            </div>
                            <div className='Player2_3_stat'>
                                <h3>{props.PlayerName_2}</h3>
                                <h3>{props.Stat2_1}</h3>
                                <h3>{props.Stat2_2}</h3>
                                <h3>{props.Stat2_3}</h3>
                            </div>
                        </div>
                       
                        <div className='divForStatChart2_3'>
                            <img id="P_chart2_3" src={pChart} alt="선수 전력"/>
                        </div>
                    </div>   
                </div>   

        </div>  
    </>
    );
}

export default RightTop2;
