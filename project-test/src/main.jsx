import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Map from './pages/1-map';
import UseState from './pages/3-hook-useState';
import Modal from './pages/4-modal';
import UseReducer from './pages/6-hook-useReducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Map />
    <UseState />
    <Modal /> */}
    <UseReducer />
  </React.StrictMode>,
)
