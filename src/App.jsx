import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
// import LeftMenu from './component/leftMenu'
import MenuUser from './component/MenuUser'
import Duty from './component/duty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    {/* <LeftMenu/> */}
    <div className='mainBox'>
    <MenuUser/>
    <Duty/>
    </div>
    </>
  )
}

export default App
