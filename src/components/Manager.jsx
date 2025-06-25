import React from 'react'
import { useRef } from 'react'

const Manager = () => {
  const ref = useRef()
  const showPassword = () => {
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/eyecross.png"
    }
    else {
      ref.current.src = "icons/eye.png"
    }
  }
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto max-w-4xl bg-slate-50 my-10">
        <div className= "flex flex-col p-4">
          <h1 className='text-4xl text-center font-bold'>&lt;PassTrust/&gt;</h1>
          <p className='text-xl text-center'>Your Personal Password Manager</p>
          <input placeholder='Enter the website URL' type="text" name="" id="" className='border-2 rounded-xl border-black w-full mx-auto my-5 p-2 text-black bg-white'/> 
          <div className="flex justify-between gap-5">
            <input placeholder='Enter the username' type="text" name="" id="" className='border-2 rounded-xl border-black w-full my-2 mx-auto p-2 text-black bg-white'/>
            <div className="relative w-full">
              <input placeholder='Enter the password' type="text" name="" id="" className='border-2 rounded-xl border-black w-full my-2 mx-auto p-2 text-black bg-white'/>
              <span className="absolute right-0 top-0 hover:cursor-pointer" onClick={showPassword}>
                <img ref={ref} src="icons/eye.png" alt="loading.." className="py-4.5 px-2" width={40}/>
              </span>
            </div>
          </div>
          <button className='border-2 rounded-xl border-green-500 my-2 mx-auto p-2 text-white bg-green-500 hover:font-bold hover:cursor-pointer w-1/2' >Add Password</button>
        </div>
      </div>
    </>
  )
}

export default Manager
