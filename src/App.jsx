import { useState } from 'react'
import Styles from './App.module.css'
import Home from './Components/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={Styles['main']}>
      <Home></Home>
    </div>
  )
}

export default App
