import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Productss(){
    const[fetchData,setFetchdata]=useState([])
    var{id}=useParams()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+id)
        .then(response=>response.json())
        .then(data=>setFetchdata(data))
    })
    const dataas=[fetchData]
    return(
        <>
        <h2 className="text-center">Details</h2>
       <div className="row">
       <div className="col-lg-3">
            <img src={fetchData.image} className="container-fluid"></img>
        </div>
        <div className="col-lg-9">
        <h1>{fetchData.title}</h1>
        <p>{fetchData.price}</p>
        <p>{fetchData.description}</p>
        <p>{fetchData.category}</p>
        </div>
       </div>
        </>
    );
}