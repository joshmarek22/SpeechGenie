import InputBox from './components/InputBox/InputBox'
import Response from './components/Response/Response'
import Footer from './components/Footer'
import './App.css'
import React, { useEffect, useState } from 'react'
import { callApi } from './tools/ApiCall'
import Typewriter from './components/TypeWriter'

function App() {
  const [fileName, setFileName] = useState()
  const [response, setResponse] = useState(``)
  
  useEffect(() => {
    async function fetchData() {
      if (fileName !== undefined) {
        console.log("useEffect ran from file input") //This can become api function call
        const apiResponse = await callApi(fileName)
        setResponse(apiResponse)
        console.log(response)
      }
    }
  fetchData()
  }, [fileName]); //Runs hook when filename state us updates

  return (
    <div className="appContainer">
      <div className="content">
        <Typewriter text={"SpeechGenie"} delay={150} classProperty={'title'}/>
        <InputBox fileName={fileName} setFileName={setFileName}/>
        <Response response={response} setResponse={setResponse}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

