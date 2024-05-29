import { MdContactMail } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SinglePage = () => {
    return (
        <div className="z-50">
            <div className='list-none text-[#d87dff]   menu menu-sm dropdown-content'>

                <li className='my-2 text-slate-900 font-semibold text-xl hover:text-[black] hover:border-b-2  mx-3  tracking-wide' >
                    <a href="#skils" className="flex flex-col border-b-4"><span className="text-3xl"><GiSkills></GiSkills></span><p>Skills</p></a></li>
                <li className='my-2 text-slate-900 font-semibold text-xl hover:text-[black] hover:border-b-2  mx-3  tracking-wide' >
                    <a href="#about" className="flex flex-col border-b-4"><span className="text-3xl"><BsFillPersonLinesFill /></span><p>About Me</p></a></li>

                <li className='my-2 text-slate-900 font-semibold text-xl hover:text-[black] hover:border-b-2  mx-3  tracking-wide' >
                    <a href="#services" className="flex flex-col border-b-4"><span className="text-3xl"><MdOutlineSettings /></span><p>Services</p></a></li>
                <li className='my-2 text-slate-900 font-semibold text-xl hover:text-[black] hover:border-b-2  mx-3  tracking-wide' >
                    <a href="#project" className="flex flex-col border-b-4"><span className="text-3xl"><GrProjects></GrProjects></span><p>Projects</p></a></li>
                <li className='my-2 text-slate-900 font-semibold text-xl hover:text-[black] hover:border-b-2  mx-3  tracking-wide' >
                    <a href="#contact" className="flex flex-col border-b-4"><span className="text-3xl"><MdContactMail></MdContactMail></span><p>Contact Me</p></a></li>
            </div>
        </div>
    );
};

export default SinglePage;