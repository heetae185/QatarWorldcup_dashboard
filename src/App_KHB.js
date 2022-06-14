import React from 'react';
import './style_KHB.css'
import Wrapper from './Wrapper';
import Frame from './Frame';

function App() {
  // var rank=document.querySelector('#Rank');
  // var Nat_name=document.querySelector('#Nat_name');
  // console.log(Nat_name);
  // if(Nat_name==='Korea'){
  //     rank.innerText="1";
  // }else if(Nat_name==='US'){
  //     rank.innerText="36";
  // } 
  return ( 
    <>
        <Wrapper>
            <Frame Nat_name='Korea'/> 
            
        </Wrapper>
    </>
  );
  
}

export default App;