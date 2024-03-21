import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import OurFood from './Components/OurFood'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import SignIn from './Components/SignIn'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/> 
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/aboutus' element={<AboutUs/>}/>
     <Route path='/ourfood' element={<OurFood/>}/>
     <Route path='/signin' element={<SignIn/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
