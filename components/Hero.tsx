"use client";
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

function Hero() {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Utkarsh Barde", "Always-Loves-Coffee.tsx", "<ButLovesToCodeMore/>"],
        loop: true,
        delaySpeed: 2000,
    });
    

   
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://media.licdn.com/dms/image/C4D03AQGy9q5nsFWT_w/profile-displayphoto-shrink_800_800/0/1662664260301?e=1698278400&v=beta&t=b7PAJsoTzFOeesKInBlorBco7VG1Q76zB20qGikcivw" alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]'>Junior Web Developer</h2>
                <h1 className='text-2xl md:text-5xl lg:text-6xl font-semibold px-10'>


                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className='pt-5 w-21'>
                    <Link href="#about">
                    <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Hero