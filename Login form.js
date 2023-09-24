import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
export function Login(){
    function handlelogin(event){
        event.preventDefault()

        var first_name=document.getElementById("fname").value
        var last_name=document.getElementById("lname").value
        var phone_number=document.getElementById("phone").value
        var email=document.getElementById("email").value
        var city=document.getElementById("city").value
        var state=document.getElementById("state").value
        var password=document.getElementById("password").value

        var key={
            first_name:first_name,
            last_name:last_name,
            phone_number:phone_number,
            email:email,
            city:city,
            state:state,
            password:password
        }
        if(first_name===''){
            alert("enter the first name")
        }
        else if(last_name===''){
            alert("enter the last name")
        }
        else if(phone_number===''){
            alert("enter the  phone")
        }
        else if(email===''){
            alert("enter the  email")
        }
        else if(city===''){
            alert("enter the  city")
        }
        else if(state===''){
            alert("enter the  state")
        }
        else if(password===''){
            alert("enter the password")
        }
        else{
            axios.post("http://localhost:6383/register",key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("data are not inserted")
                    window.location.reload()
                }
                else if(res.data.status==="success"){
                    alert("data are inserted")
                    window.location.href='/loginpage'
                }
            })
        }
    }
    return(
        <>
        <div className="bg-dark">
        <h1 className="text-light">Register Form</h1>
            <form onSubmit={handlelogin}>
                <table className="text-center text-light">
                    <tr>
                    <td><label>First Name</label></td>
                    <td><input type="text" placeholder="eg.partha" id="fname" required></input></td>
                    </tr>
                    <tr>
                    <td><label>Last Name</label></td>
                    <td><input type="text"  placeholder="eg.sarathi"  id="lname"  required></input></td>
                    </tr>
                    <tr>
                    <td><label>Phone Number</label></td>
                    <td><input type="tel"  placeholder="eg.6363636363"  id="phone" ></input></td>
                    </tr>
                    <tr>
                    <td><label>Email</label></td>
                    <td><input type="email" placeholder="eg.Johnjoe123@com"  id="email"  required></input></td>
                    </tr>
                    <tr>
                    <td><label>City</label></td>
                    <td><input type="text"  id="city" ></input></td>
                    </tr>
                    <tr>
                    <td><label>State</label></td>
                    <td><input type="text"  id="state" ></input></td>
                    </tr>
                    <tr>
                    <td><label>Password</label></td>
                    <td><input type="password" id="password" ></input></td>
                    </tr>
                    <tr><td><button type="submit" className="btn btn-secondary text-center">Submit</button></td></tr>
                    <Link to="/loginpage"><a>Already Login</a></Link>
                </table>
            </form>
        </div>
        </>
    );
}