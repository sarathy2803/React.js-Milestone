import axios from "axios";
import React from "react";
export function Loginpage(){
    function handlelogin(event){
        event.preventDefault()
        var username=document.getElementById("username").value
        var password=document.getElementById("password").value
        var key={
            username:username,
            password:password
        }
        if(username==''){
            alert("Enter the username")
        }
        else if(password==''){
            alert("Enter the password")
        }
        else{
            axios.post("http://localhost:6383/tologinpage",key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("Enter the username or register a new one")
                }
                else if(res.data.status==="success"){
                    var id=res.data.id
                    alert("successful login")
                    window.location.href=`/dashboard/${id}`
                }
                else if(res.data.status="error"){
                    alert("all the data are invalid")
                } 
                else{
                    alert("please register your details first")
                }
            })
        }
    }
    return(
        <>
        <form className="text-center"onSubmit={handlelogin}>
            <h1>Login</h1>
            <tr>
            <label>username :</label>
            <input type="text" id="username" name="username" placeholder="Enter your Username"></input>
            </tr>
            <tr>
            <label>password :</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password"></input>
            </tr>
            <button type="submit" className="btn btn-secondary mt-2 position-absolute start-0">Login</button>
            
        </form>
        </>
    );
}