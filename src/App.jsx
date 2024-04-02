import { useState } from 'react'
import './App.css'
import LeftMenu from './component/leftMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    <LeftMenu/>
    </>
  )
}

export default App
