import React from 'react'
import {motion} from "framer-motion"

function ExperienceCard() {
  return (
    <article className='xl:w-45 lg:h- lg:mt-10 xl:mt-14 md:mt-10 flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72 md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 '>
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}

         className='h-20 md:w-32 md:h-32 rounded-full  xl:w-[150px] xl:h-[150px] object-cover object-center' src="https://media.licdn.com/dms/image/C560BAQGgttvI_-mYmw/company-logo_200_200/0/1644650496258?e=1701302400&v=beta&t=l55KaV2mAeDwXPt8ryN8su12TfNavFfljMdwgwhL1Bo" alt="" />
         <div className='p-2'></div>
         <div className='px-0 md:px-10'>
            <h4 className='xl:text-lg text-2xl md:text-4xl font-light'>
                Amazon Web Services Internship
            </h4>
            <p className='xl:font-thin font-bold text-2xl mt-1'>Immensphere</p>
            <div className='flex space-x-2 my-2 justify-center'>
                <img className='h=10 w-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLXTq30P8r0iIPc42GB6nz2K1fz-R-UrJd9kESTf6075L--SNDC4LREWciOJNZ0FqoX4&usqp=CAU" alt="" />

            </div>
            <ul className='text-sm xl:text-sm list-disc space-y-4 ml-4 md:text-lg'>
                <li>Developed a chatbot using Amazon Lex.</li>
                <li> An advanced natural language understanding service provided by Amazon Web Services.</li>
                <li>This project demonstrates the potential of AI-driven chatbots in streamlining hotel booking processes.</li>
                <li>The bot then provides real-time responses and available hotel options that match the users preferences.</li>
            </ul>
         </div>


    </article>

  )
}

export default ExperienceCard