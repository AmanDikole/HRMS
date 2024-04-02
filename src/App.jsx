import { useState } from 'react'
import './App.css'
import Admin_main_box from './component/Admin_main_box'
import LeftMenu from './component/leftMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    <div className='dashboard_admin'>

    <LeftMenu/>
    <Admin_main_box/>
    <signUp/>    
    </div>
    </>
  )
}

export default App
