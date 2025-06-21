import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-purple-200 flex justify-between items-baseline px-4 h-18'>
        <div className="logo font-bold text-xl">PassTrust</div>
        <ul className=''>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="http://">About</a>
                <a className='hover:font-bold' href="http://">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav