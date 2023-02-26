import { useEffect, useState } from "react";
import { Container,Col ,Row,Card,Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import  Navbar  from "./navbar";
import { toast } from 'react-toastify';
import axios from "axios";

const Login = () => {
   

    const[userName,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[isloading,setIsloading]=useState(false)
    const navigate = useNavigate()

   
  
    const handSubmit = () => {
        setIsloading(true)
        let userData = { userName, password }
             axios.get("http://localhost:8000/admins", userData)
           
                .then((res) => {
                    toast.success("you sign up successfully")

                    navigate("/users")
                })
                .catch(err => toast.error(err.message))
                
                setIsloading(false)
                
               }
    return (  
        <>
         <Navbar  />
         <Container>
            
            <Card>
                <div className="card-header">
                    <h1>
                        Welcome
                    </h1>
                </div>
                <div className="card-body">
                    <Form>
                    <Row>
                        <Col lg="12">
                        <div className="form-group">
                            <label htmlFor="name">User Name</label>
                            <input type="text" placeholder="User Name"
                             value={userName}
                            onChange={e=>setUsername(e.target.value)}className="form-control" />
                        </div>
                        </Col>
                        <Col lg="12">
                        <div className="form-group">
                            <label htmlFor="password">password</label>
                            <input type="text" placeholder="Password"
                             value={password}
                            onChange={e=>setPassword(e.target.value)}className="form-control" />
                        </div>
                        </Col>
                    </Row>
                    </Form>
                </div>
                <div className="card-footer">
                <Button onClick={handSubmit} className="fs-4">Login</Button>
                </div>
            </Card>
                    </Container>
        </>
       
    );
}
 
export default Login;