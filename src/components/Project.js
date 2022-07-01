import React, { Component } from 'react';
import chatapp from '../assets/chatapp.jpg';

 class Project extends Component {
  render() {
    return (
      <div className='w-full'>
         <div className='max-w-[1240px] mx-auto px-2 py-20 '>
            <p className='text-xl text-[#5651e5] font-medium tracking-widest uppercase mb-4'>Project</p>
                <h2 className='mt-4 text-xl text-center font-medium text-gray-400'>What I've Built</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-5">
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img src={chatapp} className='rounded-xl group-hover:opacity-10'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[5    0%]'>
                        <h3 className='text-3xl font-bold  text-white tracking-widest text-center -mt-[80px]'>Chat App</h3>
                        <p className='pb-4 pt-2 text-black text-center mb-2 font-bold'>Php With Mysqli Project </p>
            <div className="text-center ">
            <a href="#" className='text-center p-4 rounded-lg bg-white text-gray-700 font-bold text-md hover:bg-indigo-500 hover:text-white'>Source Code</a>
            </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img src={chatapp} className='rounded-xl group-hover:opacity-10'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[5    0%]'>
                        <h3 className='text-3xl font-bold  text-white tracking-widest text-center -mt-[80px]'>Chat App</h3>
                        <p className='pb-4 pt-2 text-black text-center mb-2 font-bold'>Php With Mysqli Project </p>
            <div className="text-center ">
            <a href="#" className='text-center p-4 rounded-lg bg-white text-gray-700 font-bold text-md hover:bg-indigo-500 hover:text-white'>Source Code</a>
            </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img src={chatapp} className='rounded-xl group-hover:opacity-10'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[5    0%]'>
                        <h3 className='text-3xl font-bold  text-white tracking-widest text-center -mt-[80px]'>Chat App</h3>
                        <p className='pb-4 pt-2 text-black text-center mb-2 font-bold'>Php With Mysqli Project </p>
            <div className="text-center ">
            <a href="#" className='text-center p-4 rounded-lg bg-white text-gray-700 font-bold text-md hover:bg-indigo-500 hover:text-white'>Source Code</a>
            </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <img src={chatapp} className='rounded-xl group-hover:opacity-10'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[5    0%]'>
                        <h3 className='text-3xl font-bold  text-white tracking-widest text-center -mt-[80px]'>Chat App</h3>
                        <p className='pb-4 pt-2 text-black text-center mb-2 font-bold'>Php With Mysqli Project </p>
            <div className="text-center ">
            <a href="#" className='text-center p-4 rounded-lg bg-white text-gray-700 font-bold text-md hover:bg-indigo-500 hover:text-white'>Source Code</a>
            </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    )
  }
}

export default Project;