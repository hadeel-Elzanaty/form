import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    return (
        
        <ul style={{listStyle:"none"}} className="navbar navbar-expand navbar-light bg-light  m-auto    ">
            <li className="nav-item" >
                    <NavLink className=" nav-link navbar-brand" to="/" >Home</NavLink>
                </li >
                <li className="nav-item">
                    <NavLink className=" nav-link navbar-brand" to="/signup">sign up</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/login">login</NavLink>
                </li>
            </ul>
            
            
        
    );
}

export default Navbar;