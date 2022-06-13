import React, { useState, useEffect, useRef } from "react";

function NationInfo(props) {
    let url = "";
    let rank = 1;
    if (props.nations.length > 0 && props.data.length > 0) {
        const data = props.data.filter((v) => v.nationality_name == props.nations[0])[0]

        if (data.length == 0) return <></>
        url = data.nation_flag_url;
        rank = data.overall % 10;
    }
    else return <></>;
    return(
        <>
        <div className="nation-flag"> 
            <img width="100px" src = {url} />
        </div>
        <div className="nation-rank">
            <h1>예상 등수: {rank}</h1>
        </div>
        </>
    )
}

export default NationInfo;
