// import Cover from "../../Component/Cover";
// import coverimg from '../../assets/images/anas-alshanti-feXpdV001o4-unsplash.jpg'
import ProjefctOne from "../../Component/ProjefctOne";
import ProjectTow from "../../Component/ProjectTow";
import ProjectThree from "../../Component/ProjectThree";
import SectionTitle from "../../Hook/SectionTitle";

const Projects = () => {
    return (
        <div id="project" className="mb-12">
            {/* <Cover img={coverimg} title={'My Projects'}></Cover> */}
            <SectionTitle heading={'My Projects'} subHeading={'I am a passionate web developer'}></SectionTitle>
            <div className="md:flex w-[90%]  justify-around items-center gap-5">
                <div className=" w-[90%]">
                    <h2 className="text-2xl font-semibold md:w-[90%] mx-auto md:ml-48 my-8">Food Recipe</h2>
                    {/* Here is Project One */}
                    <ProjefctOne></ProjefctOne>

                </div>
                <div className="w-full">
                    <h3 ><span className="text-xl font-semibold">Project Name:</span> <span> Food Recipe</span></h3>
                    <h3 ><span className="text-xl font-semibold">Project Details:</span></h3>
                    <p className="space-y-3">It is a chef-based website. You can select your favorite chef
                        and their dishes. Also, it has a login system with Gmail and GitHub.</p>
                    <a className="text-blue-700 underline  font-semibold" href="https://food-recipe-assignment-10.firebaseapp.com/" target="_blank" rel="noopener noreferrer">View Live Site</a>
                </div>
            </div>
            <div className="md:flex w-[90%] justify-around items-center">
                <div className="w-3/4">
                    <h2 className="text-2xl font-semibold md:w-[90%] mx-auto md:ml-48 my-8">Toy Market</h2>
                    <ProjectTow></ProjectTow>
                </div>
                <div className="w-full">
                    <h3 ><span className="text-xl font-semibold">Project Name:</span> <span> Toy Market</span></h3>
                    <h3 ><span className="text-xl font-semibold">Project Details:</span></h3>
                    <p className="space-y-3"> This is an e-commerce website consisting toy products. User can add toy into his cart and purchase. Also
                        admin can control all the product adding and quantity</p>
                    <a className="text-blue-700 underline  font-semibold" href="https://toy-marketplace-5dd9c.firebaseapp.com/" target="_blank" rel="noopener noreferrer">View Live Site</a>
                </div>
            </div>
            <div className="md:flex w-[90%] justify-around items-center">
                <div className="w-3/4">
                    <h2 className="text-2xl font-semibold md:w-[90%] mx-auto md:ml-48 my-8">Summer Camp Sports School</h2>
                    <ProjectThree></ProjectThree>
                </div>
                <div className="w-full">
                    <h3 ><span className="text-xl font-semibold">Project Name:</span> <span> Summer Camp Sports School</span></h3>
                    <h3 ><span className="text-xl font-semibold">Project Details:</span></h3>
                    <p className="space-y-3">  Here you can select you favourite game to join and add to your extra curricular activities. Moreover admin
                        can select the instructor and follow on into courses.
                    </p>
                    <a className="text-blue-700 underline  font-semibold" href="https://summer-camp-school-81818.firebaseapp.com/" target="_blank" rel="noopener noreferrer">View Live Site</a>
                </div>
            </div>

        </div>
    );
};

export default Projects;