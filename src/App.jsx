import InputBox from './components/InputBox/InputBox'
import Response from './components/Response/Response'
import './App.css'
import React, { useEffect, useState } from 'react'
import { callApi } from './tools/ApiCall'

function App() {
  const [fileName, setFileName] = useState()
  const [response, setResponse] = useState('')
  
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
    <div>
      <h1>SpeechGenie</h1>
      <InputBox fileName={fileName} setFileName={setFileName}/>
      <Response response={response} setResponse={setResponse}/>
    </div>
  );
}

export default App;

