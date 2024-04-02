import React from 'react';
import "../Style/Login.css"
const Login = () => {
    return (
        <>
        <div className='login_main_div'>
        <div className='login_main_cont'>
            <div className="login_form_div">
                <div className="login_form_cont">
                    <div className="login_form_title">Log in Your Account </div>
                    <form className="login_form">
                        <div className="login_form_input">
                            <input type="text" className="login_form_input_text" placeholder="Username" />
                        </div>
                        <div className="login_form_input">
                            <input type="password" className="login_form_input_text" placeholder="Password" />
                        </div>
                        <div className="login_form_button">
                            <button className="login_form_button_text"><h2>Login</h2></button>
                        </div>
                    </form>
                    <div className='opForLogin'>
                            <button className="login_Op"><h2>Department</h2></button>
                            <button className="login_Op"><h2>Admin</h2></button>
                    </div>
                </div>
               
            </div>
            <div className="login_sub_div"></div>
        </div>
        
       
        </div>
        </>
    );
}

export default Login;
