import React,{useState} from 'react';
import {motion} from "framer-motion";


type Props ={ }
type NavItem = {
  name: string;
  position: string;
};


const navItems: NavItem[] = [
  { name: 'Smart India Hackathon, 2022 ', position: 'Runnerups' },
  { name: 'Poornima Hackathon, 2022', position: '25 th / 540 teams' },
  { name: 'A.I. 2.0 , Yahama 2023', position: '10 th / 140 teams' },  
  { name: 'Biweekly Contest 119, 2023', position: '5634 / 20179' },  
  { name: 'Smart India Hackathon,2023 ', position: 'Pre-Qualifiers' },
  { name: 'Weekly Contest 364, 2023', position: '4013 / 21263' },  
];



function Achievements() {
  const [isHovered, setIsShow] = useState(false);
  return (
    <div>
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
        <h3 className='text-5xl text-center text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 absolute 
        top-24 uppercase tracking-[4px] md:tracking-[14px] '>
        Achievements
        </h3> 

        <h3 className=' top-36 uppercase text-gray-500 pb-2 tracking-[4px] absolute pt-4 text-center 
        font-medium text-lg lg:text-xl lg:pt-6 xl:pt-8'>my college journey</h3>  

        <div className='flex flex-col justify-between items-start '>
        {navItems.map((item,key) => (            
            
            <div key={key} className='text-[#c7b6ad] w-full max-w-7xl space-y-4 flex flex-row items-center justify-between border-b-2 lg:border-b-3 border-b-gray-500'>
              <h1 className=' text-2xl font-bold uppercase md:text-4xl lg:text-5xl xl:text-7xl'> {item.name} </h1>
              <span className=' ml-1 text-gray-500 text-sm md:text-lg lg:text-xl uppercase'> {item.position} </span>      

            </div>

        ))}
        <div className='flex gap-1 mt-3 flex-row-reverse w-full'>
          <div className='bg-[#c7b6ad] h-2 w-2 rounded-full'></div>
          <div className='bg-[#c7b6ad] h-2 w-2 rounded-full'></div>
          <div className='bg-[#c7b6ad] h-2 w-2 rounded-full'></div>
        </div>
        </div>

    </motion.div>
    </div> 
  )
}
export default Achievements;
 

