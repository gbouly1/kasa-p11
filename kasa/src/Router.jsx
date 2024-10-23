import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/About'
import Form from './pages/form/form'
import Error from './pages/error/Error'

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/form/:id" element={<Form/>}/>
        <Route path="*" element={<Error/>}/>

    </Routes>
  )
}


export default Router
