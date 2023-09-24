import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";


export function Getdata(){
    const[fetchinput,setfetchinput]=useState([])
    useEffect(()=>{
        fetch("http://localhost:6383/getdata")
        .then(datavalue=>datavalue.json())
        .then(extractvalue=>setfetchinput(extractvalue))
    })
    return(
        <>
         <table>
            <thead>
            <th><h1>NAME</h1></th>
            <th><h1>job</h1></th>
            </thead>
        {
        fetchinput.map((value,index)=>(
            <>
            <tbody>
                <tr>
                    <td><h1>{value.ename}</h1></td>
                    <td><h1>{value.job}</h1></td>
                    <Link to={`/getsingle/${value.empno}`}>View</Link>
                </tr>
            </tbody>
            </>
        ))
        }
        </table>
        </>
    )};