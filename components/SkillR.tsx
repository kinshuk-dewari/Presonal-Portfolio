import React from 'react';
import {motion} from "framer-motion";

type Props ={
    directionright?:boolean;
    image: string;
    str:string;
}


const SkillR: React.FC<Props> = ({ directionright,image,str}) => {
  return (
    <div className="relative flex group cursor-pointer ">
       <motion.div
                initial={{
                    x:{directionright}?200:-200,
                    opacity:0
                }}
                transition={{
                    duration:1
                }}
                whileInView={{
                    opacity:1,
                    x:0
                }}                
            >
                <img className='rounded-full border border-gray-500 object-cover
                 w-12 h-12 md:w-28 md:h-28
                filter  transition duration-300 ease-in-out' src={image}  alt={'My Image'} />
        </motion.div> 
        <div className="absolute opactiy-0 group-hover:opacity-100 transition duration-300 ease-in-out
         group-hover:bg-[#D26412] rounded-full z-0 
         h-12 w-12 md:w-28 md:h-28 ">
            <div className="flex items-center justify-center h-full opacity-0 hover:opacity-100">
                <p className=" text-xs md:text-xl font-bold text-white  "> {str}</p>
            </div>
        </div>
      
      
    </div>
    
  );
};

export default SkillR;
