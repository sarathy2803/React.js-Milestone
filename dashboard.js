import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Dashboard(){
    var {id}=useParams()
    const[first_name,setfirst_name]=useState('')
    useEffect(()=>{
        fetch("http://localhost:6383/getsingle/"+id)
        .then(res=>res.json())
        .then((output)=>{
            setfirst_name(output[0].first_name)
        })
    })
    return(
        <>
        <h1>Welcomes You, {first_name}</h1>
        <Link to={`/formlogin/${id}`}><button className="btn btn-warning text-dark fw-bold" type="submit">Update Profile</button> </Link>
        </>
    );
   
}