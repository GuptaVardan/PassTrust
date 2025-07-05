import React from 'react'

const Nav = () => (
  <nav className="bg-green-400">
    <div className="container mx-auto flex justify-between items-center sm:px-10 md:px-20">
      <div className="font-bold text-2xl m-2 p-2 bg-black rounded-2xl border-2 border-white">
        <span className="text-green-400">&lt;</span>
        <span className="text-white">Pass</span>
        <span className="text-green-400">Trust/&gt;</span>
      </div>
      <button className="bg-white m-2 text-white flex flex-col justify-center items-center px-3 py-1 rounded-3xl hover:cursor-pointer border-2 border-black" onClick={() => window.open('https://github.com/GuptaVardan/PassTrust', '_blank')}>
        <img src="icons/github.svg" alt="GitHub" className="w-6 h-6" />
        <span className="text-black">Github</span>
      </button>
    </div>
  </nav>
)

export default Nav
