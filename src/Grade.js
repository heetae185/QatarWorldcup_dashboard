import * as d3 from 'd3';
import React from 'react';
import './style.css'
import gradeChart from './imgs/grade.png'

function Grade(props){
    return(
        <>
            <div className='grade'>
                <b><h2>{props.Nat_name} 역대 월드컵 순위</h2></b>
                <div className='gradeChart'>
                    <img src={gradeChart} width="100%" height="100%" alt="역대 순위 그래프"/>
                </div>
            </div>
        </>
    )
}

export default Grade;