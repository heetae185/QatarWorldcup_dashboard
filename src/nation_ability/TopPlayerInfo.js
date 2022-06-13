import React, { useState, useEffect, useRef } from "react";

/*
넘겨 받을 것
data
nationality_name
player_number
*/

function TopPlayerInfo(props) {
    if (props.data == null) return <></>
    if (props.data.length == 0) return <></>

    let data = props.data.filter((v) => v.nationality_name == props.nationality_name)
        .sort((a, b) => {
            if (a.overall < b.overall) return 1;
            if (a.overall == b.overall) return 0;
            else return -1;
        });

    if (data.length == 0) return <></>
    data = data[props.player_number];
    const faceUrl = data.player_face_url;
    const flagUrl = data.nation_flag_url;
    const club_name = data.club_name;

    const short_name = data.short_name;
    const age = data.age;
    const height = data.height_cm;
    const weight = data.weight_kg
    const position = data.club_position;
    const preferred_foot = data.preferred_foot;
    const value_eur = data.value_eur;
    const wage_eur = data.wage_eur;



    return (
        <div className="nation-ability-top-player-info">
            {/* <div className="nation-ability-top-player-info-detail">
                <img src={flagUrl}></img>
                <div className="nation-ability-top-player-info-detail-left">
                    <p>{props.mapping[props.mapping.map((v, i, s) =>v.nationality_name == props.nationality_name).indexOf(true)].value}</p>
                </div>
                <div className="nation-ability-top-player-info-detail-right">
                    <p>{club_name}</p>
                </div>
            </div> */}
            <img width={"100px"} src={faceUrl}></img>
            <div className="nation-ability-top-player-info-detail">
                <div className="nation-ability-top-player-info-detail-left">
                    <p >{short_name}</p>
                </div>
                <div className="nation-ability-top-player-info-detail-right">
                    <p>{age}</p>
                </div>
            </div>
            <div className="nation-ability-top-player-info-detail">
                <div className="nation-ability-top-player-info-detail-left">
                    <p>{position}</p>
                </div>
                <div className="nation-ability-top-player-info-detail-right">
                    <p>{height}</p>
                </div>
            </div>
            <div className="nation-ability-top-player-info-detail">
                <div className="nation-ability-top-player-info-detail-left">
                    <p>{weight}</p>
                </div>
                <div className="nation-ability-top-player-info-detail-right">
                    <p>{preferred_foot}</p>
                </div>
            </div>
            {/* <div className="nation-ability-top-player-info-detail">
                <div className="nation-ability-top-player-info-detail-left">
                    <p>{"".concat(parseInt(value_eur / 1000), "K")}</p>
                </div>
                <div className="nation-ability-top-player-info-detail-right">
                    <p>{"".concat(parseInt(wage_eur / 1000), "K")}</p>
                </div>
            </div> */}
        </div>
    )
}

export default TopPlayerInfo;