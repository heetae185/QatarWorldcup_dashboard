import React, { useState, useEffect, useRef } from "react";
// import './top-flag.css'

function TopFlag(props) {
    // console.log(props)
    if (props.data == null || props.data.length == 0 ) return <></>;
    if (props.mapping == null || props.mapping.length == 0 ) return <></>;
    if (props.ranking == null || props.ranking.length == 0 ) return <></>;
    
    if (props.overall_mean == null || props.overall_mean.length == 0 ) return <></>;

    let url = "";
    let nationality_name;
    let pred_rank = 4;
    let fifa_rank;
    let overall_mean;

    const data = props.data.filter((v) => v.nationality_name == props.nationality_name)[0]
    if (data != null) {
        url = data.nation_flag_url;
    }
    // console.log(props.mapping)
    if (props.mapping.length > 0) {
        nationality_name = props.mapping[props.mapping.map((v, i, s) =>v.nationality_name == props.nationality_name).indexOf(true)].value
    }
    // console.log(props.ranking)
    // console.log(props.nationality_name)
    // console.log(props.ranking[props.ranking.map((v) => v.Team == props.nationality_name).indexOf(true)])
    
    // console.log(props.ranking[props.ranking.map((v) => v.Team == nationality_name).indexOf(true)])
    fifa_rank = props.ranking[props.ranking.map((v) => v.Team == props.nationality_name).indexOf(true)].FIFA_Ranking;
    overall_mean = parseInt(props.overall_mean[props.overall_mean.map((v) => v.Team == props.nationality_name).indexOf(true)].mean);


    return(
        <>
            <div className="top-flag-nationality">
                <h2>{nationality_name}</h2>
                <img width="100px" src = {url} />
            </div>
            
            <div className="top-flag-info" >
                <h2>피파랭킹: {fifa_rank}</h2>
                <h2>예상순위: {pred_rank}</h2>
                <h2>오 버 롤: {overall_mean} </h2>
            
        </div>
        </>
    )
}

export default TopFlag;



