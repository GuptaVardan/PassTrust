import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'
import Manager from './components/Manager'

function App() {
  return (
    <>
      <Nav/>
      <Manager/>
    </>
  )
}

export default App
