import React from "react";

function Wrapper({children}){
    const style={    
        display: 'flex',
        flexDdirection: 'row',
        alignContent: 'flex-start',
        // background: 'radial-gradient(circle,#d4bac4,#70193D)',
        background:'#e5e5e5',
        border:'20px solid #70193D'
    };
        
    return(<div style={style}>{children}</div>)
}
export default Wrapper