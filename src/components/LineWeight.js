import React from 'react';


export default function LineWeight ( {setSelectedLine, lines}){
    
    return (
        <div> 
            <button className="linebtn3d btn btn-default btn-lg" key={lines[0]} value={lines} onClick={(e) => setSelectedLine(lines[0])}>XS</button>
            <button className="linebtn3d btn btn-default btn-lg" key={lines[1]} value={lines} onClick={(e) => setSelectedLine(lines[1])}>S</button>
            <button className="linebtn3d btn btn-default btn-lg" key={lines[2]} value={lines} onClick={(e) => setSelectedLine(lines[2])}>M</button>
            <button className="linebtn3d btn btn-default btn-lg" key={lines[3]} value={lines} onClick={(e) => setSelectedLine(lines[3])}>L</button>
            <button className="linebtn3d btn btn-default btn-lg" key={lines[4]} value={lines} onClick={(e) => setSelectedLine(lines[4])}>XL</button>
        </div>
    )
}