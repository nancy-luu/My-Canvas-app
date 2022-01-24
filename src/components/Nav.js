import React from 'react';
import Palette from './Palette'
import LineWeight from './LineWeight'


export default function Nav ({ setSelectedColor, colors, clear, download, selectedBackground, setSelectedBackground, backgrounds, selectedLine, setSelectedLine, lines }){
    
    
    return (
        <div className="nav-container">
            <div className="nav">
                <Palette className="palette" setSelectedColor={setSelectedColor} colors={colors}/>
                <LineWeight selectedLine={selectedLine} setSelectedLine={setSelectedLine} lines={lines}/>

                {/* <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                    {colors.map(color => <option key={color} value={color}>{color}</option>)}
                </select> */}
                <button className="navbtn3d btn btn-default btn-lg" onClick={clear}>CLEAR</button>
                <select className="dropdown" value={selectedBackground} onChange={(e) => setSelectedBackground(e.target.value)}>
                    {backgrounds.map(background => 
                        <option key={background} value={background}>{background}</option> 
                    )}
                </select>
                <button className="navbtn3d btn btn-default btn-lg" onClick={download}>DOWNLOAD</button>
            </div>
        </div>
    )
}