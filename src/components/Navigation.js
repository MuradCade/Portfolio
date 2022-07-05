import React, { useState} from 'react';
import { FaGg, FaBars, FaTimes,FaTwitter,FaGithub,FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll';



const Navigation = () => {
  const [nav,setNav] = useState(false);

  const handlenav = () =>{
    setNav(!nav)
  }
  return (
    <div className='fixed w-[100%] bg-[#fff] h-[50px] shadow-lg z-[100] py-4'>
         
      {/* logo and navigation */}
      <div className="flex  justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <FaGg size={28} className='ml-4 text-indigo-700' />
        <nav>
          <ul className='hidden md:flex px-5'>
           <li className='ml-4 text-md capitalize hover:border-b cursor-pointer font-medium hover:text-indigo-600'>
           <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
           </li>
           <li className='ml-4 text-md capitalize hover:border-b cursor-pointer font-medium hover:text-indigo-600'>
           <Link to='about' smooth={true} duration={500}>
            About
          </Link>
           </li>
           <li className='ml-4 text-md capitalize hover:border-b cursor-pointer font-medium hover:text-indigo-600'>
           <Link to='skill' smooth={true} duration={500}>
            Skill
          </Link>
           </li>
           <li className='ml-4 text-md capitalize hover:border-b cursor-pointer font-medium hover:text-indigo-600'>
           <Link to='project' smooth={true} duration={500}>
            Project
          </Link>
           </li>
           <li className='ml-4 text-md capitalize hover:border-b cursor-pointer font-medium hover:text-indigo-600'>
           <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
           </li>
            </ul>
          <div onClick={handlenav}  className="md:hidden mr-2 cursor-pointer">
            <FaBars size={20} className='cursor-pointer'/>
          </div>
        </nav>
      </div>

      {/* mbile menu */}

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffff] p-10 ease-in duration' : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffff] p-10 ease-in duration'}>
          <div>
            <div  onClick={handlenav}  className=' flex w-full justify-between items-center mt-4 cursor-pointer'>
              <FaGg size={28} className='ml-4 text-indigo-700 cursor-pointer' />
              <div className='shadow-lg rounded-full   cursor-pointer   md:mr-4 p-1 h-10 '>
                <FaTimes size={20} className='ml-4 text-indigo-700 relative top-2 right-2' />
              </div>
            </div>
            <div className='border-b border-gray-300 my-2'>
              <p className='capitalize font-medium px-4 w-[85%] md:w-[90%] py-4'>let's build something legendary together</p>
            </div>
          </div>
          <div className='-mt-4'>
            <ul className='capitalize flex flex-col'>
           <li className='py-2 text-md ml-4 bg-[#ecf0f3] w-full mb-4 px-2 hover:bg-indigo-100 hover:text-indigo-400 font-medium cursor-pointer'>
           <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
           </li>
           <li className='py-2 text-md ml-4 bg-[#ecf0f3] w-full mb-4 px-2 hover:bg-indigo-100 hover:text-indigo-400 font-medium cursor-pointer'>
           <Link to='about' smooth={true} duration={500}>
            About
          </Link>
           </li>
           <li className='py-2 text-md ml-4 bg-[#ecf0f3] w-full mb-4 px-2 hover:bg-indigo-100 hover:text-indigo-400 font-medium cursor-pointer'>
           <Link to='skill' smooth={true} duration={500}>
            Skill
          </Link>
           </li>
           <li className='py-2 text-md ml-4 bg-[#ecf0f3] w-full mb-4 px-2 hover:bg-indigo-100 hover:text-indigo-400 font-medium cursor-pointer'>
           <Link to='project' smooth={true} duration={500}>
            Project
          </Link>
           </li>
           <li className='py-2 text-md ml-4 bg-[#ecf0f3] w-full mb-4 px-2 hover:bg-indigo-100 hover:text-indigo-400 font-medium cursor-pointer'>
           <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
           </li>
            </ul>
          </div>
          {/* contact */}
          <div className='pt-10 px-4'>
              <p className='uppercase tracking-widest text-[#4651e5] font-medium px-4'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
               <a href="https://github.com/MuradCade" target='_blank' className='rounded-full shadow-lg  shadow-gray-400 p-4 hover:scale-105 ease-in duration-300'><FaGithub className=' text-indigo-700'/></a>
               <a href="https://twitter.com/cade_murad" target='_blank' className='rounded-full shadow-lg  shadow-gray-400 p-4 hover:scale-105 ease-in duration-300'>   <FaTwitter  className=' text-indigo-700' /></a>
              <address className='rounded-full shadow-lg  shadow-gray-400 p-4 hover:scale-105 ease-in duration-300 cursor-pointer'>
              <a href="mailto: king12murad@gmail.com" ><MdEmail  className=' text-indigo-700' /></a></address>              
               <a href="https://www.instagram.com/murad_cade/"  target='_blank' className='rounded-full shadow-lg  shadow-gray-400 p-4 hover:scale-105 ease-in duration-300'><FaInstagram  className=' text-indigo-700' /></a>
             
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Navigation;