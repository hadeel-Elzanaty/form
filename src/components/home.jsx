import { Link } from "react-router-dom";

import Navbar from "./navbar";

const Home = () => {
    return (
       <>
       <Navbar/>
 <main className="text-bg-dark text-center p-5">
         
         <h1>Welcom To Admin Home Page</h1>
         <div className="text-center m-auto mt-5">
             <Link to="/signup">
                 <button type="button" className="btn btn-primary me-5">sign up</button>
             </Link>
             <Link to="/login">
                 <button type="button" className="btn btn-primary ">log in</button>
                 <button type="button" className="btn btn-primary ">log in2</button>
             </Link>
         </div>
     </main>
       </>
    );
}

export default Home;