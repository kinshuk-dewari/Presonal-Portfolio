import React from 'react'
import {motion} from "framer-motion";

import SkillL from './SkillL';
import SkillR from './SkillR';
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView ={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
    
    className='min-h-screen flex overflow-hidden flex-col md:text-left  relative
    xl:flex-row max-w-[2000px] xl-px-10 justify-center items-center mx-auto text-center xl:space-y-2'>
        <h3 className=' absolute text-4xl text-center text-[#E2711E]  pb-4 lg:text-7xl font-bold px-10 top-24 uppercase tracking-[4px] md:tracking-[14px]'>
            Skills
        </h3> 

        <h3 className='top-36  text-gray-500 pb-2 tracking-[2px] absolute pt-4 text-center  font-medium text-lg lg:text-xl xl:pt-8'>Try hovering </h3>  

        <div className="grid grid-cols-4 gap-2 md:gap-5 absolute  top-56">  
          
            <SkillR directionright image="../mongodb.png"str="MongoDB" />
            <SkillR directionright image="../express.png"str="Express" />
            <SkillR directionright image="../react.png"str="React" />
            <SkillR directionright image="../node.png" str="Node Js"/>

            <SkillL directionleft image="../c.png" str="C"/>
            <SkillL directionleft image="../cpp.png" str="C++"/>
            <SkillL directionleft image="../python.png"str="Python" />
            <SkillL directionleft image="../mysql.png"str="MySQL" /> 
            

            <SkillR directionright image="../github.png"str="Github" />
            <SkillR directionright image="../tailwind.png"str="TailWind" />
            <SkillR directionright image="../photoshop-logo-icon-free-vector.png"str="Photoshop" />
            <SkillR directionright image="../figma.png"str="Figma" />
            
            <SkillL directionleft image="../html.png" str="HTML"/>
            <SkillL directionleft image="../css.png" str="CSS"/>
            <SkillL directionleft image="../js.png" str="JavaScript"/>
            <SkillL directionleft image="../git.png"str="Git" />          
          
            <SkillR directionright image="../postgres.jpeg" str="Postgres"/>
            <SkillR directionright image="../prisma.jpg"str="Prisma" />
            <SkillR directionright image="../redis.png"str="Redis" />
            <SkillR directionright image="../docker.png"str="Docker" />
            
        </div>

    </motion.div>
  )
}

export default Skills
