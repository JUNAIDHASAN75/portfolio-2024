import { Slide } from "react-awesome-reveal";
import SectionTitle from "../../Hook/SectionTitle";

const Skills = () => {
    return (
        <div className="bg-zinc-100 shadow-lg"  >


            <div id="skils" className="my-20 px-8">
                <SectionTitle heading={'My Skills'} subHeading={'I am a passionate web developer'}></SectionTitle>

                <div className="md:flex justify-around">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 ">Front-End:--</h3>
                        <div className="flex flex-col gap-5">
                            <Slide direction="down">

                                <div className="flex gap-8">
                                    <div className="w-full form-control">
                                        <span className="font-semibold text-">HTML : </span>
                                        <div className="radial-progress text-orange-600" style={{ "--value": "87", "--size": "8rem", "--thickness": ".5rem" }}>87%</div>
                                    </div>
                                    <div className="divider divider-horizontal"></div>
                                    <div className="w-full form-control">
                                        <span className="font-semibold text-">CSS : </span>
                                        <div className="radial-progress text-sky-400" style={{ "--value": "85", "--size": "8rem", "--thickness": ".5rem" }}>85%</div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide direction="up">

                                <div className="flex gap-8">
                                    <div className="w-full form-control">
                                        <span className="font-semibold text-">JAVASCRIPT : </span>
                                        <div className="radial-progress text-yellow-400" style={{ "--value": "70", "--size": "8rem", "--thickness": ".5rem" }}>70%</div>
                                    </div>
                                    <div className="divider divider-horizontal "></div>
                                    <div className="w-full form-control">
                                        <span className="font-semibold text-">REACT : </span>
                                        <div className="radial-progress text-sky-600" style={{ "--value": "92", "--size": "8rem", "--thickness": ".5rem" }}>92%</div>
                                    </div>
                                </div>
                            </Slide>

                        </div>
                    </div>
                    <div className="divider divider-horizontal "></div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 ">Back-End:--</h3>
                        <Slide direction="right">

                        <div className="w-full form-control">
                            <span className="font-semibold uppercase">Mongodb : </span>
                           
                            <div className="radial-progress text-green-600 " style={{ "--value": "60", "--size": "15rem", "--thickness": ".5rem" }}>60%</div>
                        </div>
                        </Slide>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;