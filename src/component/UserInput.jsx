import React from 'react'
import '../Style/userInput.css'
function UserInput() {
  return (
    <>
    <form action="#" method="post" className='form'>
    <h1 className="main-heading">User profile</h1>
      <div className="imgcontainer">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.4smTCnYgQDiE9CjcvG6AFQHaIA&pid=Api&P=0&h=180"
          alt="Avatar"
          className="avatar"
        />
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required=""
        />

        <input
          type="password"
          placeholder="Enter Bakal number"
          name="psw"
          required=""
        />
        
        
        
        <input
          type="password"
          placeholder="Contact number"
          name="psw"
          required=""
        />
        <input type="password" placeholder="Address" name="psw" required="" />
        <button type="submit" className='Button'>Create my account</button>
        <div>
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
          Remember me
        </label>
        </div>

      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="button" className="cancelbtn">
          Cancel
        </button>
        <span className="psw">
          {" "}
          <a href="#">Reset all</a>
        </span>
      </div>
    </form>
  </>
  
  )
}

export default UserInput