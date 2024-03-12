import React from 'react';
import './App.css';
import { BsGearWide } from "react-icons/bs";

function App() {
  return (
    <div className='main-container'>
      <div className="hello-react-wrapper">
        <div className="animation-wrapper">
          <h1>Hell</h1>
          <p><BsGearWide className='gear-rotation'/></p>
          </div>

          <h1>React</h1>
      </div>
    </div>
  )
}

export default App
