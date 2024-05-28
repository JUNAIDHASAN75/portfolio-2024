import ProjectThree from "../../Component/ProjectThree";
import ProjectTow from "../../Component/ProjectTow";
import ProjefctOne from "../../Component/ProjefctOne";
import SectionTitle from "../../Hook/SectionTitle";



const Project = () => {
    return (
        <div id="project" className="my-20 px-8">

            <SectionTitle heading={'My Projects'} subHeading={'i am a passionate web developer'}></SectionTitle>
            <div>
                <div className="md:flex justify-between items-center w-[90%] gap-8">
                    <div className="w-full">
                        <h2 className="text-2xl font-semibold  mx-auto md:ml-48 my-8">Food Recipe</h2>
                        {/* Here is Project One */}
                        <div className="w-[600px] ">
                            <ProjefctOne></ProjefctOne>

                        </div>

                    </div>
                    <div className="w-full ">
                        <h3 ><span className="text-xl font-semibold ">Project Name:</span> <span> Food Recipe</span></h3>
                        <h3 ><span className="text-xl font-semibold ">Project Details:</span></h3>
                        <p className="space-y-3">It is a chef-based website. You can select your favorite chef
                            and their dishes. Also, it has a login system with Gmail and GitHub.</p>
                        <a className="text-blue-700 underline  font-semibold" href="https://food-recipe-assignment-10.firebaseapp.com/" target="_blank" rel="noopener noreferrer">View Live Site</a>
                    </div>
                </div>
                <div className="md:flex justify-between items-center w-[90%] gap-8">
                    <div className="w-full">
                        <h2 className="text-2xl font-semibold  mx-auto md:ml-48 my-8">Toy Market</h2>
                        {/* Here is Project One */}
                        <div className="w-[600px] ">
                            <ProjectTow></ProjectTow>

                        </div>

                    </div>
                    <div className="w-full ">
                        <h3 ><span className="text-xl font-semibold">Project Name:</span> <span> Toy Market</span></h3>
                        <h3 ><span className="text-xl font-semibold">Project Details:</span></h3>
                        <p className="space-y-3"> This is an e-commerce website consisting toy products. User can add toy into his cart and purchase. Also
                            admin can control all the product adding and quantity</p>
                        <a className="text-blue-700 underline  font-semibold" href="https://toy-marketplace-5dd9c.firebaseapp.com/" target="_blank" rel="noopener noreferrer">View Live Site</a>
                    </div>
                </div>
                <div className="md:flex justify-between items-center w-[90%] gap-8">
                    <div className="w-full">
                        <h2 className="text-2xl font-semibold  mx-auto md:ml-48 my-8">Summer Camp Sports School</h2>
                        {/* Here is Project One */}
                        <div className="w-[600px] ">
                            <ProjectThree></ProjectThree>

                        </div>

                    </div>
                    <div className="w-full ">
                    <h3 ><span className="text-xl font-semibold">Project Name:</span> <span> Summer Camp Sports School</span></h3>
                    <h3 ><span className="text-xl font-semibold">Project Details:</span></h3>
                    <p className="space-y-3">  Here you can select you favourite game to join and add to your extra curricular activities. Moreover admin
                        can select the instructor and follow on into courses.
                    </p>
                    <a className="text-blue-700 underline  font-semibold" href="https://summer-camp-school-81818.firebaseapp.com/" target="_blank" rel="noopener noreferrer">View Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;