import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import { FaLaptopCode } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
export const Footer = () => {
  return (    
        <div className="flex md:flex-row overflow-hidden relative w-full bg-[#0e0e0e] bottom-0 p-4
        text-left px-10 justify-center md:justify-between mx-auto items-start z-0 flex-col ">
            <div className='pb-8'>
                <Link href="#hero">
                    <div className='uppercase text-[#E2711E] text-4xl font-bold tracking-[4px] z-30' >Kinshuk Dewari</div> 
                </Link>
                <div>Copyrite&#169; Kinshuk All rights reserved</div>
            </div>
            <div className='flex md:flex-row gap-10'>
                <div className='flex flex-col items-start justify-center text-[#D7CBC4] font-bold text-base md:text-2xl'>
                    <span className='pl-2 text-xl text-[#E2711E] uppercase'>Sections</span>
                    <Link href="#projects" className=' p-2 flex flex-row gap-6 items-center hover:text-[#E2711E] justify-center'> <FaLaptopCode className=' text-gray-400 text-3xl'/> Projects</Link>
                    <Link href="#achievements" className=' p-2 flex flex-row gap-6 items-center hover:text-[#E2711E] justify-center'><MdOutlineWorkspacePremium className=' text-gray-400 text-3xl'/> Achievements</Link>
                    <Link href="#experience" className=' p-2 flex flex-row gap-6 items-center hover:text-[#E2711E] justify-center'> <FaListCheck className=' text-gray-400 text-3xl'/> Experience</Link>
                    <Link href="#skills" className=' p-2 flex flex-row gap-6 items-center hover:text-[#E2711E] justify-center'> <MdOutlineWorkOutline className=' text-gray-400 text-3xl'/>Skills</Link>
                </div>
                <div className="flex flex-col font-bold text-base md:text-xl" >
                    <span className='pl-4 text-xl uppercase text-[#E2711E]'>Socials</span>
                    <div className=" text-[#D7CBC4] hover:text-[#E2711E] racking-[2px] z-30">
                        <SocialIcon url="https://github.com/kinshuk-dewari" fgColor="gray" bgColor= "transparent" target="_blank"/>                                      
                        Kinshuk Dewari 
                    </div>
                    <div className=" text-[#D7CBC4] over:text-[#E2711E] hover:text-[#E2711E] tracking-[2px] z-30">
                        <SocialIcon url="https://instagram.com/kinshuk_dewari" fgColor="gray" bgColor= "transparent" target="_blank"/>
                            kinshuk_dewari
                        </div>
                    <div className=" text-[#D7CBC4] over:text-[#E2711E] hover:text-[#E2711E]  tracking-[2px] z-30">
                        <SocialIcon url="https://linkedin.com/in/kinshuk-dewari" fgColor="gray"bgColor= "transparent" target="_blank"/>
                            kinshuk-dewari
                    </div>
                </div>
            </div>
            
        </div>        
    
  )
}

export default Footer