
import { FaHamburger } from "react-icons/fa";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactaMe/ContactMe";
import Project from "../Projects/Project";

import Services from "../Services/Services";
import SinglePage from "../SinglePage/SinglePage";
import Skills from "../Skills/Skills";
import Skeletons from "../Skeleton/Skeletons";
// import Particle from '../../Component/Particle'


const Home = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col md:w-full">
                    {/* Page content here */}
                    {/* <Particle/> */}
                    <Banner></Banner>
                    <Skills></Skills>
                    <About></About>
                    <Services></Services>
                    <Project></Project>
                    <ContactMe></ContactMe>
                    <Skeletons></Skeletons>
                    
                    
                    <label htmlFor="my-drawer-2" className="btn btn-ghost absolute top-0 drawer-button lg:hidden"><FaHamburger></FaHamburger></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className=""></label>
                    <ul className="menu z-50  h-full bg-white text-base-content ">
                        {/* Sidebar content here */}
                        <SinglePage></SinglePage>
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default Home;