import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('')
  const countRef = useRef()

  const timeToCallSomething = useRef(null)

  const fetchSomething = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${textInput}`).then(res => res.json()).then(data => setData(data.results))
  }

  console.log(data)

  useEffect(() => {
    countRef.current = count
  }, [count])

  useEffect(() => {
    if(timeToCallSomething.current) {
      clearInterval(timeToCallSomething.current)
    }
    timeToCallSomething.current = setTimeout(fetchSomething, 2000)

    return () => clearInterval(timeToCallSomething.current)
  }, [textInput])

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <div className="card">
        <p>Contador Original: {count}</p>
        <p>Contador Referencia: {countRef.current}</p>
        <form>
          <input name="name" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
          <button type="submit">submit</button>
        </form>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
    </div>
  )
}

export default App
