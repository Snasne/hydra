import React from 'react'
import hydraStyles from './Hydra.module.scss'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import MainInfo from '../MainInfo/MainInfo'
import About from '../About/About'
import Services from '../Services/Services'
import Technologies from '../Technologies/Technologies'
import HowTo from '../HowTo/HowTo'
import Join from '../Join/Join'

export default function Hydra() {
  return (
    <div className={hydraStyles.wrapper}>
      <Header/>
      <Routes>
        <Route path='/' element={<MainInfo/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/technologies' element={<Technologies/>}/>
        <Route path='/how-to' element={<HowTo/>}/>
        <Route path='/join-hydra' element={<Join/>}/>
      </Routes>
    </div>
  )
}
