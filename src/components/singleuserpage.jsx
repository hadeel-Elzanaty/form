
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card,Button } from "react-bootstrap";

const SingleUserPage = () => {
    const [userData,setUserdata]=useState({})
    const{id}=useParams()
useEffect(()=>{
    axios.get(`http://localhost:8000/users/${id}`)
    .then(res=>{
        let data=res.data
        
    console.log(data)
       setUserdata(data)})
    .catch(err=>console.log(err.message))},[])
    return ( 
        <Card>
      <Card.Header>
        <h1 className="text-info">
      User Details
      </h1></Card.Header>
      <Card.Body>
        <Card.Title>user No. {id}</Card.Title>
        <Card.Text>
        <h4 >User Name : <span className="">{userData.userName}</span></h4>
        <h4>User Email : <span>{userData.email}</span></h4>
        <h4>User Country : <span>{userData.country}</span></h4>
        </Card.Text>
        <Button variant="info"><Link className="btn text-white " to="/users" >Go Back</Link></Button>
      </Card.Body>
    </Card>
     );
}
 
export default SingleUserPage;