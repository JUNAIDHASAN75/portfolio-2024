
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../../Hook/SectionTitle";


const Services = () => {
    return (
        <div id="services" className="my-20 px-8">
            <SectionTitle className="" heading={'My Services'} subHeading={'i am a passionate web developer'}></SectionTitle>
            <Slide>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                <div className=" p-8 rounded-lg shadow-lg">
                    <h3 className="font-semibold">- Unique design</h3>
                    <p className="text-slate-600">- I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. <a className="text-[#dc5dff] underline">See More</a></p>
                    
                </div>
                <div className=" p-8 rounded-lg shadow-lg">
                    <h3 className="font-semibold">-Different Layout</h3>
                    <p className="text-slate-600">- I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. <a className="text-[#dc5dff] underline">See More</a></p>
                    
                </div>
                <div className=" p-8 rounded-lg shadow-lg">
                    <h3 className="font-semibold">- Make it Simple</h3>
                    <p className="text-slate-600">- I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. <a className="text-[#dc5dff] underline">See More</a></p>
                    
                </div>
                <div className=" p-8 rounded-lg shadow-lg">
                    <h3 className="font-semibold">- Fully Functional</h3>
                    <p className="text-slate-600">- I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. <a className="text-[#dc5dff] underline">See More</a></p>
                    
                </div>
                <div className=" p-8 rounded-lg shadow-lg">
                    <h3 className="font-semibold">- User Frindly</h3>
                    <p className="text-slate-600">- I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. <a className="text-[#dc5dff] underline">See More</a></p>
                    
                </div>
            </div>
            </Slide>

        
            
        </div>
    );
};

export default Services;