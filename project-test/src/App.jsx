import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Map from './pages/1-map';
import UseState from './pages/3-hook-useState';
import Modal from './pages/4-modal';
import UseReducer from './pages/6-hook-useReducer';

import { Navbar } from './components/navbar';

function App() {

  return (
    <div className="App">
      <h1>Projeto teste usando Vite</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='1-map' element={<Map />} />
          <Route path='3-hook-useState' element={<UseState />} />
          <Route path='4-modal' element={<Modal />} />
          <Route path='6-hook-useReducer' element={<UseReducer />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
