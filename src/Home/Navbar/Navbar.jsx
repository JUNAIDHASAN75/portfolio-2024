import { Link } from 'react-router-dom';


const Navbar = () => {
    const navItems = <>
        <li className='text-white hover:text-[#d87dff] hover:border-b-2  mx-3 uppercase tracking-wide' >
            <Link to='/'>Home</Link></li>

        <li className='text-white hover:text-[#d87dff] hover:border-b-2  mx-3 uppercase tracking-wide' >
            <Link to='/projects'>Projects</Link></li>
        <li className='text-white hover:text-[#d87dff] hover:border-b-2  mx-3 uppercase tracking-wide' >
            <Link to='/contact'>Contact Me</Link></li>
    </>
    return (
        <div className=''>


            <div className="navbar fixed z-10 md:px-8 bg-opacity-60 bg-black text-white  max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-25 text-black h-[100vh] w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="text-xl text-white uppercase">Junaid Hasan</a>
                    
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;