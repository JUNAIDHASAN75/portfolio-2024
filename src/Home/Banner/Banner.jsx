import { Slide } from 'react-awesome-reveal';
import profile from '../../assets/images/banner/Untitled design.png'
import { FaDownload } from 'react-icons/fa';

const Banner = () => {
    const handleDownload = () => {
        const url = '/resume1.pdf'; // Update the URL to the correct path of your resume file
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'Resume_Of_Junaid_Hasan.pdf';
        anchor.click();
        console.log('Resume downloaded');
    }
    return (
        <div className=' h-[100vh]'>


            <div className="md:flex justify-around items-center w-[90%] mx-auto gap-2 mt-8">

                <div className='w-full'>
                    <div className='w-full '>
                        <h4 className="text-2xl font-semibold text-slate-600">Hello There</h4>
                        <h2 className="text-5xl font-bold">Junaid Hasan</h2>
                        <p>I am a passionate web developer</p>
                        <div className="flex items-center gap-3 mt-4">
                            {/* <Slide direction='left'>

                                <div><a href='https://drive.google.com/file/d/1S8ipft_mlxilPGYaHZRac6vb6hCWKINn/view' target="_blank" rel="noopener noreferrer" className="btn glass bg-[#ab5ffc] text-white hover:text-black md:mt-0 ">View Resume</a></div>
                            </Slide> */}
                            <Slide direction='right'>

                                <div><button onClick={handleDownload} className="btn glass bg-[#ab5ffc] text-white hover:text-black">Download Resume <FaDownload></FaDownload></button></div>
                            </Slide>
                        </div>
                        
                    </div>
                </div>
                <div className='w-full'>
                    <img className='w-full h-[490px] mx-auto' src={profile} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;