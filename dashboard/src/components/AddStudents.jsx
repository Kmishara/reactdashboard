import React, { useState } from 'react'
import Sidebar from './Sidebar'

const AddStudents = () => {

  const [showTable, setShowTable] = useState(false);

  const handleAddClick = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowTable(true); // Show the table
  };
  return (
    <>
  
    <Sidebar/>
    <div className='text-black bg-green-400 h-full w-full  left-[300px] p-8 absolute'>
    {!showTable && (
      <div>
    <form action=""
     onSubmit={handleAddClick}
     className='flex flex-col gap-6 w-72 bg-white p-6 rounded-lg shadow-md mx-auto'>
      <input type="text" placeholder='Name' name='name' />
      <input type="email" placeholder='email' name='email' />
      <input type="number" placeholder='sem' name='sem' />
      <input type="file" placeholder='image' name='image' />
      <input type="text" placeholder='C.G.P.A' name='marks' />
      <button type='submit' className='bg-black text-white p-2'>Add</button>
    </form>
    </div>
    )}
    </div>
    {showTable && (
   <div className='bg-slate-500 h-[75%] rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2  w-96 text-white left-[900px]  top-[500px] p-8 absolute'>
    <table className='border-collapse border  border-slate-400 w-full'>
    <thead>
          <tr>
            <th className='p-8 border border-slate-300 text-left'>Field</th>
            <th className='p-8 border border-slate-300 text-left'>Value</th>
          </tr>
        </thead>
        <br />
        <tbody>
          <tr>
            <td className='p-8 border border-slate-300'>Name</td>
            <td className='p-8 border border-slate-300'>facultyName</td>
          </tr>
          <tr>
            <td className='p-8 border border-slate-300 '>Department</td>
            <td className='p-8 border border-slate-300 '>department</td>
          </tr>
          <tr>
            <td className='p-8 border border-slate-300 '>Institute</td>
            <td className='p-8 border border-slate-300 '>institute</td>
          </tr>
          <tr>
            <td className='p-8 border border-slate-300 '>branch</td>
            <td className='p-8 border border-slate-300 '>branch</td>
          </tr>
          <tr>
            <td className='p-8 border border-slate-300 '>course</td>
            <td className='p-8 border border-slate-300 '>course</td>
          </tr>
        
          <tr>
            <td className='p-8 border border-slate-300 '>Semester</td>
            <td className='p-8 border border-slate-300 '>semester</td>
          </tr>
     
        </tbody>
    </table>
   </div>
)}
    </>
  )
}

export default AddStudents