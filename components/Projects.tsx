import React from 'react';
import {motion} from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

type Props = {}

function Projects({}: Props) {

  const projects=[1,2,3,4];

  return (
    
    <div  
    className='h-screen flex relative flex-col text-center 
    md:text-left md:flex-row w-full px-10 justify-evenly mx-auto items-center z-10'>

        <h3 className="text-5xl text-center text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 absolute 
        top-24 uppercase tracking-[4px] md:tracking-[14px] xl-pb-8 "> 
            Projects
        </h3> 

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
        snap-mandatory z-20 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-track-gray-400/20 scrollbar-thumb-[#E2711E]/80'>
          <ProjectCard
            projectName='Ghuunj'
            projectLink='https://github.com/KINSHUK69/GHUUNJ-Sign-Language-Detection-ML-Project'
            imageSrc='/Ghuunj.png'
            description='Empowering individuals with Hearing and Speech impairments through M.L.' 
            // that converts SIGN Launguage into accessible Text and Audio.'
          />
          <ProjectCard
            projectName='Presence'
            projectLink='https://github.com/KINSHUK69/PRESENCE'
            imageSrc='/Presence.png'
            description='A Smart Attendance Capturing App ,Using facial recognition and geo-fencing.'
            // Develpoed for S.I.H 2022, ps SK-794.'            
          />
          <ProjectCard
            projectName='Bookify'
            projectLink='https://github.com/KINSHUK69/Bookify'
            imageSrc='/Bookify.png'
            description='Unlock the World of Books with BOOKIFY.
            Buy, Share, or Sell Safely and Effortlessly!!'
          />          
        
        </div>
              
        <div className='w-full absolute top-[30%] bg-[#E2711E]/10 left-0 h-[500px] border-none -skew-y-12 
        
        '></div>            
             {/* shadow-2xl shadow-[#E2711E]/10 */}
            
      </div>       

  )
}

export default Projects

