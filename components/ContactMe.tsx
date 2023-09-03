"use client";
import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import {PhoneIcon, MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm,SubmitHandler } from 'react-hook-form';
type Inputs={
    name:string;
    email:string;
    subject:string;
    message:string;
};
function ContactMe() {
    const {register,handleSubmit}=useForm<Inputs>();
    const onSubmit:SubmitHandler<Inputs>=(formData)=>{
        window.location.href=`mailto:utkarshbarde2@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>Contact</h3>
        <div className='lg:mt-10 flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10'><h4 className='"text-xl md:text-xl lg:text-1xl 2xl:text-4xl font-semibold text-center'>
            I have got just what you need.{" "}
            <span className='decoration-[#F7AB0A] underline'>Lets Talk</span></h4>
            <div className='space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-1 2xl:space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-lg md:text-2xl lg:text-xl'>+91-7383709287</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-lg md:text-2xl lg:text-xl'>Utkarshbarde2@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className='text-lg md:text-2xl lg:text-xl'>Vadodara, Gujarat, India</p>
                </div>

                
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-80 md:w-fit mx-auto'>
                <div className='md:flex md:space-x-2 space-y-2 md:space-y-0'>
                    <input {...register('name')} placeholder='Name' type="text" required className='contactInput w-80 md:w-auto' />
                    <input {...register('email')} placeholder="Email" type="email" required className='contactInput w-80 md:w-auto' />
                </div>
                <input {...register('subject')} placeholder='Subject' type="text" required className='contactInput'/>
                <textarea {...register('message')} placeholder='Message' required className='contactInput w-80 md:w-auto'/>
                <button type="submit" className='bg-[#F7AB0A] lg:py-4 lg:px-4  py-3 md:py-5 px-10 rounded-lg text-black font-bold text-lg'>Submit</button>
            </form>
            <div className='flex flex-col justify content-center align items-center'>
                <a href="https://mega.nz/file/q640RSgZ#1ASROQAWMeamghsMITtZhvQOBasZRAjs42NraMuDyUE" className='animate-pulse hover:opacity-70 opacity-100  transition-opacity duration-200 overflow-hidden justify-center cursor-pointer  bg-[#aaa9ab] py-1 px-3 rounded-md text-black font-bold text-xl'><div></div><button><ArrowDownTrayIcon className="h-10 w-6 inline"/> Download Resume</button></a>
            </div>




            </div>
    </div>
  )
}

export default ContactMe