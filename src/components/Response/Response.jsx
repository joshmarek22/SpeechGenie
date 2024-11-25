import './response.css'
import React, { useState } from "react";

function Response({ response, setResponse }) {
  
  console.log(`Response in response.jsx: ${response}`)

  return (
    <div>
      <div className="container" style={{ display: response ? 'block' : 'none' }}>
        <p>{response && <span>{response}</span>}</p>
      </div>
    </div>
  )
}

export default Response