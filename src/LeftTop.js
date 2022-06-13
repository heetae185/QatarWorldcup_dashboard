import * as d3 from 'd3';
import React from 'react';
import './style.css'
import flag from './imgs/Q.jpeg';

function LeftTop(props){
    return(
        <>
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
        </div>                                  
        </>
    );
}

export default LeftTop;
