import { useState } from 'react'
import './App.css'
import UserInput from './component/UserInput'
import LeftMenu from './component/leftMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    <div className='dashboard_admin'>

    <LeftMenu/>
    {/* <Admin_main_box/> */}
    <UserInput/>
    </div>
    </>
  )
}

export default App
