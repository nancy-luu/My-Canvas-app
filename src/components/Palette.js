import React from 'react';


export default function Palette ({ setSelectedColor, colors }){
    
    return (
        <div> 
            {colors.map(color => <button className="btn3d btn btn-default btn-lg" id={color} key={color} value={color} onClick={(e) => setSelectedColor(e.target.value)}>COLOR</button>)}
        </div>
    )
}