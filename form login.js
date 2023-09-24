import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Loginform(){
        // var { id } = useParams()
        // const [first_name, setFirst_name] =useState('')
        // const [last_name, setLast_name] =useState('')
        // const [phone_number,setPhone_number] =useState('')
        // const [city,setCity] =useState('')
        // const [state, setState] =useState('')
        // const [email, setEmail] =useState('')
        // const [password, setPassword] =useState('')
    
        // useEffect(() => {
        //     fetch('http://localhost:6383/getsingle/'+id)
        //         .then(res => res.json())
        //         .then((data) => {
        //             setFirst_name(data[0].first_name)
        //             setLast_name(data[0].last_name)
        //             setPhone_number(data[0].phone_number)
        //             setCity(data[0].city)
        //             setState(data[0].state)
        //             setEmail(data[0].email)
        //             setPassword(data[0].password)
        //         })
        // },[])
        function handlesubmit(event){
            event.preventDefault()
        var first_name=document.getElementById("fname").value
        var last_name=document.getElementById("lname").value
        var phone_number=document.getElementById("phone").value
        var key={
            first_name:first_name,
            last_name:last_name,
            phone_number:phone_number
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
        else{
            axios.put("http://localhost:6383/updatevalues/"+id,key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("data are not updated")
                }
                else if(res.data.status==="success"){
                    alert("data are updated")
                }

            })
        }
        }
    return(
        <>
        <div className="bg-dark">
        <h1 className="text-light">Register Form</h1>
            <form onSubmit={handlesubmit}>
                <table className="text-center text-light">
        <tr>
        <td><label>First Name</label></td>
        <td><input type="text" onChange={(set)=>setFirst_name(set.target.value)}  id="fname" required value={first_name}></input></td>
        </tr>
        <tr>
        <td><label>Last Name</label></td>
        <td><input type="text"  onChange={(set)=>setLast_name(set.target.value)} id="lname"  required value={last_name}></input></td>
        </tr>
        <tr>
        <td><label>Phone Number</label></td>
        <td><input type="tel" onChange={(set)=>setPhone_number(set.target.value)}   id="phone" value={phone_number}></input></td>
        </tr>
        <tr>
        <td><label>Email</label></td>
        <td><input type="email" id="email"  required value={email}></input></td>
        </tr>
        <tr>
        <td><label>City</label></td>
        <td><input type="text"  id="city" value={city}></input></td>
        </tr>
        <tr>
        <td><label>State</label></td>
        <td><input type="text"  id="state" value={state}></input></td>
        </tr>
        <tr>
        <td><label>Password</label></td>
        <td><input type="password" id="password" value={password}></input></td>
        </tr>
        <tr><td><button type="submit" className="text-center btn btn-primary">Submit</button></td></tr>
                </table>
            </form>
        </div>
        </>
    );
}