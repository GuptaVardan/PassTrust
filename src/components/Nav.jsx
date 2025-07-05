import React from 'react'

const Nav = () => (
  <nav className="bg-green-300">
    <div className="container mx-auto flex justify-between items-center sm:px-10 md:px-20">
      <div className="font-bold text-xl p-5">
        &lt;PassTrust/&gt;
      </div>
      <button className="text-white flex flex-col justify-center items-center px-4 py-2 rounded hover:cursor-pointer" onClick={() => window.open('https://github.com/GuptaVardan/PassTrust', '_blank')}>
        <img src="icons/github.svg" alt="GitHub" className="w-10 h-10" />
        <span className="text-black">Github</span>
      </button>
    </div>
  </nav>
)

export default Nav
