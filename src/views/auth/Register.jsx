import React from 'react'

export default function Register() {
  return (
    <div className='min-w-screen min-h-screen bg-[#161d51] flex justify-center items-center'>
      <div className='w-[350px] text-[#d0d2d6] p-4 round-md'>
        <div className='bg-[#283046] p-4 rounded-md'>
        <h2 className='text-2xl mb-3 text-center'>Welcome to Our Shop</h2>
        <p className='text-sm mb-3 text-center'>Please join with us by Registering</p>
        
        <form action="">
          <div className='flex flex-col w-full g-1 mb-3'>
            <input autoComplete='false' className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type="text" name='name' placeholder='Name...' id='name' required />
          </div>
          <div className='flex flex-col w-full g-1 mb-3'>
            <input aria-autocomplete='false' className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type="email" name='email' placeholder='email...' id='email' required />
          </div>
          <div className='flex flex-col w-full g-1 mb-3'>
            
            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type="password" name='password' placeholder='password...' id='password' required />
          </div>
          <div className='flex items-center w-full g-3 mb-3'>
            <input className='w-4 h-4 mr-2' type="checkbox" name='checkbox' placeholder='checkbox...' id='checkbox' required />
            <label htmlFor="password">I agree with Terms & Policy</label>
          </div>
          <button className='text-white w-full bg-blue-500 rounded-md px-7 mb-3 hover:shadow-md hover:shadow-blue-500/50'>Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
}
