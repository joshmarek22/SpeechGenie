import './inputBox.css'
import FileBoxText from './FileBoxText'

function InputBox({ fileName, setFileName}) {

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setFileName(file)
    }
  }

  // Handle file drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0]
    if (file) {
      setFileName(file)
    }
  }

  // Prevent default dragover behavior
  const handleDragOver = (event) => {
    event.preventDefault()
  }
  console.log("file object: ",fileName)

  return (
    <div className="file-input-container" onDrop={handleDrop} onDragOver={handleDragOver}>
      <input type="file" id="file" className="file-input" onChange={handleFileChange}/>
      <label htmlFor="file" className="file-label">
        {fileName ? (<span>{fileName.name}</span>):(<span><FileBoxText/></span>)}
      </label>
  </div>
  )
}

export default InputBox