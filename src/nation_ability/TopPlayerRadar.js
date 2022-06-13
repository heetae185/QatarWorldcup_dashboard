import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import Radar from 'react-d3-radar';
/*
넘겨 받을 것
data
nationality_name
player_number
<TopPlayerHex data={dataset} player_number={0} nationality_name={nations[0]}/>
*/

function TopPlayerRadar(props) {
  if (props == null) return (<></>)
  if (props.data == null) return (<></>)
  if (props.data.length == 0) return (<></>)
  

  let data = props.data.filter((v) => v.nationality_name == props.nationality_name);


  if (data == null) return (<></>)
  if (data.length <= props.player_number) return (<></>)
  // console.log(data.length)


  const players = {
      variables: [
        {key: 'pace', label: 'Pace'},
        {key: 'shooting', label: 'Shooting'},
        {key: 'passing', label: 'Passing'},
        {key: 'dribbling', label: 'Dribbling'},
        {key: 'defending', label: 'Defending'},
        {key: 'physic', label: 'Physic'},
      ],
      sets: [{
        key: 'p1',
        label: 'My',
        values: {
          pace: parseInt(data[props.player_number].pace),
          shooting: parseInt(data[props.player_number].shooting),
          passing: parseInt(data[props.player_number].passing),
          dribbling: parseInt(data[props.player_number].dribbling),
          defending: parseInt(data[props.player_number].defending),
          physic: parseInt(data[props.player_number].physic),
        }     
  }]
    };


  return (
    <div className="nation-ability-top-player-hex">
      <Radar
        width={200}
        height={200}
        padding={30}
        domainMax={100}
        highlighted={null}
        onHover={(point) => {
          if (point) {
            console.log('hovered over a data point');
          } else {
            console.log('not over anything');
          }
        }}

        data={players}
        />
  </div>
    )
}

export default TopPlayerRadar;

/*
{
    variables: [
            {key: 'pace', label: 'Pace'},
            {key: 'shooting', label: 'Shooting'},
            {key: 'passing', label: 'Passing'},
            {key: 'dribbling', label: 'Dribbling'},
            {key: 'defending', label: 'Defending'},
            {key: 'physic', label: 'Physic'},
              ],
    sets: [
        {
          key: 'me',
          label: 'My Scores',
          values: {
            pace: 40,
            shooting: 60,
            passing: 70,
            dribbling: 20,
            defending: 80,
            physic: 10,
          },
        },
        {
          key: 'everyone',
          label: 'Everyone',
          values: {
            pace: 100,
            shooting: 80,
            passing: 60,
            dribbling: 40,
            defending: 20,
            physic: 0,
          },
        },
    ],
  }
*/