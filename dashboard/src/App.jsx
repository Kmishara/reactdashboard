import React from 'react'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import AddStudents from './components/AddStudents'
import { Route, Routes } from 'react-router-dom'
import Search from './components/Search'
import CheckStatus from './components/CheckStatus'
const App = () => {
  return (
    <>
   <Header />
   <Sidebar/>
   
   <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/students" element={<AddStudents/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/status" element={<CheckStatus/>} />
      </Routes>
    </>
  )
}

export default App