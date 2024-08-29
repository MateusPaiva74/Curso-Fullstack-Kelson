import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Incial from '../pages/Incial'
import Noticias from '../pages/Noticias'
import DpoLgpd from '../pages/DpoLgpd'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
    <h1>Uniesp - Centro Universitário</h1>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Incial/>}/>
      <Route path="/noticias" element={<Noticias/>}/>
      <Route path="/dpo-lgpd" element={<DpoLgpd/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App