import React from 'react';
import Link from 'next/link'
import {motion } from "framer-motion";




type Props = {}

function Socials({}: Props) {
  return (
    <div  className='flex max-h-[20rem] overflow-hidden items-center min-h-[50vh] justify-center flex-row p-10 md:p-20 lg:p-40' >

        <motion.div 
          initial={{
            x:-200,
            opacity:0
          }}
          transition={{
              duration:1
          }}
          whileInView={{
              opacity:1,
              x:0
          }} 
          className='grid grid-cols-1 md:grid-cols-2 md:tracking-[4px] tracking-[2px] gap-10 px-10 md:px-0'
          
          
        >
            <Link href="https://linkedin.com/in/kinshuk-dewari" target="_blank" className='text-base' >
              <h1 className=' text-base tracking-[2px] font-bold md:text-2xl lg:text-3xl xl:text-5xl text-gray-500 hover:text-[#E2711E] pb-2 py-3'>
                LinkedIn 
              </h1>
            </Link>  

            <Link href="https://github.com/kinshuk-dewari" target="_blank" className='text-base'> 
              <h1 className='text-base tracking-[2px] font-bold md:text-2xl lg:text-3xl xl:text-5xl text-gray-500 hover:text-[#E2711E]  pb-2  py-3' >
                Github
              </h1>
            </Link> 

        </motion.div>        
      

        <motion.div 
          initial={{
            x:200,
            opacity:0
          }}
          transition={{
              duration:1
          }}
          whileInView={{
              opacity:1,
              x:0
          }} 
          className='grid grid-cols-1 md:grid-cols-2 md:tracking-[4px] tracking-[2px] gap-10'
        >
            <Link href="https://instagram.com/kinshuk_dewari" target="_blank" className='text-base'>
              <h1 className='text-base tracking-[2px] font-bold md:text-2xl lg:text-3xl xl:text-5xl text-gray-500 hover:text-[#E2711E] pb-2 py-3'>
                Instagram            
              </h1>
            </Link>

            <Link href="https://leetcode.com/kinshuk-dewari" target="_blank" className='text-base'>
              <h1 className='tracking-[2px] font-bold md:text-2xl text-base lg:text-3xl xl:text-5xl text-gray-500 hover:text-[#E2711E] pb-2 py-3'>
                LeetCode            
              </h1>
            </Link>

        </motion.div>

    </div>
  )
}
export default Socials