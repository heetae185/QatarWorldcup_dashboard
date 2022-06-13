import * as d3 from 'd3';
import React from 'react';
import './style.css'
import flag from './imgs/Q.jpeg';

function LeftBottom(props){
    return(
        <>
            <div className="left_down">

                <div className='LeftBottom1'>
                    <div className="Btns">
                        <div className='btn_group'>
                            <input type="radio" id="btn_group" checked></input>
                            <label for="btn_group">조별순</label>
                        </div>
                        <div className='btn_name'>
                            <input type="radio" id="btn_name"></input>
                            <label for="btn_name">가나다순(오름차순)</label>
                        </div>    
                    </div>
                </div>


                <div className='LeftBottom2'>
                    <div className="box1">
                        <b><h3 id="group1">그룹A</h3></b>
                        <div className='group_infos'>
                            <div className='group_infoA1'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>                              
                            <div className='group_infoA2'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoA3'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoA4'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                        </div>
                    </div>

                    <div className="box2">
                        <b><h3 id="group2">그룹B</h3></b>
                        <div className='group_infos'>
                            <div className='group_infoB1'>
                                    <img width="30%" src={flag} alt="국가 사진"/>
                                    <p>국가명</p>
                            </div>
                            <div className='group_infoB2'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoB3'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>                          
                            <div className='group_infoB4'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='LeftBottom3'>
                    <div class="box3">
                        <b><h3 id="group3">그룹C</h3></b>
                        <div className='group_infos'>
                            <div className='group_infoC1'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoC2'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoC3'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>                          
                            <div className='group_infoC4'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                        </div>
                    </div>

                    <div class="box4">
                        <b><h3 id="group4">그룹D</h3></b>
                        <div className='group_infos'>
                            <div className='group_infoD1'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoD2'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoD3'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>                          
                            <div className='group_infoD4'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                        </div>
                    </div>
                </div>
                 

                <div className='LeftBottom4'>
                    <div class="box5">
                        <b><h3 id="group5">그룹E</h3></b>
                        <div className='group_infos'>
                            <div className='group_infoE1'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoE2'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoE3'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>                          
                            <div className='group_infoE4'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                        </div>
                    </div>

                    <div class="box6">
                        <b><h3 id="group6">그룹F</h3></b>
                        <div className='group_infos'>
                            <div className='group_infoF1'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoF2'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoF3'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>                          
                            <div className='group_infoF4'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='LeftBottom5'>
                    <div className="box7">
                        <b><h3 id="group7">그룹G</h3></b>
                        <div className='group_infos'>
                            <div className='group_infoG1'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoG2'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoG3'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>                          
                            <div className='group_infoG4'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                        </div>
                    </div>

                    <div className="box8">
                        <b><h3 id="group8">그룹H</h3></b>
                        <div className='group_infos'>
                            <div className='group_infoH1'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoH2'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                            <div className='group_infoH3'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>                          
                            <div className='group_infoH4'>
                                <img width="30%" src={flag} alt="국가 사진"/>
                                <p>국가명</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>                
    </>
    )
}
export default LeftBottom;