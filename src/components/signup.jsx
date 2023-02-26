

import { useEffect, useState } from "react";

import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { useForm } from "react-hook-form";
import { Form, Card ,Container} from "react-bootstrap";
import * as YUP from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
    const navigate = useNavigate()
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [gender, setGender] = useState("")








    const onSubmit = (data) => {
console.log(data);

       
        if (data) {
            const response = axios.post("http://localhost:8000/admins", data)
                .then(res => {
                    toast.success("you sign up successfully")
console.log(data.userName);
                    navigate("/login")
                
                })
                .catch(err => toast.error(err.message))

        } else {
            return false
        }
    }




    let userSchema = YUP.object({
        name: YUP.string(),
        email: YUP.string().email("not valid").required("required"),
        password: YUP.string().required("required").min(6, "not less than 6 chars").max(12, "not more than 12 chars."),
        phone: YUP.string().required("required"),
        
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema)
    });
    console.log(errors);


    return (

        <Container>
            <Navbar />
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Card className="">
                    <div className="card-header text-center" >
                        <h2 >
                            Rigester Form
                        </h2>
                    </div>

                    <input className="w-75 mb-3 m-auto p-2  " 
                      onChange={e => setUsername(e.target.value)}
                      
                    placeholder="User Name" {...register("userName")} />
                    {errors.name && <span className="text-danger  mb-2 w-75 m-auto">{errors.name.message}</span>}

                    <input className="w-75 mb-3 m-auto p-2 " 
                     onChange={e => setEmail(e.target.value)}
                    
                    {...register("email", { required: true })} placeholder="Email" />
                    {errors.email && <span className="text-danger  mb-2 w-75 m-auto">{errors.email.message}</span>}
                    <input
                    type="password"
                    className="w-75 mb-3 m-auto p-2" 
                      onChange={e => setPassword(e.target.value)}
                      
                    placeholder="Password" {...register("password")} />
                    {errors.password && <span className="text-danger  mb-2 w-75 m-auto">{errors.password.message}</span>}

                    <input className="w-75 mb-3  m-auto p-2"
                      onChange={e => setPhone(e.target.value)}
                      
                    placeholder="Phone" {...register("phone")} />
                    {errors.phone && <span className="text-danger  mb-2 w-75 m-auto">{errors.phone.message}</span>}

                    <div className="form-group w-75 mb-3  m-auto p-2 ">
                        <label htmlFor="country">Country
                            <span className="text-danger mt-2">*</span></label>
                        <select value={country} onChange={e => setCountry(e.target.value)}
                            name="country" className="form-control"  >
                            <option value="" >select your country</option>
                            <option value="Egypt" >Egypt</option>
                            <option value="England" >England</option>
                            <option value="Emurate" >Emurate</option>

                        </select>
                    </div>

                    <div className="form-group w-75 mb-3  m-auto p-2">
                        <label htmlFor="gender">Gender :
                            <span className="text-danger me-2"> * </span> </label>

                        <input
                            required
                            onChange={e => setGender(e.target.value)}
                            type="radio"
                            value="male"
                            className="form-check-input me-2"
                            name="gender" />
                        <label htmlFor="male"
                            className="me-2">Male  </label>
                        <input
                            onChange={e => setGender(e.target.value)}
                            type="radio"
                            value="female"
                            className="form-check-input me-2"
                            name="gender" />
                        <label htmlFor="female">Female  </label>

                    </div>

                    <input className="w-25 m-auto  mb-3  p-2 " type="submit" />

                </Card>
            </Form>
        </Container>
    );
}

export default SignUp;