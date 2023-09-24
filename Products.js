import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
export function Products(){
    const[fetchData,setFetchdata]=useState([])
    useEffect(()=>{
        fetch("http://localhost:6383/getdata")
        .then(response=>response.json())
        .then(data=>setFetchdata(data))
    },[]);

    // const csvdata=fetchData.map((Products)=>({      
    //     id:Products.id,
    //     image:Products.image,
    //     category:Products.title,
    //     description:Products.description,
    //     rating:Products.rating.rate,
    //     price:Products.price,
    // }));
    return(
        
    <div className="container mt-5">
                {/* <CSVLink data={csvdata} filename="products.csv" className="btn btn-warning btn-sm fw-bold text-dark">Download csv</CSVLink> */}
        <h1 className="text-center">Product</h1>
        <table className="table table-striped mt-2">
      <thead><tr>
      <th>ID</th>
      <th>Image</th>
      <th>Category</th>
      <th>Title</th>
      <th>Description</th>
      <th>Rating</th>
      <th>Price</th>
      <th>Quantity</th>
     </tr>
     </thead>
     <tbody>
    {/* {fetchData.map((Products)=>(
    <tr key={Products.id}>
     <td>{Products.id}</td>
     <td><img src={Products.image} className="image"/></td>
     <td>{Products.category}</td>
     <td className="text-info">{Products.title}</td>
     <td>{Products.description}</td>
     <td width="100px">
     <StarRatings 
     rating={Products.rating.rate}
     starDimension="15px"
     starSpacing="1px"  
     starRatedColor="gold"/></td>
     <td>{Products.price}</td>
     <td><button className="btn btn-warning" onClick={()=> (setsubtraction,subtraction-1)}>-</button></td>
     <td><button  className="btn btn-success" onClick={()=> (setaddition,addition+1)}>+</button></td>
     <td><Link to={`/productsdetails/${Products.id}`}><button className="btn btn-warning fw-bold rounded">View..</button></Link></td>
     </tr>
    Products.sname */}
 {/* ))} */}
  </tbody>
  </table>
</div>
)
}