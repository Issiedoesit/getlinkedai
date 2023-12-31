import React from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './assets/components/Home/Home'

function App() {

  return (
    <div className={`font-Montserrat`}>
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
