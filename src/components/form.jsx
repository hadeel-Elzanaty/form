
import { Container,Row,Button,Form } from "react-bootstrap";
import { useState } from "react";
import {AiOutlineUserAdd} from "react-icons/ai"
import {FiEdit} from "react-icons/fi"


const Formm = ({show,type,setShow,setUsername,userName,email,setEmail,country,setCountry,handlesubmit}) => {
 



   

    return (  
<Container fluid className=" w-100 vh-100  position-fixed top-0 start-0 d-flex "style={{background:"rgba(0,0,0,0.8)"}}>
    <Row className="vh-50 w-50 bg-info text-center outline-light p-4 m-auto rounded position-relative" >
        <Button  onClick={()=>setShow(false)} className="w-auto bg-transparent rounded-circle border-0 position-absolute top-0 end-0">x</Button>
        
        <h4 className="mb-3 text-white fs-2">  
        {type==="Edit"? <FiEdit/>: <AiOutlineUserAdd/> } </h4>
      <Form onSubmit={handlesubmit} >
      <div className="form-group  ">
            <input  onChange={e=>setUsername(e.target.value)} value = {userName}type="text" className="form-control mb-3" placeholder="first name"/>
        </div>
    
        
        <div className="form-group  ">
            <input  onChange={e=>setEmail(e.target.value)} value = {email} type="email" className="form-control mb-3" placeholder="email"/>
        </div>

        
        <div className="form-group ">
           <select  onChange={(e)=>setCountry(e.target.value)} value = {country} className="form-control mb-3" name="" id="">
            <option value="">choose country</option>
            <option value="german">German</option>
            <option value="egypt">Egypt</option>
            <option value="engeland">England</option>
           </select>
        </div>
        
        <div className="form-group ">
            <input type="submit" className="form-control text-info fs-4 bg-white-50" 
          value= {type}
           />
        </div>
        
      </Form>
    </Row>
</Container>
    );
}
 
export default Formm;