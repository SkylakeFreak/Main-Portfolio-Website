"use client";

import React from 'react'
import {motion} from "framer-motion"


function About() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>About</h3>
        <motion.img
        initial={{x:-200,}}
        transition={{duration:1.2,}}
        whileInView={{x:0}}
        viewport={{once:true}}
        src='https://media.licdn.com/dms/image/C4D03AQGy9q5nsFWT_w/profile-displayphoto-shrink_800_800/0/1662664260301?e=1698278400&v=beta&t=b7PAJsoTzFOeesKInBlorBco7VG1Q76zB20qGikcivw'
        className=' -mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
 
        />


        <div className='space-y-5 md:space-y-10 px-0 md:px-10'>
            <h4 className='text-xl md:text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
            <p className='text-sm md:text-lg lg:text-lg text-justify'>
            <p><span className='text-bold text-2xl text-yellow-500'>|</span>With a solid foundation in Python, Java, JavaScript, and React, I bring versatility to my role as a Junior Web Developer and Cloud Practitioner.</p>
            <p><span className='text-bold text-2xl text-yellow-500'>|</span>My academic journey in Computer Science reflects my dedication to mastering various technologies, which complements my practical skills.</p>
            <p><span className='text-bold text-2xl text-yellow-500'>|</span>Through diverse projects encompassing chatbots, machine learning, and robust web applications, Ive honed my proficiency in data structures and gained a holistic understanding of software development.</p>
            <p><span className='text-bold text-2xl text-yellow-500'>|</span>This blend of skills equips me to drive innovation in software development and tackle challenges across multiple domains.</p>
            </p>
        </div>

    </motion.div>
  )
}

export default About