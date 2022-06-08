import React from 'react'
import "./Auth.css"
import logo from "../../img/logo.png"

function Auth() {
  return (
    <div className="auth">
        <div className="aleft">
            <img src={logo} alt="" />
            <div className="webname">
                <h1>Masai Talks</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
            
        </div>
        {/* <Signup/> */}
        <Signin/>
    </div>
  )
}


function Signin(){
    return (
        <div className="aright">
            <form  className="infoform authform">
                <h3>Login</h3>
                

                <div>
                <input type="text"
                    placeholder="User Name"
                    className="infoinput"
                    name="username" />
                </div>
                <div>
                <input type="text"
                    placeholder="Password"
                    className="infoinput"
                    name="password" />
                    
                </div>
                <div>
                    <span
                    style={{fontSize:"12px",}}>
                        Dont have an account...Signup!</span>

                </div>
                <button className="button info-button" type="submit">Login</button>
            </form>
        </div>
    )
}

function Signup(){
    return (
        <div className="aright">
            <form  className="infoform authform">
                <h3>Sign UP</h3>
                <div>
                    <input type="text"
                    placeholder="First Name"
                    className="infoinput"
                    name="firstname" />
                    <input type="text"
                    placeholder="Last Name"
                    className="infoinput"
                    name="lastname" />
                </div>

                <div>
                <input type="text"
                    placeholder="User Name"
                    className="infoinput"
                    name="username" />
                </div>
                <div>
                <input type="text"
                    placeholder="Password"
                    className="infoinput"
                    name="password" />
                    <input type="text"
                    placeholder="CONF Password"
                    className="infoinput"
                    name="confpassword" />
                </div>
                <div>
                    <span
                    style={{fontSize:"12px",}}>Already have an account...Login!</span>

                </div>
                <button className="button info-button" type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Auth