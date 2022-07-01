import React, { Component } from 'react';
import { FaGg, FaBars, FaTimes,FaTwitter,FaGithub,FaInstagram } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Helmet } from 'react-helmet';

 class links extends Component {
  render() {
    return (
      <div className='w-full h-screen text-center'>
            <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
              <p className='uppercase text-sm tracking-widest text-gray-500'>
                  LET'S BUILD SOMETHING TOGETHER
              </p>
              <h1 className='text-2xl font-medium py-2 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>MuradCade</span></h1>
              <h1 className='font-medium text-xs   mt-1 text-gray-500'>
                 Web & App Developer
              </h1>
              <p className='py-2 text-gray-700 max-w-[70%] m-auto font-medium'>I'm Software Developer specializing In Building (and occasionally designing) exceptional  digital experiences. Currently, I'm focused on building Web Application And Keeping Up With diferent Technologies.</p>
            <div className='flex itmes-center justify-between max-w-[330px] m-auto py-4 mb-5'>
                    
                
                  <a href="https://github.com/MuradCade" target='_blank' className='rounded-full shadow-lg  shadow-gray-400 p-6 hover:scale-105 ease-in duration-300'>
                    <FaGithub className=' text-indigo-700'/>
                    </a>
                                       
               <a href="https://twitter.com/cade_murad" target='_blank' className='rounded-full shadow-lg  shadow-gray-400 p-6 hover:scale-105 ease-in duration-300'>   <FaTwitter  className=' text-indigo-700' /></a>
              <address className='rounded-full shadow-lg  shadow-gray-400 p-6 hover:scale-105 ease-in duration-300 cursor-pointer'>
              <a href="mailto: king12murad@gmail.com" ><MdEmail  className=' text-indigo-700' /></a></address>              
               <a href="https://www.instagram.com/murad_cade/"  target='_blank' className='rounded-full shadow-lg  shadow-gray-400 p-6  hover:scale-105 ease-in duration-300'><FaInstagram  className=' text-indigo-700' /></a>
             
                    
            </div>
            {/* download link */}
            <div className='mt-[40px]  flex items-center justify-center cursor-pointer'>
              <a  href='.././portfolio.apk' className=' text-indigo-500 font-bold mr-1 hover:text-indigo-700' download>Download App</a>
                <BsCloudDownload className='text-indigo-500 font-bold  hover:text-indigo-700' size={20}/>

            </div>
          </div>

      </div>

  </div>
    )
  }
}

export default links;