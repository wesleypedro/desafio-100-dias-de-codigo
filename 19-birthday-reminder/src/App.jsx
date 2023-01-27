import { useState } from 'react'
import './App.css'
import List from './components/List'
import data from './data'

function App() {

  const [birthdayList, setBirthdayList] = useState(data)



  return (
    <main>
      <section className='container'>
        <h3>Lembrete de aniversário</h3>
        <h3>{birthdayList.length} aniversário hoje</h3>
        <List birthdayList={birthdayList} />
        <button onClick={() => setBirthdayList([])}>Limpar lista</button>
      </section>
    </main>
  )
}

export default App
