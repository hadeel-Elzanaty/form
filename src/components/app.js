import Home from "./home";
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import SignUp from "./signup";
import Login from "./login";
import NotFound from "./notfound";
import Users from "./users";
import { ToastContainer } from 'react-toastify';
import Formm  from "./form";
import SingleUserPage from "./singleuserpage";
import { useState } from "react";
const App = () => {
    const[user,setUser]=useState(false)
    return ( 
        <>
       
        <Router>

       
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login setUser ={setUser} user={user}/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/users/:id" element={<SingleUserPage/>}/>
                <Route path="/form" element={<Formm/>}/>
                <Route path="*" element={<NotFound/>}/>
                
            </Routes>
        </Router>

        <ToastContainer/>
        </>
        
     );
}
 
export default App;