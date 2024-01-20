import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';


type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5
        }}

    
    
        className='h-screen flex relative flex-col text-center  
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <div className="text-5xl text-center text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 absolute top-24 uppercase tracking-[4px] md:tracking-[14px] "> 
                        About
            <div className=' pt-4 text-center font-medium text-lg lg:text-xl text-gray-500 tracking-[4px]'>
                        my develpoment journey
            </div>
        
        </div> 
        
       
       <motion.img
            initial={{
                x:-200,
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{ 
                x:0,
                opacity:1 
            }}
            viewport={{once:true}}

                src="/p1.jpg"

                className='-mb-20  mt-12 shadow-md shadow-teal-50/40 md:mb-0 flex-shrink-0 w-56 h-auto rounded-md object-cover 
                md:w-64 md:rounded-lg xl:w-[500px] xl:h-auto '
       />
       <div className='space-y-10 px-0  md:px-10 text-center'>
            <h4 className='font-semibold md:text-xl '>
               
                <p className='text-sm pt-2 xl:text-xl  md:text-base'> 
                    I am passionate about using technology to solve {" "}
                    <span className=' text-[#E69254] xl:p-2'>
                        Real World  
                    </span> Problems, 
                     specializing in Web Development
                    with a strong proficiency in{" "}  
                    <span className=' underline decoration-[#D26412] xl:p-2'>
                     Data Structures & Algorithms  
                    </span>. 
                </p> 
                
                <p className='text-sm pt-2 xl:text-xl  md:text-base'>
                    I also &#x2764; to participate in {" "}
                    <span className='text-[#E69254] xl:p-2'>
                        Hackathons
                    </span> {" "} 
                    to challenge myself and create impactful solutions. 
                    I am dedicated to advancing my skills 
                    and making a difference, through my projects.
                </p>
                
            </h4>
            <motion.div 
             initial={{
                x:200,
                opacity:0
               }}
               transition={{
                duration:1.2,
               }}
               whileInView={{ 
                x:0,
                opacity:1 
               }}
               viewport={{once:true}}
            className='pt-2 '>
                    <Link href="https://github.com/kinshuk-dewari">  
                        <button className="hoverButton z-0 tracking-[2px] md:text-xl font-bold">GitHub</button>                
                    </Link>

                    <Link href="https://drive.google.com/file/d/1YEXungLWUCD9w-t68csnFO62Qvl7pJJK/view?usp=sharing" >
                        <button className="hoverButton z-0 tracking-[2px] md:text-xl font-bold">My CV</button>
                    </Link>    
                           
                
            </motion.div>
            
       </div>

      
    </motion.div>
  )
}

export default About
