import React,{useState} from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";
const Register=() =>{
  const [name,setName]=useState("");
 const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
 const [profession,setProfession]=useState("");
  const [password,setPassword]=useState("");
 const [confirmPassword,setConfirmPassword]=useState("");

 const collectData=()=>{
  console.log(name,email,phone,profession,password,confirmPassword);
 }

  return (
    <>
      <div className="signupContainer">
        <div className="signupMain">
          <h1 className="signupcontent">
            <pre className="uppre1">Welcome Page</pre>
            <pre className="uppre2">One line text</pre>
            <pre className="uppre3">Will Be Here </pre>
          </h1>
          <p className="updot1">Sign in continue access pages</p>
          <p className="updont">Already Have An Account ?</p>
          <NavLink to="/">
          <button className="btnsignup">Sign In</button>
          </NavLink>
        </div>
        <div className="signup">
          <h1 className="rfh1">Register</h1>
          <p className="signupp">Rrgister in continue access pages</p>
          <div className="lineinp1">
            <input
              type="text"
              className="rinputBox"
              value={name}
            onChange={(e)=>setName(e.target.value)}
              placeholder="Name"
            />
           

            <input
              type="text"
              className="rinputBox"
              value={email}
            onChange={(e)=>setEmail(e.target.value)}
              placeholder=" Email"
            />
            <br />
          </div>
          <div className="lineinp1">
            <input
              type="text"
              className="rinputBox"
              value={phone}
            onChange={(e)=>setPhone(e.target.value)}
              placeholder="Phone"
            />
           

            <input
              type="text"
              className="rinputBox"
              value={profession}
            onChange={(e)=>setProfession(e.target.value)}
              placeholder="Profession"
            />
            <br />
          </div>
          <div className="lineinp1">
            <input
              type="password"
              className="rinputBox"
              value={password}
            onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
            />
           

            <input
              type="password"
              className="rinputBox"
              value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <br />
          </div>
          <div className="lineinp2" >
         < input type="checkbox" name="Term" value="Term"/>
          <span className="check1">I agree to Term & Condition receiving marketing and promotional materials</span>
          </div>
          
 
       
          <button onClick={collectData}  className="regsignupbtn" type="button">
            Register
          </button>
          
          <br />
        </div>
      </div>
    </>
  );
}
export default Register;
