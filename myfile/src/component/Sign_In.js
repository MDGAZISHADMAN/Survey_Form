import React, { useState } from "react";
import "./Sign_In.css";
import { NavLink } from "react-router-dom";
const Sign_In=() =>{
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const collectData=()=>{
  console.log(email,password);
 }
  return (
    <>
      <div className="signinContainer">
        <div className="signinMain">
          <h1 className="signcontent">
            <pre className="pre1">Welcome Page</pre>
            <pre className="pre2">One line text</pre>
            <pre className="pre3">Will Be Here </pre>
          </h1>
          <p className="dot1">Sign in continue access pages</p>
          <p className="dont">Don't Have An Account ?</p>
          <NavLink to="/Register">
          <button className="resbtn">Register</button>
          </NavLink>
        </div>
        <div className="signIn">
          <h1 className="fh1">Sign In</h1>
          <p className="signp">Sign in continue access pages</p>

          <input type="text" 
          className="inputBox"
          value={email}
            onChange={(e)=>setEmail(e.target.value)}
           placeholder="Enter email" />
          <br />

          <input
            type="password"
            className="inputBox" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <br />
          <button  onClick={collectData} className="btnsignin" type="button">
            Sign In
          </button>
          <br />
        </div>
      </div>
    </>
  );
}

export default Sign_In;
