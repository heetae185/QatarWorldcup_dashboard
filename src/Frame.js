import React from 'react';
import './style.css'
import flag from './imgs/Q.jpeg'
import chart1 from './imgs/chart.png'
import player from './imgs/player.jpeg'
import pChart from './imgs/p_chart.png'
import gradeChart from './imgs/grade.png'
import cpr_chart from './imgs/chart.png';

function Frame(props) {

    function TwoNations(){
        var LEFT=document.querySelector('.LEFT');
        var GRADE=document.querySelector('.grade');
        var CPR=document.querySelector('.Compare');
        var NAT2=document.querySelector('.right_up2');

        LEFT.append(GRADE);
        NAT2.style.display="block";
        CPR.style.display="block";
    }    
    // function TB(){
    //     var tb=document.querySelector('#TB');
    //     var tbText=toString(tb.innerText);
    //     var rank=document.querySelector('#Rank');
    //     var flaag=document.querySelector('#RF');
    //     if (tb.isChecked='true'){
    //         flaag.src='{chart1}';
    //         rank.innerText='1'
    //     } 
    // } 
    return ( 
    <>
        <div className='LEFT'>

          <div className="left_up">
                  <div className='LeftTop1'>
                      <div className="flag">
                          <img width='100%' height='100%' src={flag} alt="flag img"/>
                      </div>     
                      <div className="Rank">
                          <b>
                              <h2 id="Rank">FIFA RANK</h2>
                              <h1>{props.Rank}</h1>
                          </b>
                      </div>                
                  </div>

                  <div className='LeftTop2'>
                      <div className="Nat_name"> 
                        <b><h1 id="Nat_name">{props.Nat_name}</h1></b>
                      </div>
                      <div className="Pred_rank">
                          <b>
                            <h2 id="Pred_rank">Predicted RANK</h2>
                            <h1>{props.Pred_rank}</h1>
                          </b>
                      </div>
                  </div>    

          </div> {/*left_up*/}   

          <div className="left_down">

              <div className='LeftBottom1'>
                  <div className="Btns">
                      <div className='btn_group'>
                          <input type="radio" name='gender' id="btn_group" checked></input>
                          <label for="btn_group">?????????</label>
                      </div>
                      <div className='btn_name'>
                          <input type="radio"  name='gender' id="btn_name"></input>
                          <label for="btn_name">????????????(????????????)</label>
                      </div>    
                  </div>
              </div>

              <div className='LeftBottom2'>
                  <div className="box1">
                      <b><h3 id="group1">??????A</h3></b>
                      <div className='group_infos'>
                          <div className='group_infoA1'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>                              
                          <div className='group_infoA2'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoA3'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoA4'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                      </div>
                  </div>

                  <div className="box2">
                      <b><h3 id="group2">??????B</h3></b>
                      <div className='group_infos'>
                          <div className='group_infoB1' >
                                  <img width="30%" src={flag} alt="?????? ??????"/>
                                  <p>?????????</p>
                          </div>
                          <div className='group_infoB2'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoB3'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>                          
                          <div className='group_infoB4'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className='LeftBottom3'>
                  <div class="box3">
                      <b><h3 id="group3">??????C</h3></b>
                      <div className='group_infos'>
                          <div className='group_infoC1'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoC2'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoC3'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>                          
                          <div className='group_infoC4'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                      </div>
                  </div>

                  <div class="box4">
                      <b><h3 id="group4">??????D</h3></b>
                      <div className='group_infos'>
                          <div className='group_infoD1'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoD2'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoD3'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>                          
                          <div className='group_infoD4'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                      </div>
                  </div>
              </div>
                

              <div className='LeftBottom4'>
                  <div class="box5">
                      <b><h3 id="group5">??????E</h3></b>
                      <div className='group_infos'>
                          <div className='group_infoE1'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoE2'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoE3'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>                          
                          <div className='group_infoE4'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                      </div>
                  </div>

                  <div class="box6">
                      <b><h3 id="group6">??????F</h3></b>
                      <div className='group_infos'>
                          <div className='group_infoF1'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoF2'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoF3'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>                          
                          <div className='group_infoF4'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className='LeftBottom5'>
                  <div className="box7">
                      <b><h3 id="group7">??????G</h3></b>
                      <div className='group_infos'>
                          <div className='group_infoG1'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoG2'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoG3'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>                          
                          <div className='group_infoG4'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                      </div>
                  </div>

                  <div className="box8">
                      <b><h3 id="group8">??????H</h3></b>
                      <div className='group_infos'>
                          <div className='group_infoH1'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoH2'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                          <div className='group_infoH3'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>                          
                          <div className='group_infoH4'>
                              <img width="30%" src={flag} alt="?????? ??????"/>
                              <p>?????????</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>  {/*left_down*/}                
        </div>  {/*LEFT */}

        <div className='RIGHT'>
          <div className="right_up">

              <div className='rightUp1'>
                <div className="Nat_Info">
                    <h2>{props.Nat_name}</h2>
                    <div className='RF'>
                        <img width='30px' id="RF" src={flag} alt="flag img"/>
                    </div>
                </div>

                <div className="Chart1">
                    <b><h2>??????</h2></b>
                    <div className='divForChart1'>
                        <img id="Chart1" src={chart1} alt="????????? ??????"/>
                    </div>
                </div>
                
                <div className="Chart2">
                    <b><h2>????????????</h2></b>
                    <div className='divForChart2'>
                        <img id="Chart2" src={chart1} alt="????????? ??????"/>
                    </div>
                </div>

                <div className="Chart3">
                    <b><h2>??????</h2></b>
                    <div className='divForChart3'>
                        <img id="Chart3" src={chart1} alt="????????? ??????"/>
                    </div>
                </div>
            </div>
    
                <div className='rightUp2'>
                    
                    <div className="Player1">
                        <div className="Player1_info">
                            <div className='Player1_img'>
                                <img id="Player1" src={player} alt="?????? ??????"/>
                            </div>
                            <div className='Player1_stat'>
                                <h3>{props.PlayerName}</h3>
                                <h3>{props.Stat1}</h3>
                                <h3>{props.Stat2}</h3>
                                <h3>{props.Stat3}</h3>
                            </div>
                        </div>
                       
                        <div className='divForStatChart1'>
                            <img id="P_chart1" src={pChart} alt="?????? ??????"/>
                        </div>
                    </div>   

                    <div className="Player2">
                        <div className="Player2_info">
                            <div className='Player2_img'>
                                <img id="Player2" src={player} alt="?????? ??????"/>
                            </div>
                            <div className='Player2_stat'>
                                <h3>{props.PlayerName}</h3>
                                <h3>{props.Stat1}</h3>
                                <h3>{props.Stat2}</h3>
                                <h3>{props.Stat3}</h3>
                            </div>
                        </div>
                       
                        <div className='divForStatChart2'>
                            <img id="P_chart2" src={pChart} alt="?????? ??????"/>
                        </div>
                    </div>   

                    <div className="Player3">
                        <div className="Player3_info">
                            <div className='Player3_img'>
                                <img id="Player3" src={player} alt="?????? ??????"/>
                            </div>
                            <div className='Player3_stat'>
                                <h3>{props.PlayerName}</h3>
                                <h3>{props.Stat1}</h3>
                                <h3>{props.Stat2}</h3>
                                <h3>{props.Stat3}</h3>
                            </div>
                        </div>
                       
                        <div className='divForStatChart3'>
                            <img id="P_chart3" src={pChart} alt="?????? ??????"/>
                        </div>
                    </div>   
                </div>   
        </div>{/*rightTop*/}
    
        <div className="right_up2">

            <div className='rightUp2_1'>
            <div className="Nat_Info_2">
                <h2>{props.Nat_name_2}</h2>
                <div className='RF_2'>
                    <img id="RF_2" src={flag} alt="flag img_2"/>
                </div>
            </div>

            <div className="Chart2_1">
                <b><h2>??????</h2></b>
                <div className='divForChart2_1'>
                    <img id="Chart2_1" src={chart1} alt="????????? ??????"/>
                </div>
            </div>
            
            <div className="Chart2_2">
                <b><h2>????????????</h2></b>
                <div className='divForChart2_2'>
                    <img id="Chart2_2" src={chart1} alt="????????? ??????"/>
                </div>
            </div>

            <div className="Chart2_3">
                <b><h2>??????</h2></b>
                <div className='divForChart2_3'>
                    <img id="Chart2_3" src={chart1} alt="????????? ??????"/>
                </div>
            </div>
        </div>

            <div className='rightUp2_2'>
                
                <div className="Player2_1">
                    <div className="Player2_1_info">
                        <div className='Player2_1_img'>
                            <img id="Player2_1" src={player} alt="?????? ??????"/>
                        </div>
                        <div className='Player2_1_stat'>
                            <h3>{props.PlayerName_2}</h3>
                            <h3>{props.Stat2_1}</h3>
                            <h3>{props.Stat2_2}</h3>
                            <h3>{props.Stat2_3}</h3>
                        </div>
                    </div>
                    
                    <div className='divForStatChart2_1'>
                        <img id="P_chart2_1" src={pChart} alt="?????? ??????"/>
                    </div>
                </div>   

                <div className="Player2_2">
                    <div className="Player2_2_info">
                        <div className='Player2_2_img'>
                            <img id="Player2_2" src={player} alt="?????? ??????"/>
                        </div>
                        <div className='Player2_2_stat'>
                            <h3>{props.PlayerName_2}</h3>
                            <h3>{props.Stat2_1}</h3>
                            <h3>{props.Stat2_2}</h3>
                            <h3>{props.Stat2_3}</h3>
                        </div>
                    </div>
                    
                    <div className='divForStatChart2_2'>
                        <img id="P_chart2_2" src={pChart} alt="?????? ??????"/>
                    </div>
                </div>   

                <div className="Player2_3">
                    <div className="Player2_3_info">
                        <div className='Player2_3_img'>
                            <img id="Player2_3" src={player} alt="?????? ??????"/>
                        </div>
                        <div className='Player2_3_stat'>
                            <h3>{props.PlayerName_2}</h3>
                            <h3>{props.Stat2_1}</h3>
                            <h3>{props.Stat2_2}</h3>
                            <h3>{props.Stat2_3}</h3>
                        </div>
                    </div>
                    
                    <div className='divForStatChart2_3'>
                        <img id="P_chart2_3" src={pChart} alt="?????? ??????"/>
                    </div>
                </div>   
            </div>   
        </div>  {/*????????? ?????? */}
  
        <div className='grade'>
            <b><h2>{props.Nat_name} ?????? ????????? ??????</h2></b>
            <div className='gradeChart'>
                <img src={gradeChart} width="100%" height="100%" alt="?????? ?????? ?????????"/>
            </div>
        </div> {/*?????? ?????? ?????? */}

        <button onClick={TwoNations}>2Nations Ver</button>
{/* 
       <label className='switch'>
            <input id="TB" onClick={TB} type="checkbox"/>
            <span className='slider'>on</span>
        </label>
  <p>off</p><p style={{display:"none"}}>on</p> */}

        <div className='Compare'>

            <div className='compare1'>
                <div className='Nat1'>
                    <b><h2>{props.Cpr_nat1}</h2></b>
                    <img id='Nat1' src={flag} alt='1st Nat'/>
                </div>
                <div className='Nat2'>
                    <b><h2>{props.Cpr_nat2}</h2></b>
                    <img id='Nat2' src={flag} alt='2nd Nat'/>
                </div>
            </div>

            <div className='compare2'>
                    <div className='cpr_chart1'>
                    <b><h2>????????????????????????1</h2></b>
                        <img src={cpr_chart} alt='??????????????????1'/>
                    </div>
                    <div className='cpr_chart2'>
                    <b><h2>????????????????????????2</h2></b>
                    <img src={cpr_chart} alt='??????????????????2'/>
                    </div>
                    <div className='cpr_chart3'>
                    <b><h2>????????????????????????3</h2></b>
                    <img src={cpr_chart} alt='??????????????????3'/>
                    </div>
                </div>
            </div>
        </div>{/*RIGHT*/}            

    </>
  );
}
export default Frame;