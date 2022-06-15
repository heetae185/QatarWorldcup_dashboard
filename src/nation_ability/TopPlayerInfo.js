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
    let position = data.player_positions;
    if (position.indexOf(",") > 0 ) {
        position = position.split(",")[0]
    }
    const preferred_foot = data.preferred_foot;
    const value_eur = data.value_eur;
    const wage_eur = data.wage_eur;



    return (
        <div className="nation-ability-top-player-info">
            <img width={"100px"} src={faceUrl}></img>
            <div className="nation-ability-top-player-info-detailName">
                <p>{short_name}</p>
            </div>
            <div className="nation-ability-top-player-info-detail">
                <div className="nation-ability-top-player-info-detail1">
                    <div className="nation-ability-top-player-info-detail-left">
                        <p>나이:{age}</p>
                    </div>
                    <div className="nation-ability-top-player-info-detail-right">
                        <p>포지션:{position}</p>
                    </div>
                </div>
                <div className="nation-ability-top-player-info-detail2">
                    <div className="nation-ability-top-player-info-detail-left">
                        <p>키:{height}cm</p>
                    </div>
                    <div className="nation-ability-top-player-info-detail-right">
                        <p>몸무게:{weight}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopPlayerInfo;