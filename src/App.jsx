import { useState } from 'react'
import './App.css'
<<<<<<< HEAD
import Login from './component/Login'
// import LeftMenu from './component/leftMenu'
import MenuUser from './component/MenuUser'
import Duty from './component/duty'
=======
import UserInput from './component/UserInput'
import LeftMenu from './component/leftMenu'
>>>>>>> 60bee9a0af39953184b714c5f4df8de000f4e6cf

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
<<<<<<< HEAD
    {/* <LeftMenu/> */}
    <div className='mainBox'>
    <MenuUser/>
    <Duty/>
=======
    <div className='dashboard_admin'>

    <LeftMenu/>
    {/* <Admin_main_box/> */}
    <UserInput/>
>>>>>>> 60bee9a0af39953184b714c5f4df8de000f4e6cf
    </div>
    </>
  )
}

export default App
