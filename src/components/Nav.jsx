import React from 'react'

const Nav = () => (
  <nav className="bg-purple-200">
    <div className="container mx-auto flex justify-between items-center px-4">
      <div className="logo font-bold text-xl">
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
