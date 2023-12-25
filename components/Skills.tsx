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
    xl:flex-row max-w-[2000px] xl-px-10 justify-center items-center mx-auto text-center xl:space-y-0'>
        <h3 className='text-5xl text-center text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 absolute top-24 uppercase tracking-[4px] md:tracking-[14px]'>
            Skills
        </h3> 

        <h3 className=' top-36 uppercase text-gray-500 pb-2 tracking-[4px] absolute  pt-4 text-center  font-medium text-lg lg:text-xl xl:pt-8'>Hover over a skill to know them</h3>  

        <div className="grid  grid-cols-2 md:grid-cols-4 gap-5  ">  
          
            <SkillR directionright image="../mongodb.png"str="MongoDB" />
            <SkillR directionright image="../express.png"str="Express" />
            <SkillR directionright image="../react.png"str="React" />
            <SkillR directionright image="../node.png" str="NodeJs"/>

            <SkillL directionleft image="../c.png" str="C"/>
            <SkillL directionleft image="../cpp.png" str="C++"/>
            <SkillL directionleft image="../python.png"str="Python" />
            <SkillL directionleft image="../mysql.png"str="MySql" /> 
            

            <SkillR directionright image="../github.png"str="Github" />
            <SkillR directionright image="../tailwind.png"str="TailWind" />
            <SkillR directionright image="../photoshop-logo-icon-free-vector.png"str="Photoshop" />
            <SkillR directionright image="../xd.png"str="Adobe XD" />
            
            <SkillL directionleft image="../html.png" str="HTML"/>
            <SkillL directionleft image="../css.png" str="CSS"/>
            <SkillL directionleft image="../js.png" str="JavaScript"/>
            <SkillL directionleft image="../git.png"str="Git" />          
          
            
        </div>

    </motion.div>
  )
}

export default Skills
