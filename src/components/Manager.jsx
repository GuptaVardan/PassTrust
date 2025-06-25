import React from 'react'

const Manager = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto max-w-4xl bg-slate-50 my-10">
        <div className= "flex flex-col p-4">
          <h1 className='text-4xl text-center font-bold'>&lt;PassTrust/&gt;</h1>
          <p className='text-xl text-center'>Your Personal Password Manager</p>
          <input type="text" name="" id="" className='border-2 rounded-xl border-black w-full mx-auto my-5 p-1 text-black bg-white'/> 
          <div className="flex justify-between gap-5">
            <input type="text" name="" id="" className='border-2 rounded-xl border-black w-full my-2 mx-auto p-1 text-black bg-white'/>
            <input type="text" name="" id="" className='border-2 rounded-xl border-black w-full my-2 mx-auto p-1 text-black bg-white'/>
          </div>
          <button className='border-2 rounded-xl border-green-500 my-2 mx-auto p-1 text-white bg-green-500 hover:font-bold hover:cursor-pointer w-1/2' >Add Password</button>
        </div>
      </div>
    </>
  )
}

export default Manager
