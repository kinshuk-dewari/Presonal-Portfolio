import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';


export const Footer = () => {
  return (    
        <div className="flex flex-row overflow-hidden relative w-full bg-[#0e0e0e] bottom-0
        text-left px-10 justify-between mx-auto items-center z-0 ">
            <div>
                <Link href="#hero">
                    <div className='uppercase text-[#E2711E] text-4xl font-bold tracking-[4px] z-30' >Kinshuk Dewari</div> 
                </Link>
                <div>Copywrite @ kinshukdewariwastaken@gmail.com</div>
                <div>All rights reserved</div>
            </div>
            <div className=" flex-row md:flex-col hidden sm:inline" >
                <div className="pt-3 text-[#D7CBC4] text-base font-normal tracking-[2px] z-30">
                    <SocialIcon url="https://github.com/kinshuk-dewari" fgColor="gray" bgColor= "transparent" target="_blank"/>                                      
                    Kinshuk Dewari 
                </div>
                <div className="pt-3 text-[#D7CBC4] text-base font-normal tracking-[2px] z-30">
                    <SocialIcon url="https://instagram.com/kinshuk_dewari" fgColor="gray" bgColor= "transparent" target="_blank"/>
                        kinshuk_dewari
                    </div>
                <div className="pt-3 text-[#D7CBC4] text-base font-normal  tracking-[2px] z-30">
                    <SocialIcon url="https://linkedin.com/in/kinshuk-dewari" fgColor="gray"bgColor= "transparent" target="_blank"/>
                         kinshuk-dewari
                </div>
             </div>
        </div>        
    
  )
}

export default Footer