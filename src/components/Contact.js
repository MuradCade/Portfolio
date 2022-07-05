import React from 'react';


const Contact = () =>{
    return(
        <div  name='contact' className='w-full'>
        
            <div className='max-w-[1240px] mx-auto px-2 py-20 '>
            <div name='contact' className='w-full h-screen  flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c3c3cc54-24d9-4c34-93e8-f2948a80c6f3" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-600'>Contact</p>
                <p className='text-indigo-500 py-4 font-bold'>To Get In Touch With Me  Fill The Form Below</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white bg-pink-600 border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
            <p className='text-gray-500 text-center mt-4 font-medium'>Designed & Built by MuradCade</p>
            </div>
    </div>
    )
}


export default Contact;