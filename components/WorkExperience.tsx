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

    className='h-screen flex relative overflow-hidden flex-col text-left 
    md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>
       <h1 className="text-4xl text-center upper text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 absolute top-24 tracking-[4px] md:tracking-[14px] "> 
       EXPERIENCE
            <h2 className=' pt-4 text-center font-medium text-lg lg:text-xl text-gray-500 tracking-[2px] md:tracking-[4px] '>
                        Swipe <span className='text-[#E2711E]'>{"-->"}</span>
            </h2>
        
        </h1> 
       

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x absolute top-48
        snap-mandatory scrollbar-thin scrollbar-thumb-rounded-md
         scrollbar-track-gray-400/20 scrollbar-thumb-[#E2711E]/80'>   
            <ExperienceCard 
              imageSrc="fiverr.png"
              position="Freelancer" 
              companyName="Fiever" 
              techUsed={[
                { src: '/mongodb.png', alt: 'MongoDb' }, 
                { src: '/react.png', alt: 'React' }, 
                { src: '/node.png', alt: 'Node JS' }, 
                { src: '/tailwind.png', alt: 'Tailwind Css' 
              }]}
              dates='Sept 2023 - Present'
              description={[
                  "Bob the Builder for your Projects",                   
                  "Your FullStack Developer"
              ]}                           
            />   
            <ExperienceCard 
              imageSrc="sai.png"
              position="Full Stack Developer" 
              companyName="SAI Sustainable Agro" 
              techUsed={[
                { src: '/mongodb.png', alt: 'MongoDb' }, 
                { src: '/react.png', alt: 'React' }, 
                { src: '/node.png', alt: 'Node JS' }, 
                { src: '/tailwind.png', alt: 'Tailwind Css'}
              ]}
              dates='Jan 2024 - Present'
              description={[
                  "Creates an intuitive UI/UX using locomotive and framer motion for animations.",
                  "Created a Admin dashboard for performing CRUD operations to the database."                   
              ]}                           
            />   
            <ExperienceCard 
              imageSrc="upwork.jpg"
              position="Freelancer" 
              companyName="Upwork" 
              techUsed={[
                { src: '/react.png', alt: 'React' }, 
                { src: '/firebase.png', alt: 'FireBase' }, 
                { src: '/framermotion.png', alt: 'Framet Motion' }, 
                { src: '/tailwind.png', alt: 'Tailwind Css' 
              }]}
              dates='Soch ra hu yaha suru kr nai ka'
              description={[
                "Bob the Builder of your Team",                   
                "That guy for Your job."
              ]}                           
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
                  "white log thoda aesthetic lagra tb lagaya"                                    
              ]}                           
            />  
            
        </div>   
    </motion.div>
  )
}

export default WorkExperience
