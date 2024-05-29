import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import Particle from "../Component/Particle";
// import Navbar from "../Home/Navbar/Navbar"


const Main = () => {
   

    
    return (
        <div>
            <Particle/>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;