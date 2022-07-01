import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import avatar from '../assets/avatar.jpg';
import html  from '../assets/html.png';
import Css  from '../assets/css.png';
import javascript  from '../assets/javascript.png';
import Nextjs  from '../assets/nextjs.png';
import Reactimg  from '../assets/react.png';
import Nodejs  from '../assets/node.png';
import Tailwind  from '../assets/tailwind.png';
import shopify  from '../assets/shopify.png';
import mangodb  from '../assets/mongo.png';
import Aws  from '../assets/aws.png';
import Firebase  from '../assets/firebase.png';
import github  from '../assets/github1.png';
import flutter from '../assets/flutter-logo.svg';
 class About extends Component {
  render() {
    return (
        
        <div className='w-full h-screen text-center'>
             <Helmet>
        <title>About</title>
      </Helmet>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='col-span-1'>
                <p className='text-[#5651e5] font-medium text-md uppercase tracking-widest text-center '>About</p>
                <div className='md:grid grid-cols-2 gap-1 place-items-center relative md:left-10 '>
                    <div className=' relative md:left-10 -left-1   gap-4 mb-4'>
                        <h2 className=' font-medium text-xs text-gray-400'>Who I Am</h2>
                        <p className='py-1 text-gray-300 font-medium'>I Am Not Normal Developer</p>
                      <p className='py-2 text-gray-700 font-medium'>Hello! My name is <span className='text-[#5651e5]'>Murad Cade </span>and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!Fast-forward </p>  
                    </div>
                    <div className='hidden md:block rounded-xl   hover:scale-90 ease-in duration-300'>
                        <img src={avatar} alt='avatar image' className='w-[300px] '/>
                    </div>
                </div>
            </div>
        </div>
          {/* skills */}
          <div  className='w-full lg:h-screen p-2 -mt-[70px]'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl text-start font-medium tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4 font-medium text-gray-500'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>Html</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>CSS</h3>
              </div>
            </div>
          </div>
                  
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Reactimg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Nextjs} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>Next</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={mangodb} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>MongoDb</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Aws} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>Aws</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={shopify} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>Shopify</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>Javascript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Nodejs} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>Nodejs</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-medium'>github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={flutter} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
              
                <h3 className='font-medium'>Flutter</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Reactimg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
              
                <h3 className='font-medium'>React Native</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </div>
    )
  }
}
export default About;