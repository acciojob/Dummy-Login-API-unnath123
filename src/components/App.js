import React, { useState } from 'react'
import style from '../styles/App.css'
let userData = [ { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" }, { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" }, { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456"}]

const App = () => {
    const [user, setUser] = useState({email:"", password:""})
    // const [userFound, setUserFound] = useState(false)
    let {email, password} = user;

    function handleInput(e){
        // setUser((user)=>({...user,[e.target.name]:e.target.value}))
        setUser({...user,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        let userFound = false;
        e.preventDefault()

        userData.forEach((ele)=>{
            if(ele.email=== user.email){
                if(ele.password === user.password){
                    userFound  = true
                    setTimeout(() => {
                        console.log(ele)
                    }, 3000);
                    //alert("User logged in successfully")
                    setUser({email:"", password:""})
                  
                }
                else{
                    userFound = true
                    setTimeout(() => {
                        console.log("password did not match")
                    }, 3000);
                    //alert("Password did not match")
                    setUser({...user, password:""})
                }
            }
        })

        if(!userFound){
            //alert("user not found")
            setTimeout(() => {
                console.log("user not found")
            }, 3000);
        }
    }   

  return (
    <div>
        <h1>Login form</h1>
        <form>
            <input type='text' placeholder='email' name="email" value={email} onChange={handleInput} id="input-email"/>
            <input type='text' placeholder='password' name="password" value={password} onChange={handleInput} id="input-password"/>
            <button onClick={handleSubmit} id="submit-form-btn">submit</button>
        </form>
    </div>
  )
}

export default App