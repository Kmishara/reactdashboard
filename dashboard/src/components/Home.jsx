import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Home = () => {
  return (
   
   <>
  
   {/* <Sidebar/> */}
   <div className='text-black bg-white h-full grid gap-9 grid-cols-3 left-[300px] p-8 absolute'>
   <div className='h-40 w-96 bg-red-700 flex justify-center items-center '><h1>total attendence <br /> <span className=' '>90</span> </h1></div>
   <div className='h-40 w-96 bg-amber-700 flex justify-center items-center '><h1>total students <br /> <span>90</span></h1></div>
   <div className='h-40 w-96 bg-yellow-300 flex justify-center items-center' ><h1>passing ratio <br /> <span>90</span> </h1></div>
   </div>
   </>
  )
}

export default Home