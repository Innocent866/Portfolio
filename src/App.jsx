import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProjectPage from './Pages/ProjectPage'
import ContactPage from './Pages/ContactPage'
import { Toaster } from 'react-hot-toast';
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/project' element={<ProjectPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  )
}

export default App