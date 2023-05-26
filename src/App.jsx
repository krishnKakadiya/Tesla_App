import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
    <Header/>
    <Home />
  </div>
    </>
  )
}

export default App
