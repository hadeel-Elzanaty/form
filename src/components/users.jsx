import { Container,Row,Col,Button,Table } from "react-bootstrap";
import {FiEdit} from "react-icons/fi"
import Formm from "./form"
import {MdDelete}from "react-icons/md"
import {FaRegEye}from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import { toast } from "react-toastify";


import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
const Users = () => {

  const navigate=useNavigate()
  const[type,setType]=useState("Save")
  const [userName, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  let intialData=[]
  let [data,setData]=useState(intialData);
  const[showform,setShowform]=useState(false);
  const [singleUser , setSingleUser] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const getData=()=>{
  axios.get("http://localhost:8000/users/")
  .then(res=>{
    setData(res.data)
    
  })
  .catch(err=>toast.error(err.message))
  }  
  useEffect(()=>{
    getData()
    

  },[showform])
  const handlesubmit = (e)=>{
    e.preventDefault()
   
   if(type==="Save"){
    const userData={ userName ,email ,country}
    setUsername("")
    setCountry("")
    setEmail("")
    setShowform(false) 
    axios.post("http://localhost:8000/users/",userData)
    .then(res=>{
     
      toast.success("user added")
    })
    .catch(err=>toast.error(err.message))
   }   
  else{
    const userData={ userName ,email ,country}
    axios.put(`http://localhost:8000/users/${singleUser.id}`,userData)
    .then(res=>toast.success("user edited"))
    
    .catch(err=>toast.error(err.message))
    
        setShowform(false) 
        setType("Save")

  }}
  
  let handADD=()=>{
    setShowform(!showform)
  
  }
  let handEdit=(item)=>{

setShowform(true)
setUsername(item.userName)
    setCountry(item.country)
    setEmail(item.email)
    setType("Edit")
    setSingleUser(item)
  
  }
  let handDelete=(id)=>{
   let handUserdetails=()=>{

   }
    
      axios.delete(`http://localhost:8000/users/${id}`)
      .then(res=>{
        toast("deleted")
    getData()})
      .catch(err=>toast.error(err.message))
    

    }
    
    


  
  
  
    return (
<Container fluid className=" vh-100">

<Row>
    <Col lg="3" md="6" className="bg-secondary vh-100  text-center " >
      <h6 className="text-white-50 mt-3  ">Admin Dashboard</h6>
      <hr className="text-white pe-none"/>  
      <Button onClick={()=>handADD()} variant="danger">Add User</Button>
     {showform&&<Formm show={showform} setShow={setShowform} 
     userName={userName} setUsername={setUsername}
     email={email}setEmail={setEmail}
     country={country}setCountry={setCountry}
     handlesubmit={handlesubmit}
     type={type}
     
     
     
     />}
    </Col>
    <Col lg="9"md="6" className=" vh-100" >

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>UserDetails</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((user,index)=>(  
           
          <tr key={index}>
            <td>{index+1}</td>
          <td>{user.userName}</td>
          <td>{user.email}</td>
          <td>{user.country}</td>
          <td onClick={()=>{handEdit(user)}} className="text-success "role="button" ><FiEdit/></td>
          <td onClick={()=>{handleShow()}}className="text-danger"role="button" ><MdDelete/></td>
          <td role="button" ><Link to={user.id} onClick={()=>{
            navigate(`/users/${user.id}`)
          }} className="text-dark text-center" ><FaRegEye/></Link></td>
         
          <Modal show={show} onHide={handleClose}>
           
      
      <Modal.Body >Are you sure to delete user data</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}> No </Button>
        <Button variant="primary" onClick={ ()=>{
          handleClose()
          handDelete(user.id)
      
          
          }  }>  Yes</Button>
      </Modal.Footer>
    </Modal>
      </tr>
        ))

       }
      </tbody>
      </Table>
    </Col>
</Row>
</Container>

      );
}
 
export default Users;