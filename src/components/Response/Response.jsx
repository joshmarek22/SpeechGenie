import Typewriter from '../TypeWriter';
import './response.css'
import React, { useState } from "react";

function Response({ response, setResponse }) {
  
  console.log(`Response in response.jsx: ${response}`)

  return (
    <div>
      <div className="container" style={{ display: response ? 'block' : 'none' }}>
        <Typewriter text={response} delay={10} classProperty={'response'}/>
      </div>
    </div>
  )
}

export default Response