import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import Header from './components/Header'
import Nav from './components/Nav'

const colors = [
  "BLACK",
  "RED",
  "ORANGE",
  "YELLOW",
  "GREEN", 
  "BLUE",
  "PURPLE",
  "PINK",
  "saddlebrown"
]

const backgrounds = [
  "BACKGROUND",
  "canvas1",
  "canvas2",
  "canvas3"
]

const lines = [
  "5",
  "10",
  "30",
  "50",
  "80"
]


export default function App() {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const [isDrawing, setIsDrawing] = useState(false)
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0]);
  const [selectedLine, setSelectedLine] = useState(lines[0]);


  // console.log(selectedColor)

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d")
    // canvasRef.current.style.width = `1300px`;
    // canvasRef.current.style.height = `700px`;
    canvasRef.current.width = window.innerWidth / 1.5;
    canvasRef.current.height = window.innerHeight / 1.5;

    canvasRef.current.style.width = window.innerWidth;
    canvasRef.current.style.height = window.innerHeight;

  }, [])

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d")
    context.scale(1,1)
    context.lineCap = "round"
    context.strokeStyle = selectedColor
    context.lineWidth = selectedLine
    context.background_color = "black"
    contextRef.current = context;
    // console.log(context.strokeStyle)
  }, [selectedColor, selectedLine, selectedBackground])


  

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
   contextRef.current.closePath()
   setIsDrawing(false)
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing){
      return
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const clear = () => {
    contextRef.current.clearRect(0, 0, contextRef.current.canvas.width, contextRef.current.canvas.height)
  }

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "myDrawing.png";
    link.click();
  }

  return (
    <div>
      <Row> 
        <Header />
      </Row>
      <Row> 
        <Nav 
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            colors={colors}
            clear={clear}
            download={download}
            selectedBackground={selectedBackground} 
            setSelectedBackground={setSelectedBackground}
            backgrounds={backgrounds}
            selectedLine={selectedLine}
            setSelectedLine={setSelectedLine}
            lines={lines}
        />
      </Row>
      <Row className="canvas-container"> 
        <canvas
          id={selectedBackground}
          className="canvas"
          style={{
            // border: "1px solid #000",
            border: "none",
            // width: '1300px',
            // height: '700px'
          }}
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
      </Row>
    </div>
  );
}
