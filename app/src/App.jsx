import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Weather } from './Component/Weather'
import { Route, Routes } from 'react-router'
import { Pagenotfound } from './Component/Pagenotfound'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
    <Route path='/'element={<Weather/>}/>
    <Route path='*'element={<Pagenotfound/>}/>
   </Routes>
  )
}

export default App
