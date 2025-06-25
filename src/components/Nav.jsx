import React from 'react'

const Nav = () => (
  <nav className="bg-green-300">
    <div className="container mx-auto flex justify-between items-center px-20">
      <div className="font-bold text-xl p-5">
        &lt;PassTrust/&gt;
      </div>
      <ul className="flex gap-6">
        <li><a className="hover:font-bold" href="/">Home</a></li>
        <li><a className="hover:font-bold" href="/about">About</a></li>
        <li><a className="hover:font-bold" href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
)

export default Nav
