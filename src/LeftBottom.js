import React, { useState, useEffect } from "react";

import flag from "./imgs/Q.jpeg";

function LeftBottom(props) {
  //국가 배열
  const nations = [
    { id: 1, group: "A", nationname: "Qatar" },
    { id: 2, group: "A", nationname: "Ecuador" },
    { id: 3, group: "A", nationname: "Senegal" },
    { id: 4, group: "A", nationname: "Netherlands" },
    { id: 5, group: "B", nationname: "England" },
    { id: 6, group: "B", nationname: "IR Iran" },
    { id: 7, group: "B", nationname: "USA" },
    { id: 8, group: "B", nationname: "Euro Play-off" },
    { id: 9, group: "C", nationname: "Argentina" },
    { id: 10, group: "C", nationname: "Saudi Arabia" },
    { id: 11, group: "C", nationname: "Mexico" },
    { id: 12, group: "C", nationname: "Poland" },
    { id: 13, group: "D", nationname: "France" },
    { id: 14, group: "D", nationname: "IC-Play-off1" },
    { id: 15, group: "D", nationname: "Denmark" },
    { id: 16, group: "D", nationname: "Tunisia" },
    { id: 17, group: "E", nationname: "Spain" },
    { id: 18, group: "E", nationname: "IC-Play-off2" },
    { id: 19, group: "E", nationname: "Germany" },
    { id: 20, group: "E", nationname: "Japan" },
    { id: 21, group: "F", nationname: "Belgium" },
    { id: 22, group: "F", nationname: "Canada" },
    { id: 23, group: "F", nationname: "Morocco" },
    { id: 24, group: "F", nationname: "Croatia" },
    { id: 25, group: "G", nationname: "Brazil" },
    { id: 26, group: "G", nationname: "Serbia" },
    { id: 27, group: "G", nationname: "Switzerland" },
    { id: 28, group: "G", nationname: "Cameroon" },
    { id: 29, group: "H", nationname: "Portugal" },
    { id: 30, group: "H", nationname: "Ghana" },
    { id: 31, group: "H", nationname: "Uruguay" },
    { id: 32, group: "H", nationname: "Korea Republic" }
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
  const [Denmark, setDenmark] = useState([false, false]);
  const [Tunisia, setTunisia] = useState([false, false]);
  const [Spain, setSpain] = useState([false, false]);
  const [IC_Play_off2, setIC_Play_off2] = useState([false, false]);
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
      setCheckedNations([nations[0].nationname]);
    } else if (checkedNations.length == 1) {
      if (Qatar[0]) {
        setQatar([!Qatar[0], Qatar[1]]);
        setCheckedNations([]);
      } else if (!Qatar[0]) {
        setQatar([Qatar[0], !Qatar[1]]);
        setCheckedNations([...checkedNations, nations[0].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Qatar[1]) {
        setQatar([Qatar[0], !Qatar[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[0].nationname)
        );
      }
    }
  }

  //카타르 버튼에 대한 onclick 함수
  function qatarToggle() {
    // console.log(checkedNations)
    // console.log(checkedNations.length)
    if (checkedNations.length == 0) {
      setQatar([!Qatar[0], Qatar[1]]);
      setCheckedNations([nations[0].nationname]);
    } else if (checkedNations.length == 1) {
      if (Qatar[0]) {
        setQatar([!Qatar[0], Qatar[1]]);
        setCheckedNations([]);
      } else if (!Qatar[0]) {
        setQatar([Qatar[0], !Qatar[1]]);
        setCheckedNations([...checkedNations, nations[0].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Qatar[1]) {
        setQatar([Qatar[0], !Qatar[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[0].nationname)
        );
      }
    }
  }

  function ecuadorToggle() {
    console.log(checkedNations);
    console.log(checkedNations.length);
    if (checkedNations.length == 0) {
      setEcuador([!Ecuador[0], Ecuador[1]]);
      setCheckedNations([nations[1].nationname]);
    } else if (checkedNations.length == 1) {
      if (Ecuador[0]) {
        setEcuador([!Ecuador[0], Ecuador[1]]);
        setCheckedNations([]);
      } else if (!Ecuador[0]) {
        setEcuador([Ecuador[0], !Ecuador[1]]);
        setCheckedNations([...checkedNations, nations[1].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Ecuador[1]) {
        setEcuador([Ecuador[0], !Ecuador[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[1].nationname)
        );
      }
    }
  }

  function senegalToggle() {
    if (checkedNations.length == 0) {
      setSenegal([!Senegal[0], Senegal[1]]);
      setCheckedNations([nations[2].nationname]);
    } else if (checkedNations.length == 1) {
      if (Senegal[0]) {
        setSenegal([!Senegal[0], Senegal[1]]);
        setCheckedNations([]);
      } else if (!Senegal[0]) {
        setSenegal([Senegal[0], !Senegal[1]]);
        setCheckedNations([...checkedNations, nations[2].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Senegal[1]) {
        setSenegal([Senegal[0], !Senegal[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[2].nationname)
        );
      }
    }
  }

  function netherlandsToggle() {
    if (checkedNations.length == 0) {
      setNetherlands([!Netherlands[0], Netherlands[1]]);
      setCheckedNations([nations[3].nationname]);
    } else if (checkedNations.length == 1) {
      if (Netherlands[0]) {
        setNetherlands([!Netherlands[0], Netherlands[1]]);
        setCheckedNations([]);
      } else if (!Netherlands[0]) {
        setNetherlands([Netherlands[0], !Netherlands[1]]);
        setCheckedNations([...checkedNations, nations[3].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Netherlands[1]) {
        setNetherlands([Netherlands[0], !Netherlands[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[3].nationname)
        );
      }
    }
  }

  function englandToggle() {
    if (checkedNations.length == 0) {
      setEngland([!England[0], England[1]]);
      setCheckedNations([nations[4].nationname]);
    } else if (checkedNations.length == 1) {
      if (England[0]) {
        setEngland([!England[0], England[1]]);
        setCheckedNations([]);
      } else if (!England[0]) {
        setEngland([England[0], !England[1]]);
        setCheckedNations([...checkedNations, nations[4].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (England[1]) {
        setEngland([England[0], !England[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[4].nationname)
        );
      }
    }
  }

  function iranToggle() {
    if (checkedNations.length == 0) {
      setIR_Iran([!IR_Iran[0], IR_Iran[1]]);
      setCheckedNations([nations[5].nationname]);
    } else if (checkedNations.length == 1) {
      if (IR_Iran[0]) {
        setIR_Iran([!IR_Iran[0], IR_Iran[1]]);
        setCheckedNations([]);
      } else if (!IR_Iran[0]) {
        setIR_Iran([IR_Iran[0], !IR_Iran]);
        setCheckedNations([...checkedNations, nations[5].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (IR_Iran[1]) {
        setIR_Iran([IR_Iran[0], !IR_Iran[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[5].nationname)
        );
      }
    }
  }

  function usaToggle() {
    if (checkedNations.length == 0) {
      setUSA([!USA[0], USA[1]]);
      setCheckedNations([nations[6].nationname]);
    } else if (checkedNations.length == 1) {
      if (USA[0]) {
        setUSA([!USA[0], USA[1]]);
        setCheckedNations([]);
      } else if (!USA[0]) {
        setUSA([USA[0], !USA[1]]);
        setCheckedNations([...checkedNations, nations[6].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (USA[1]) {
        setUSA([USA[0], !USA[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[6].nationname)
        );
      }
    }
  }

  function europlayoffToggle() {
    if (checkedNations.length == 0) {
      setEuro_Play_off([!Euro_Play_off[0], Euro_Play_off[1]]);
      setCheckedNations([nations[7].nationname]);
    } else if (checkedNations.length == 1) {
      if (Euro_Play_off[0]) {
        setEuro_Play_off([!Euro_Play_off[0], Euro_Play_off[1]]);
        setCheckedNations([]);
      } else if (!Euro_Play_off[0]) {
        setEuro_Play_off([Euro_Play_off[0], !Euro_Play_off[1]]);
        setCheckedNations([...checkedNations, nations[7].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Euro_Play_off[1]) {
        setEuro_Play_off([Euro_Play_off[0], !Euro_Play_off[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[7].nationname)
        );
      }
    }
  }

  function ArgentinaToggle() {
    if (checkedNations.length == 0) {
      setArgentina([!Argentina[0], Argentina[1]]);
      setCheckedNations([nations[8].nationname]);
    } else if (checkedNations.length == 1) {
      if (Argentina[0]) {
        setArgentina([!Argentina[0], Argentina[1]]);
        setCheckedNations([]);
      } else if (!Argentina[0]) {
        setArgentina([Argentina[0], !Argentina[1]]);
        setCheckedNations([...checkedNations, nations[8].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Argentina[1]) {
        setArgentina([Argentina[0], !Argentina[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[8].nationname)
        );
      }
    }
  }

  function Saudi_ArabiaToggle() {
    if (checkedNations.length == 0) {
      setSaudi_Arabia([!Saudi_Arabia[0], Saudi_Arabia[1]]);
      setCheckedNations([nations[9].nationname]);
    } else if (checkedNations.length == 1) {
      if (Saudi_Arabia[0]) {
        setSaudi_Arabia([!Saudi_Arabia[0], Saudi_Arabia[1]]);
        setCheckedNations([]);
      } else if (!Saudi_Arabia[0]) {
        setSaudi_Arabia([Saudi_Arabia[0], !Saudi_Arabia[1]]);
        setCheckedNations([...checkedNations, nations[9].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Saudi_Arabia[1]) {
        setSaudi_Arabia([Saudi_Arabia[0], !Saudi_Arabia[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[9].nationname)
        );
      }
    }
  }

  function Saudi_ArabiaToggle() {
    if (checkedNations.length == 0) {
      setMexico([!Mexico[0], Mexico[1]]);
      setCheckedNations([nations[10].nationname]);
    } else if (checkedNations.length == 1) {
      if (Mexico[0]) {
        setMexico([!Mexico[0], Mexico[1]]);
        setCheckedNations([]);
      } else if (!Mexico[0]) {
        setMexico([Mexico[0], !Mexico[1]]);
        setCheckedNations([...checkedNations, nations[10].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Mexico[1]) {
        setMexico([Mexico[0], !Mexico[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[10].nationname)
        );
      }
    }
  }

  function PolandToggle() {
    if (checkedNations.length == 0) {
      setPoland([!Poland[0], Poland[1]]);
      setCheckedNations([nations[11].nationname]);
    } else if (checkedNations.length == 1) {
      if (Poland[0]) {
        setPoland([!Poland[0], Poland[1]]);
        setCheckedNations([]);
      } else if (!Poland[0]) {
        setPoland([Poland[0], !Poland[1]]);
        setCheckedNations([...checkedNations, nations[11].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Poland[1]) {
        setPoland([Poland[0], !Poland[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[11].nationname)
        );
      }
    }
  }

  function FranceToggle() {
    if (checkedNations.length == 0) {
      setFrance([!France[0], France[1]]);
      setCheckedNations([nations[12].nationname]);
    } else if (checkedNations.length == 1) {
      if (France[0]) {
        setFrance([!France[0], France[1]]);
        setCheckedNations([]);
      } else if (!France[0]) {
        setFrance([France[0], !France[1]]);
        setCheckedNations([...checkedNations, nations[12].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (France[1]) {
        setFrance([France[0], !France[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[12].nationname)
        );
      }
    }
  }

  function IC_Play_off1Toggle() {
    if (checkedNations.length == 0) {
      setIC_Play_off1([!IC_Play_off1[0], IC_Play_off1[1]]);
      setCheckedNations([nations[13].nationname]);
    } else if (checkedNations.length == 1) {
      if (IC_Play_off1[0]) {
        setIC_Play_off1([!IC_Play_off1[0], IC_Play_off1[1]]);
        setCheckedNations([]);
      } else if (!IC_Play_off1[0]) {
        setIC_Play_off1([IC_Play_off1[0], !IC_Play_off1[1]]);
        setCheckedNations([...checkedNations, nations[13].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (IC_Play_off1[1]) {
        setIC_Play_off1([IC_Play_off1[0], !IC_Play_off1[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[13].nationname)
        );
      }
    }
  }

  function DenmarkToggle() {
    if (checkedNations.length == 0) {
      setDenmark([!Denmark[0], Denmark[1]]);
      setCheckedNations([nations[14].nationname]);
    } else if (checkedNations.length == 1) {
      if (Denmark[0]) {
        setDenmark([!Denmark[0], Denmark[1]]);
        setCheckedNations([]);
      } else if (!Denmark[0]) {
        setDenmark([Denmark[0], !Denmark[1]]);
        setCheckedNations([...checkedNations, nations[14].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Denmark[1]) {
        setDenmark([Denmark[0], !Denmark[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[14].nationname)
        );
      }
    }
  }

  function TunisiaToggle() {
    if (checkedNations.length == 0) {
      setTunisia([!Tunisia[0], Tunisia[1]]);
      setCheckedNations([nations[15].nationname]);
    } else if (checkedNations.length == 1) {
      if (Tunisia[0]) {
        setTunisia([!Tunisia[0], Tunisia[1]]);
        setCheckedNations([]);
      } else if (!Tunisia[0]) {
        setTunisia([Tunisia[0], !Tunisia[1]]);
        setCheckedNations([...checkedNations, nations[15].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Tunisia[1]) {
        setTunisia([Tunisia[0], !Tunisia[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[15].nationname)
        );
      }
    }
  }

  function SpainToggle() {
    if (checkedNations.length == 0) {
      setSpain([!Spain[0], Spain[1]]);
      setCheckedNations([nations[16].nationname]);
    } else if (checkedNations.length == 1) {
      if (Spain[0]) {
        setSpain([!Spain[0], Spain[1]]);
        setCheckedNations([]);
      } else if (!Spain[0]) {
        setSpain([Spain[0], !Spain[1]]);
        setCheckedNations([...checkedNations, nations[16].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Spain[1]) {
        setSpain([Spain[0], !Spain[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[16].nationname)
        );
      }
    }
  }

  function IC_Play_off2Toggle() {
    if (checkedNations.length == 0) {
      setIC_Play_off2([!IC_Play_off2[0], IC_Play_off2[1]]);
      setCheckedNations([nations[17].nationname]);
    } else if (checkedNations.length == 1) {
      if (IC_Play_off2[0]) {
        setIC_Play_off2([!IC_Play_off2[0], IC_Play_off2[1]]);
        setCheckedNations([]);
      } else if (!IC_Play_off2[0]) {
        setIC_Play_off2([IC_Play_off2[0], !IC_Play_off2[1]]);
        setCheckedNations([...checkedNations, nations[17].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (IC_Play_off2[1]) {
        setIC_Play_off2([IC_Play_off2[0], !IC_Play_off2[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[17].nationname)
        );
      }
    }
  }

  function GermanyToggle() {
    if (checkedNations.length == 0) {
      setGermany([!Germany[0], Germany[1]]);
      setCheckedNations([nations[18].nationname]);
    } else if (checkedNations.length == 1) {
      if (Germany[0]) {
        setGermany([!Germany[0], Germany[1]]);
        setCheckedNations([]);
      } else if (!Germany[0]) {
        setGermany([Germany[0], !Germany[1]]);
        setCheckedNations([...checkedNations, nations[18].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Germany[1]) {
        setGermany([Germany[0], !Germany[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[18].nationname)
        );
      }
    }
  }

  function JapanToggle() {
    if (checkedNations.length == 0) {
      setJapan([!Japan[0], Japan[1]]);
      setCheckedNations([nations[19].nationname]);
    } else if (checkedNations.length == 1) {
      if (Japan[0]) {
        setJapan([!Japan[0], Japan[1]]);
        setCheckedNations([]);
      } else if (!Japan[0]) {
        setJapan([Japan[0], !Japan[1]]);
        setCheckedNations([...checkedNations, nations[19].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Japan[1]) {
        setJapan([Japan[0], !Japan[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[19].nationname)
        );
      }
    }
  }

  function BelgiumToggle() {
    if (checkedNations.length == 0) {
      setBelgium([!Belgium[0], Belgium[1]]);
      setCheckedNations([nations[20].nationname]);
    } else if (checkedNations.length == 1) {
      if (Belgium[0]) {
        setBelgium([!Belgium[0], Belgium[1]]);
        setCheckedNations([]);
      } else if (!Belgium[0]) {
        setBelgium([Belgium[0], !Belgium[1]]);
        setCheckedNations([...checkedNations, nations[20].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Belgium[1]) {
        setBelgium([Belgium[0], !Belgium[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[20].nationname)
        );
      }
    }
  }

  function CanadaToggle() {
    if (checkedNations.length == 0) {
      setCanada([!Canada[0], Canada[1]]);
      setCheckedNations([nations[21].nationname]);
    } else if (checkedNations.length == 1) {
      if (Canada[0]) {
        setCanada([!Canada[0], Canada[1]]);
        setCheckedNations([]);
      } else if (!Canada[0]) {
        setCanada([Canada[0], !Canada[1]]);
        setCheckedNations([...checkedNations, nations[21].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Canada[1]) {
        setCanada([Canada[0], !Canada[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[21].nationname)
        );
      }
    }
  }

  function MoroccoToggle() {
    if (checkedNations.length == 0) {
      setMorocco([!Morocco[0], Morocco[1]]);
      setCheckedNations([nations[22].nationname]);
    } else if (checkedNations.length == 1) {
      if (Morocco[0]) {
        setMorocco([!Morocco[0], Morocco[1]]);
        setCheckedNations([]);
      } else if (!Morocco[0]) {
        setMorocco([Morocco[0], !Morocco[1]]);
        setCheckedNations([...checkedNations, nations[22].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Morocco[1]) {
        setMorocco([Morocco[0], !Morocco[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[22].nationname)
        );
      }
    }
  }

  function CroatiaToggle() {
    if (checkedNations.length == 0) {
      setCroatia([!Croatia[0], Croatia[1]]);
      setCheckedNations([nations[23].nationname]);
    } else if (checkedNations.length == 1) {
      if (Croatia[0]) {
        setCroatia([!Croatia[0], Croatia[1]]);
        setCheckedNations([]);
      } else if (!Croatia[0]) {
        setCroatia([Croatia[0], !Croatia[1]]);
        setCheckedNations([...checkedNations, nations[23].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Croatia[1]) {
        setCroatia([Croatia[0], !Croatia[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[23].nationname)
        );
      }
    }
  }

  function BrazilToggle() {
    if (checkedNations.length == 0) {
      setBrazil([!Brazil[0], Brazil[1]]);
      setCheckedNations([nations[24].nationname]);
    } else if (checkedNations.length == 1) {
      if (Brazil[0]) {
        setBrazil([!Brazil[0], Brazil[1]]);
        setCheckedNations([]);
      } else if (!Brazil[0]) {
        setBrazil([Brazil[0], !Brazil[1]]);
        setCheckedNations([...checkedNations, nations[24].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Brazil[1]) {
        setBrazil([Brazil[0], !Brazil[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[24].nationname)
        );
      }
    }
  }

  function SerbiaToggle() {
    if (checkedNations.length == 0) {
      setSerbia([!Serbia[0], Serbia[1]]);
      setCheckedNations([nations[25].nationname]);
    } else if (checkedNations.length == 1) {
      if (Serbia[0]) {
        setSerbia([!Serbia[0], Serbia[1]]);
        setCheckedNations([]);
      } else if (!Serbia[0]) {
        setSerbia([Serbia[0], !Serbia[1]]);
        setCheckedNations([...checkedNations, nations[25].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Serbia[1]) {
        setSerbia([Serbia[0], !Serbia[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[25].nationname)
        );
      }
    }
  }

  function SwitzerlandToggle() {
    if (checkedNations.length == 0) {
      setSwitzerland([!Switzerland[0], Switzerland[1]]);
      setCheckedNations([nations[26].nationname]);
    } else if (checkedNations.length == 1) {
      if (Switzerland[0]) {
        setSwitzerland([!Switzerland[0], Switzerland[1]]);
        setCheckedNations([]);
      } else if (!Switzerland[0]) {
        setSwitzerland([Switzerland[0], !Switzerland[1]]);
        setCheckedNations([...checkedNations, nations[26].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Switzerland[1]) {
        setSwitzerland([Switzerland[0], !Switzerland[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[26].nationname)
        );
      }
    }
  }

  function CameroonToggle() {
    if (checkedNations.length == 0) {
      setCameroon([!Cameroon[0], Cameroon[1]]);
      setCheckedNations([nations[27].nationname]);
    } else if (checkedNations.length == 1) {
      if (Cameroon[0]) {
        setCameroon([!Cameroon[0], Cameroon[1]]);
        setCheckedNations([]);
      } else if (!Cameroon[0]) {
        setCameroon([Cameroon[0], !Cameroon[1]]);
        setCheckedNations([...checkedNations, nations[27].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Cameroon[1]) {
        setCameroon([Cameroon[0], !Cameroon[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[27].nationname)
        );
      }
    }
  }

  function PortugalToggle() {
    if (checkedNations.length == 0) {
      setPortugal([!Portugal[0], Portugal[1]]);
      setCheckedNations([nations[28].nationname]);
    } else if (checkedNations.length == 1) {
      if (Portugal[0]) {
        setPortugal([!Portugal[0], Portugal[1]]);
        setCheckedNations([]);
      } else if (!Portugal[0]) {
        setPortugal([Portugal[0], !Portugal[1]]);
        setCheckedNations([...checkedNations, nations[28].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Portugal[1]) {
        setPortugal([Portugal[0], !Portugal[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[28].nationname)
        );
      }
    }
  }

  function GhanaToggle() {
    if (checkedNations.length == 0) {
      setGhana([!Ghana[0], Ghana[1]]);
      setCheckedNations([nations[29].nationname]);
    } else if (checkedNations.length == 1) {
      if (Ghana[0]) {
        setGhana([!Ghana[0], Ghana[1]]);
        setCheckedNations([]);
      } else if (!Ghana[0]) {
        setGhana([Ghana[0], !Ghana[1]]);
        setCheckedNations([...checkedNations, nations[29].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Ghana[1]) {
        setGhana([Ghana[0], !Ghana[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[29].nationname)
        );
      }
    }
  }

  function UruguayToggle() {
    if (checkedNations.length == 0) {
      setUruguay([!Uruguay[0], Uruguay[1]]);
      setCheckedNations([nations[30].nationname]);
    } else if (checkedNations.length == 1) {
      if (Uruguay[0]) {
        setUruguay([!Uruguay[0], Uruguay[1]]);
        setCheckedNations([]);
      } else if (!Uruguay[0]) {
        setUruguay([Uruguay[0], !Uruguay[1]]);
        setCheckedNations([...checkedNations, nations[30].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Uruguay[1]) {
        setUruguay([Uruguay[0], !Uruguay[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[30].nationname)
        );
      }
    }
  }

  function Korea_RepublicToggle() {
    if (checkedNations.length == 0) {
      setKorea_Republic([!Korea_Republic[0], Korea_Republic[1]]);
      setCheckedNations([nations[31].nationname]);
    } else if (checkedNations.length == 1) {
      if (Korea_Republic[0]) {
        setKorea_Republic([!Korea_Republic[0], Korea_Republic[1]]);
        setCheckedNations([]);
      } else if (!Korea_Republic[0]) {
        setKorea_Republic([Korea_Republic[0], !Korea_Republic[1]]);
        setCheckedNations([...checkedNations, nations[31].nationname]);
      }
    } else if (checkedNations.length == 2) {
      if (Korea_Republic[1]) {
        setKorea_Republic([Korea_Republic[0], !Korea_Republic[1]]);
        setCheckedNations(
          checkedNations.filter((el) => el != nations[31].nationname)
        );
      }
    }
  }
  return (
    <div className="left_down">
      <div className="LeftBottom1">
        <div className="Btns">
          <div className="btn_group">
            <input type="radio" name="gender" id="btn_group" checked></input>
            <label for="btn_group">조별순</label>
          </div>
          <div className="btn_name">
            <input type="radio" name="gender" id="btn_name"></input>
            <label for="btn_name">가나다순(오름차순)</label>
          </div>
        </div>
      </div>

      <div className="LeftBottom2">
        <div className="box1">
          <b>
            <h3 id="group1">그룹A</h3>
          </b>
          <div className="group_infos">
            <div className="group_infoA1">
              <label for="A1">
                <img width="30%" src={flag} alt="국가 사진" />
                <input
                  type="button"
                  onClick={qatarToggle}
                  id="A1"
                  value="카타르"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoA2">
              <label for="A2">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/ec.png"
                  alt="국가 사진"
                />
                <input
                  onclick={ecuadorToggle}
                  type="button"
                  id="A2"
                  value="에콰도르"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoA3">
              <label for="A3">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/sn.png"
                  alt="국가 사진"
                />
                <input
                  onclick={senegalToggle}
                  type="button"
                  id="A3"
                  value="세네갈"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoA4">
              <label for="A4">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/nl.png"
                  alt="국가 사진"
                />
                <input
                  onclick={netherlandsToggle}
                  type="button"
                  id="A4"
                  value="네덜란드"
                  name="Group"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="box2">
          <b>
            <h3 id="group2">그룹B</h3>
          </b>
          <div className="group_infos">
            <div className="group_infoB1">
              <label for="B1">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/gb-eng.png"
                  alt="국가 사진"
                />
                <input
                  onclick={englandToggle}
                  type="button"
                  id="B1"
                  value="영국"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoB2">
              <label for="B2">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/ir.png"
                  alt="국가 사진"
                />
                <input
                  onclick={iranToggle}
                  type="button"
                  id="B2"
                  value="이란"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoB3">
              <label for="B3">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/us.png"
                  alt="국가 사진"
                />
                <input
                  onclick={usaToggle}
                  type="button"
                  id="B3"
                  value="미국"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoB4">
              <label for="B4">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/nl.png"
                  alt="국가 사진"
                />
                <input
                  onclick={europlayoffToggle}
                  type="button"
                  id="B4"
                  value="네덜란드"
                  name="Group"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="LeftBottom3">
        <div class="box3">
          <b>
            <h3 id="group3">그룹C</h3>
          </b>
          <div className="group_infos">
            <div className="group_infoC1">
              <label for="C1">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/ar.png"
                  alt="국가 사진"
                />
                <input
                  onclick={ArgentinaToggle}
                  type="button"
                  id="C1"
                  value="아르헨티나"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoC2">
              <label for="C2">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/sa.png"
                  alt="국가 사진"
                />
                <input
                  onclick={Saudi_ArabiaToggle}
                  type="button"
                  id="C2"
                  value="사우디아라비아"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoC3">
              <label for="C3">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/mx.png"
                  alt="국가 사진"
                />
                <input
                  onclick={Saudi_ArabiaToggle}
                  type="button"
                  id="C3"
                  value="멕시코"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoC4">
              <label for="C4">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/pl.png"
                  alt="국가 사진"
                />
                <input
                  onclick={PolandToggle}
                  type="button"
                  id="C4"
                  value="폴란드"
                  name="Group"
                />
              </label>
            </div>
          </div>
        </div>

        <div class="box4">
          <b>
            <h3 id="group4">그룹D</h3>
          </b>
          <div className="group_infos">
            <div className="group_infoD1">
              <label for="D1">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/fr.png"
                  alt="국가 사진"
                />
                <input
                  onclick={FranceToggle}
                  type="button"
                  id="D1"
                  value="프랑스"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoD2">
              <label for="D2">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/ec.png"
                  alt="국가 사진"
                />
                <input
                  onclick={IC_Play_off1Toggle}
                  type="button"
                  id="D2"
                  value="이란"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoD3">
              <label for="D3">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/dk.png"
                  alt="국가 사진"
                />
                <input
                  onclick={DenmarkToggle}
                  type="button"
                  id="D3"
                  value="덴마크"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoD4">
              <label for="D4">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/tn.png"
                  alt="국가 사진"
                />
                <input
                  onclick={TunisiaToggle}
                  type="button"
                  id="D4"
                  value="튀니지"
                  name="Group"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="LeftBottom4">
        <div class="box5">
          <b>
            <h3 id="group5">그룹E</h3>
          </b>
          <div className="group_infos">
            <div className="group_infoE1">
              <label for="E1">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/es.png"
                  alt="국가 사진"
                />
                <input
                  onclick={SpainToggle}
                  type="button"
                  id="E1"
                  value="스페인"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoE2">
              <label for="E2">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/ec.png"
                  alt="국가 사진"
                />
                <input
                  onclick={IC_Play_off2Toggle}
                  type="button"
                  id="E2"
                  value="이란"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoE3">
              <label for="E3">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/de.png"
                  alt="국가 사진"
                />
                <input
                  onclick={GermanyToggle}
                  type="button"
                  id="E3"
                  value="독일"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoE4">
              <label for="E4">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/jp.png"
                  alt="국가 사진"
                />
                <input
                  onclick={JapanToggle}
                  type="button"
                  id="E4"
                  value="일본"
                  name="Group"
                />
              </label>
            </div>
          </div>
        </div>

        <div class="box6">
          <b>
            <h3 id="group6">그룹F</h3>
          </b>
          <div className="group_infos">
            <div className="group_infoF1">
              <label for="F1">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/be.png"
                  alt="국가 사진"
                />
                <input
                  onclick={BelgiumToggle}
                  type="button"
                  id="F1"
                  value="벨기에"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoF2">
              <label for="F2">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/ca.png"
                  alt="국가 사진"
                />
                <input
                  onclick={CanadaToggle}
                  type="button"
                  id="F2"
                  value="캐나다"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoF3">
              <label for="F3">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/ma.png"
                  alt="국가 사진"
                />
                <input
                  onclick={MoroccoToggle}
                  type="button"
                  id="F3"
                  value="모로코"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoF4">
              <label for="F4">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/hr.png"
                  alt="국가 사진"
                />
                <input
                  onclick={CroatiaToggle}
                  type="button"
                  id="F4"
                  value="크로아티아"
                  name="Group"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="LeftBottom5">
        <div className="box7">
          <b>
            <h3 id="group7">그룹G</h3>
          </b>
          <div className="group_infos">
            <div className="group_infoG1">
              <label for="G1">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/br.png"
                  alt="국가 사진"
                />
                <input
                  onclick={BrazilToggle}
                  type="button"
                  id="G1"
                  value="브라질"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoG2">
              <label for="G2">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/rs.png"
                  alt="국가 사진"
                />
                <input
                  onclick={SerbiaToggle}
                  type="button"
                  id="G2"
                  value="세르비아"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoG3">
              <label for="G3">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/ch.png"
                  alt="국가 사진"
                />
                <input
                  onclick={SwitzerlandToggle}
                  type="button"
                  id="G3"
                  value="스위스"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoG4">
              <label for="G4">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/cm.png"
                  alt="국가 사진"
                />
                <input
                  onclick={CameroonToggle}
                  type="button"
                  id="G4"
                  value="카메룬"
                  name="Group"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="box8">
          <b>
            <h3 id="group8">그룹H</h3>
          </b>
          <div className="group_infos">
            <div className="group_infoH1">
              <label for="H1">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/pt.png"
                  alt="국가 사진"
                />
                <input
                  onclick={PortugalToggle}
                  type="button"
                  id="H1"
                  value="포르투갈"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoH2">
              <label for="H2">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/gh.png"
                  alt="국가 사진"
                />
                <input
                  onclick={GhanaToggle}
                  type="button"
                  id="H2"
                  value="가나"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoH3">
              <label for="H3">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/uy.png"
                  alt="국가 사진"
                />
                <input
                  onclick={UruguayToggle}
                  type="button"
                  id="H3"
                  value="우르과이"
                  name="Group"
                />
              </label>
            </div>
            <div className="group_infoH4">
              <label for="H4">
                <img
                  width="30%"
                  src="https://cdn.sofifa.net/flags/kr.png"
                  alt="국가 사진"
                />
                <input
                  onclick={Korea_RepublicToggle}
                  type="button"
                  id="H4"
                  value="한국"
                  name="Group"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBottom;
