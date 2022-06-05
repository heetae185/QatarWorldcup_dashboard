import React, { useRef, useState, useEffect } from "react";
import './btn.css'

function Filter3() {

    //국가 배열
    const nations = [
      {id: 1, group: 'A', nationname: 'Qatar'},
      {id: 2, group: 'A', nationname: 'Ecuador'},
      {id: 3, group: 'A', nationname: 'Senegal'},
      {id: 4, group: 'A', nationname: 'Netherlands'},
      {id: 5, group: 'B', nationname: 'England'},
      {id: 6, group: 'B', nationname: 'IR Iran'},
      {id: 7, group: 'B', nationname: 'USA'},
      {id: 8, group: 'B', nationname: 'Euro Play-off'},
      {id: 9, group: 'C', nationname: 'Argentina'},
      {id: 10, group: 'C', nationname: 'Saudi Arabia'},
      {id: 11, group: 'C', nationname: 'Mexico'},
      {id: 12, group: 'C', nationname: 'Poland'},
      {id: 13, group: 'D', nationname: 'France'},
      {id: 14, group: 'D', nationname: 'IC-Play-off1'},
      {id: 15, group: 'D', nationname: 'Denmark'},
      {id: 16, group: 'D', nationname: 'Tunisia'},
      {id: 17, group: 'E', nationname: 'Spain'},
      {id: 18, group: 'E', nationname: 'IC-Play-off2'},
      {id: 19, group: 'E', nationname: 'Germany'},
      {id: 20, group: 'E', nationname: 'Japan'},
      {id: 21, group: 'F', nationname: 'Belgium'},
      {id: 22, group: 'F', nationname: 'Canada'},
      {id: 23, group: 'F', nationname: 'Morocco'},
      {id: 24, group: 'F', nationname: 'Croatia'},
      {id: 25, group: 'G', nationname: 'Brazil'},
      {id: 26, group: 'G', nationname: 'Serbia'},
      {id: 27, group: 'G', nationname: 'Switzerland'},
      {id: 28, group: 'G', nationname: 'Cameroon'},
      {id: 29, group: 'H', nationname: 'Portugal'},
      {id: 30, group: 'H', nationname: 'Ghana'},
      {id: 31, group: 'H', nationname: 'Uruguay'},
      {id: 32, group: 'H', nationname: 'Korea Republic'},
    ];

    //국가별 토글(첫번째 false는 첫번째 요소임을 나타냄, 두번째 false는 두번째 요소임을 나타냄)
   const [Qatar, setQatar] = useState([false, false]);
    const [Ecuador, setEcuador] = useState([false, false]);
    const [Senegal, setSenegal] = useState([false, false]);
    const [Netherlands, setNetherlands] = useState([false, false]);
    const [England, setEngland] = useState([false, false]);
    const [IR_Iran, setIR_Iran] = useState([false, false]);
    const [USA, setUSA] = useState([false, false]);
    const [Euro_Play_off, setEuro_Play_off] = useState([false, false]);
    const [Argentina, setArgentina] = useState([false, false]);
    const [Saudi_Arabia, setSaudi_Arabia] = useState([false, false]);
    const [Mexico, setMexico] = useState([false, false]);
    const [Poland, setPoland] = useState([false, false]);
    const [France, setFrance] = useState([false, false]);
    const [IC_Play_off1, setIC_Play_off1] = useState([false, false]);
    const [Germany, setGermany] = useState([false, false]);
    const [Japan, setJapan] = useState([false, false]);
    const [Belgium, setBelgium] = useState([false, false]);
    const [Canada, setCanada] = useState([false, false]);
    const [Morocco, setMorocco] = useState([false, false]);
    const [Croatia, setCroatia] = useState([false, false]);
    const [Brazil, setBrazil] = useState([false, false]);
    const [Serbia, setSerbia] = useState([false, false]);
    const [Switzerland, setSwitzerland] = useState([false, false]);
    const [Cameroon, setCameroon] = useState([false, false]);
    const [Portugal, setPortugal] = useState([false, false]);
    const [Ghana, setGhana] = useState([false, false]);
    const [Uruguay, setUruguay] = useState([false, false]);
    const [Korea_Republic, setKorea_Republic] = useState([false, false]);

    //checkedNations 배열에는 두 나라가 들어감 최대 2개까지만 들어갈 수 있음
    const [checkedNations, setCheckedNations] = useState([]);

    //nationToggle은 코드 반복되는거 싫어서 그냥 임의로 만든 함수임 이거 안씀
    function nationToggle() {
      if (checkedNations.length == 0) {
        setQatar([!Qatar[0], Qatar[1]]);
        setCheckedNations([nations[0].nationname])
      } else if (checkedNations.length == 1){
        if (Qatar[0]) {
          setQatar([!Qatar[0], Qatar[1]]);
          setCheckedNations([])
        } else if (!Qatar[0]) {
          setQatar([Qatar[0], !Qatar[1]])
          setCheckedNations([...checkedNations, nations[0].nationname])
        }
      } else if (checkedNations.length == 2) {
        if (Qatar[1]) {
          setQatar([Qatar[0], !Qatar[1]])
          setCheckedNations(checkedNations.filter(el => el != nations[0].nationname))
        }
      } 
    }

    //카타르 버튼에 대한 onclick 함수
    function qatarToggle() {
      // console.log(checkedNations)
      // console.log(checkedNations.length)
      if (checkedNations.length == 0) {
        setQatar([!Qatar[0], Qatar[1]]);
        setCheckedNations([nations[0].nationname])
      } else if (checkedNations.length == 1){
        if (Qatar[0]) {
          setQatar([!Qatar[0], Qatar[1]]);
          setCheckedNations([])
        } else if (!Qatar[0]) {
          setQatar([Qatar[0], !Qatar[1]])
          setCheckedNations([...checkedNations, nations[0].nationname])
        }
      } else if (checkedNations.length == 2) {
        if (Qatar[1]) {
          setQatar([Qatar[0], !Qatar[1]])
          setCheckedNations(checkedNations.filter(el => el != nations[0].nationname))
        }
      } 
    }

    
    function ecuadorToggle() {
      console.log(checkedNations)
      console.log(checkedNations.length)
      if (checkedNations.length == 0) {
        setEcuador([!Ecuador[0], Ecuador[1]]);
        setCheckedNations([nations[1].nationname])
      } else if (checkedNations.length == 1){
        if (Ecuador[0]) {
          setEcuador([!Ecuador[0], Ecuador[1]]);
          setCheckedNations([])
        } else if (!Ecuador[0]) {
          setEcuador([Ecuador[0], !Ecuador[1]])
          setCheckedNations([...checkedNations, nations[1].nationname])
        }
      } else if (checkedNations.length == 2) {
        if (Ecuador[1]) {
          setEcuador([Ecuador[0], !Ecuador[1]])
          setCheckedNations(checkedNations.filter(el => el != nations[1].nationname))
        }
      } 
    }

    function senegalToggle() {
      if (checkedNations.length == 0) {
        setSenegal([!Senegal[0], Senegal[1]]); setCheckedNations([nations[2].nationname])
      } else if (checkedNations.length == 1){
        if (Senegal[0]) {setSenegal([!Senegal[0], Senegal[1]]); setCheckedNations([]);
        } else if (!Senegal[0]) {setSenegal([Senegal[0], !Senegal[1]]); setCheckedNations([...checkedNations, nations[2].nationname])}
      } else if (checkedNations.length == 2) {
        if (Senegal[1]) {setSenegal([Senegal[0], !Senegal[1]]); setCheckedNations(checkedNations.filter(el => el != nations[2].nationname))}
      }}

    function netherlandsToggle() {
    if (checkedNations.length == 0) {
      setNetherlands([!Netherlands[0], Netherlands[1]]); setCheckedNations([nations[3].nationname])
    } else if (checkedNations.length == 1){
      if (Netherlands[0]) {setNetherlands([!Netherlands[0], Netherlands[1]]); setCheckedNations([]);
      } else if (!Netherlands[0]) {setNetherlands([Netherlands[0], !Netherlands[1]]); setCheckedNations([...checkedNations, nations[3].nationname])}
    } else if (checkedNations.length == 2) {
      if (Netherlands[1]) {setNetherlands([Netherlands[0], !Netherlands[1]]); setCheckedNations(checkedNations.filter(el => el != nations[3].nationname))}
    }}

    function englandToggle() {
      if (checkedNations.length == 0) {
        setEngland([!England[0], England[1]]); setCheckedNations([nations[4].nationname])
      } else if (checkedNations.length == 1){
        if (England[0]) {setEngland([!England[0], England[1]]); setCheckedNations([]);
        } else if (!England[0]) {setEngland([England[0], !England[1]]); setCheckedNations([...checkedNations, nations[4].nationname])}
      } else if (checkedNations.length == 2) {
        if (England[1]) {setEngland([England[0], !England[1]]); setCheckedNations(checkedNations.filter(el => el != nations[4].nationname))}
      }}

    function iranToggle() {
      if (checkedNations.length == 0) {
        setIR_Iran([!IR_Iran[0], IR_Iran[1]]); setCheckedNations([nations[5].nationname])
      } else if (checkedNations.length == 1){
        if (IR_Iran[0]) {setIR_Iran([!IR_Iran[0], IR_Iran[1]]); setCheckedNations([]);
        } else if (!IR_Iran[0]) {setIR_Iran([IR_Iran[0], !IR_Iran]); setCheckedNations([...checkedNations, nations[5].nationname])}
      } else if (checkedNations.length == 2) {
        if (IR_Iran[1]) {setIR_Iran([IR_Iran[0], !IR_Iran[1]]); setCheckedNations(checkedNations.filter(el => el != nations[5].nationname))}
      }}

    function usaToggle() {
      if (checkedNations.length == 0) {
        setUSA([!USA[0], USA[1]]); setCheckedNations([nations[6].nationname])
      } else if (checkedNations.length == 1){
        if (USA[0]) {setUSA([!USA[0], USA[1]]); setCheckedNations([]);
        } else if (!USA[0]) {setUSA([USA[0], !USA[1]]); setCheckedNations([...checkedNations, nations[6].nationname])}
      } else if (checkedNations.length == 2) {
        if (USA[1]) {setUSA([USA[0], !USA[1]]); setCheckedNations(checkedNations.filter(el => el != nations[6].nationname))}
      }}

    function europlayoffToggle() {
      if (checkedNations.length == 0) {
        setEuro_Play_off([!Euro_Play_off[0], Euro_Play_off[1]]); setCheckedNations([nations[7].nationname])
      } else if (checkedNations.length == 1){
        if (Euro_Play_off[0]) {setEuro_Play_off([!Euro_Play_off[0], Euro_Play_off[1]]); setCheckedNations([]);
        } else if (!Euro_Play_off[0]) {setEuro_Play_off([Euro_Play_off[0], !Euro_Play_off[1]]); setCheckedNations([...checkedNations, nations[7].nationname])}
      } else if (checkedNations.length == 2) {
        if (Euro_Play_off[1]) {setEuro_Play_off([Euro_Play_off[0], !Euro_Play_off[1]]); setCheckedNations(checkedNations.filter(el => el != nations[7].nationname))}
      }}
    
  return (
    <>
      <div><button type="button" onClick={qatarToggle}>{nations[0].nationname}</button></div>
      <div><button type="button" onClick={ecuadorToggle}>{nations[1].nationname}</button></div>
      <div><button type="button" onClick={senegalToggle}>{nations[2].nationname}</button></div>
      <div><button type="button" onClick={netherlandsToggle}>{nations[3].nationname}</button></div>
      <div><button type="button" onClick={englandToggle}>{nations[4].nationname}</button></div>
      <div><button type="button" onClick={iranToggle}>{nations[5].nationname}</button></div>
      <div><button type="button" onClick={usaToggle}>{nations[6].nationname}</button></div>
      <div><button type="button" onClick={europlayoffToggle}>{nations[7].nationname}</button></div>
      

      <div>{checkedNations}</div>
      <div>{checkedNations.length}</div>
      <div>{Qatar.toString()}</div>
      <div>{Ecuador.toString()}</div>
      <div>{Senegal.toString()}</div>
    </>
  );
}

export default Filter3;
