import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { FaRegAddressCard, FaMobile, FaMailBulk } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';
import SectionTitle from '../../Hook/SectionTitle';

const ContactMe = () => {
    const form = useRef();
    console.log(form)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lp0oev5', 'template_wlftsvb', form.current, 'hh32QoXSivYWCHjSo')
            .then((result) => {
                console.log(result);
                if (result.text) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'message send successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.current.reset();
                }

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact' className='my-20 px-8'>
            {/* <Cover img={coverimg} title={'GET IN TOUCH'}></Cover> */}
            <SectionTitle heading={'Contact Me'} subHeading={'i am a passionate web developer'}></SectionTitle>
            <h2 className='font-semibold w-[90%] mx-auto mt-12 '>SAY SOMETHING</h2>
            <div className='md:flex gap-5 items-center w-[90%] mx-auto '>
                <div className='w-full' >
                    

                    <form ref={form} onSubmit={sendEmail} className=' md:my-2   w-full'>
                        <div className="form-control">
                            <label>Name</label>
                            <input className="input input-bordered shadow-lg bg-transparent  w-full max-w-xs pl-2 py-4 hover:border-none" placeholder='Your Name*' type="text" name="user_name" />
                        </div>
                        <div className="form-control my-8">
                            <label>Email</label>
                            <input className="input input-bordered shadow-lg bg-transparent  w-full max-w-xs pl-2 py-4 hover:border-none" placeholder='Your Email' type="email" name="user_email" />
                        </div>
                        <div className="form-control">
                            <label>Message</label>
                            <textarea className="input input-bordered shadow-lg bg-transparent  w-full max-w-xs pl-2 py-4 hover:border-none h-32" name="message" />
                        </div>
                        <input className='btn glass bg-[#ab5ffc] text-white hover:text-black  my-8' placeholder='message me' type="submit" value="Send" />
                    </form>
                
                </div>
                <div className='w-full '>
                    <Slide direction='left'>

                    <div className='w-full h-32 px-5 py-8  shadow-lg my-8'>
                        <FaRegAddressCard className='text-yellow-700 text-xl'></FaRegAddressCard>
                        <p className='text-xl mt-2'>Dhaka,Bangladesh</p>
                    </div>
                    </Slide>
                    <Slide direction='up'>

                    <div className='w-full h-32 px-5 py-8  shadow-lg my-8'>
                        <FaMobile className='text-yellow-700 text-xl'></FaMobile>
                        <p className='text-xl mt-2'>Mobile: +8801722709375</p>
                    </div>
                    </Slide>
                    <Slide direction='right'>

                    <div className='w-full h-32 px-5 py-8  shadow-lg my-8'>
                        <FaMailBulk className='text-yellow-700 text-xl'></FaMailBulk>
                        <p className='text-xl mt-2'>Email: <small>junaidullash@gmail.com</small></p>
                    </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;