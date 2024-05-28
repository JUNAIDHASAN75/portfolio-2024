import { Fade } from "react-awesome-reveal";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="">
            <Fade>

            <footer className="footer footer-center p-10 bg-[#10022c] text-base-content rounded ">
                <div className="grid grid-flow-col gap-4">
                    <a href="#about" className="font-semibold text-white  link link-hover">About Me</a>
                    <a href="#" className="font-semibold text-white  link link-hover">Contact</a>
                    <a href="#skils" className="font-semibold text-white  link link-hover">Slills</a>
                    <a href="#" className="font-semibold text-white  link link-hover">Projects</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <p className="text-4xl flex gap-3 text-white">
                            <a href="https://web.facebook.com/profile.php?id=100009322376580" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-blue-800 bg-white border-blue-800 rounded-full"></FaFacebook></a>
                            <a href="https://www.linkedin.com/in/junaid-hasan-7a05b117b/"  target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-sky-600 bg-white  "></FaLinkedin></a>
                            <a href="https://github.com/JUNAIDHASAN75"  target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
                        
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-slate-500">Copyright © 2023 - All right reserved</p>
                </div>
            </footer>
            </Fade>
        </div>
    );
};

export default Footer;