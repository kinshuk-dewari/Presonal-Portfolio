import React from 'react';
import {motion} from "framer-motion";
import ExperienceCard from './ExperienceCard';


type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    
    initial={{opacity:0}}
    whileInView ={{opacity:1}}
    transition={{duration:1.5}}

    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='text-5xl text-center text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 absolute top-24 uppercase tracking-[14px] '>
            Experience
        </h3>   

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-rounded-md scrollbar-track-gray-400/20 scrollbar-thumb-[#E2711E]/80'>   
            <ExperienceCard 
              imageSrc="fiverr.png"
              position="Freelancer" 
              companyName="Fiever" 
              techUsed={[
                { src: '/react.png', alt: 'React' }, 
                { src: '/firebase.png', alt: 'FireBase' }, 
                { src: '/framermotion.png', alt: 'Framet Motion' }, 
                { src: '/tailwind.png', alt: 'Tailwind Css' 
              }]}
              dates='Sept 2023 - Present'
              description={[
                  "I create landing pages for customers,", 
                  "I create personal portfolio websites,",
                  "I create full ecommerce websites for clients."
              ]}
              shadowColor='#15803d'              
            />   
            <ExperienceCard 
              imageSrc="amazon.png"
              position="SDE Intern" 
              companyName="Amazon" 
              techUsed={[
                  { src: '/react.png', alt: 'React' }, 
                  { src: '/git.png', alt: 'Git' }, 
                  { src: '/python.png', alt: 'Python' }, 
                  { src: '/cpp.png', alt: 'C++' 
              }]}
              dates='Lagwa do'
              description={[
                  "Jo vaha kam krung vo yaha pai laga dunga :)", 
                  "Jo vaha kam krung vo yaha pai laga dunga :)",
                  "Jo vaha kam krung vo yaha pai laga dunga :)"                  
              ]}
              shadowColor='#d97706'              
            />  
            <ExperienceCard 
              imageSrc="upwork.jpg"
              position="Freelancer" 
              companyName="Fiever" 
              techUsed={[
                { src: '/react.png', alt: 'React' }, 
                { src: '/firebase.png', alt: 'FireBase' }, 
                { src: '/framermotion.png', alt: 'Framet Motion' }, 
                { src: '/tailwind.png', alt: 'Tailwind Css' 
              }]}
              dates='Soch ra hu yaha suru kr nai ka'
              description={[
                  "I create landing pages for customers,", 
                  "I create personal portfolio websites,",
                  "I create full ecommerce websites for clients."
              ]}
              shadowColor='#15803d'              
            />         
            
            
        </div>   
    </motion.div>
  )
}

export default WorkExperience