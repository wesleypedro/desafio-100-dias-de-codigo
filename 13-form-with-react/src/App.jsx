import { useState } from 'react'
import './App.css'
import BasicForm from './pages/BasicForm'
import Form from './pages/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Front Beginners</h2>
      {/* <BasicForm /> */}
      <Form />
    </div>
  )
}

export default App
