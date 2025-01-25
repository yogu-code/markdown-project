import { useState } from 'react'
import Markdown from 'react-markdown'

function App() {
  const [input,setinput] = useState("")
  const a = '# Hi, *hello*!'
  console.log(input)
  const handleinput = (event)=>{
    setinput(event.target.value)
  }
  return (
    <div className='markdown'> 
      <textarea className='input-box' name="text-area" id="text-area" rows={4} cols={50} value={input} onChange={handleinput}></textarea>
      <div className='markdown-box'>
        <Markdown>{input}</Markdown>
      </div>
    </div>
  )
}

export default App 
