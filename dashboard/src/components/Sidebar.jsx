import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='h-[calc(100vh-6rem)]  w-96 bg-slate-950  text-white absolute top-24'>
 <Link to="/" className="block p-4 text-white hover:bg-slate-800">
    Home
  </Link>
  <Link to="/students" className="block p-4 text-white hover:bg-slate-800">
    Addstudents
  </Link>
  <Link to="/status" className="block p-4 text-white hover:bg-slate-800">
    Check Status
  </Link>
  <Link to="/search" className="block p-4 text-white hover:bg-slate-800">
   Search
  </Link>
    </div>
  )
}

export default Sidebar