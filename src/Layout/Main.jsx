import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import Particle from "../Component/Particle";


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