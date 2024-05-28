import { Slide } from "react-awesome-reveal";
import SectionTitle from "../../Hook/SectionTitle";
import about from '../../assets/images/banner/Untitled design.png'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
    return (

        <div id="about" className="my-12 px-8 shadow-lg py-12">
            <SectionTitle heading={'About Me'} subHeading={'I AM A PASSIONATE WEB DEVELOPER'}></SectionTitle>
            <div className="md:flex items-center gap-12">
                <div className="w-full">
                    <Slide direction="up">

                        <div className="w-full">
                           
                            

                            <img className="w-full mx-auto border-[12px] border-slate-400 rounded-lg relative" src={about} alt="" />
                          
                            <div className="text-3xl flex-row gap-4 absolute top-4 left-2  pl-2">
                                <a href="https://web.facebook.com/profile.php?id=100009322376580" target="_blank" rel="noopener noreferrer" className="bg-slate-400 text-blue-500" ><FaFacebook></FaFacebook></a>
                                <a href="https://www.linkedin.com/in/junaid-hasan-7a05b117b/" target="_blank" rel="noopener noreferrer" className="bg-slate-400  text-blue-700" ><FaLinkedin></FaLinkedin></a>
                                <a href="https://github.com/JUNAIDHASAN75" target="_blank" rel="noopener noreferrer" className="bg-slate-400 text-black"><FaGithub></FaGithub></a>

                            </div>
                        </div>
                    </Slide>
                </div>
                <div className="w-full">
                    <SectionTitle heading={'I`M Junaid Hasan'} subHeading={'I AM A PASSIONATE WEB DEVELOPER'}></SectionTitle>
                    <div>
                        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
                    </div>
                    <div className="flex gap-12 justify-around items-center mt-12">
                        <div>
                            <Slide>

                                <div className="flex w-full">
                                    <div className="grid  flex-grow card  rounded-box place-items-center w-3/4 mr-5"><h2 className="font-semibold">Phone</h2></div>
                                    <div className="divider divider-horizontal mr-11"></div>
                                    <div className="grid  flex-grow card rounded-box place-items-center w-3/4">+880172270375</div>
                                </div>
                                <div className="flex w-full mt-2">
                                    <div className="grid  flex-grow card  rounded-box place-items-center w-full"><h2 className="font-semibold">Email</h2></div>
                                    <div className="divider divider-horizontal"></div>
                                    <div className="grid  flex-grow card rounded-box place-items-center w-full"><small>junaidullash@gmail.com</small></div>
                                </div>
                            </Slide>

                        </div>
                        <div>
                            <Slide direction="right">

                                <div className="flex w-full my-2">
                                    <div className="grid  flex-grow card  rounded-box place-items-center w-full"><h2 className="font-semibold">Residence</h2></div>
                                    <div className="divider divider-horizontal"></div>
                                    <div className="grid  flex-grow card rounded-box place-items-center w-full">Bangladesh</div>
                                </div>
                                <div className="flex w-full">
                                    <div className="grid  flex-grow card  rounded-box place-items-center w-full"><h2 className="font-semibold ">Address</h2></div>
                                    <div className="divider divider-horizontal"></div>
                                    <div className="grid  flex-grow card rounded-box place-items-center w-full">Dhaka</div>
                                </div>
                            </Slide>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;