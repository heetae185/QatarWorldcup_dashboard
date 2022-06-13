import React, { useState, useEffect, useRef } from "react";

/*
넘겨 받을 것
data
nationality_name
player_number
*/

function NationAbilityTopPlayerFace(props) {
    if (props.data == null) return <></>
    if (props.data.length == 0) return <></>

    const data = props.data.filter((v) => v.nationality_name == props.nationality_name)
        .sort((a, b) => {
            if (a.overall < b.overall) return 1;
            if (a.overall == b.overall) return 0;
            else return -1;
        });

    if (data.length == 0) return <></>

    const url = data[props.player_number].player_face_url;

    return (
        <div className="nation-ability-top-player-face">
            <img src={url}></img>
        </div>
    )
}

export default NationAbilityTopPlayerFace;