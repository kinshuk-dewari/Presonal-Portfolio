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
            <SkillR directionright image="../c.png" str="C"/>
            <SkillR directionright image="../cpp.png" str="C++"/>
            <SkillR directionright image="../python.png"str="Python" />
            <SkillR directionright image="../git.png"str="Git" />
            <SkillL directionleft image="../react.png"str="React" />
            <SkillL directionleft image="../github.png"str="Github" />
            <SkillL directionleft image="../photoshop-logo-icon-free-vector.png"str="Photoshop" />
            <SkillL directionleft image="../xd.png"str="Adobe XD" />
            <SkillR directionright image="../html.png" str="HTML"/>
            <SkillR directionright image="../css.png" str="CSS"/>
            <SkillR directionright image="../js.png" str="JavaScript"/>
            <SkillR directionright image="../node.png" str="NodeJs"/>         
            <SkillL directionleft image="../tailwind.png"str="TailWind" />
            <SkillL directionleft image="../nextjs.png"str="Next.js" />     
            <SkillL directionleft image="../mysql.png"str="MySql" />     
            <SkillL directionleft image="../mongodb.png"str="MongoDB" />  
            
        </div>

    </motion.div>
  )
}

export default Skills
