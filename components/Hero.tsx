import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles';
import Link from 'next/link';
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import {riseWithFade, profileAnimation, staggerChildren, wordAnimation, delayedWordAnimation} from "../components/animations"

type Props = {}


function Hero({}: Props) {

    const [text] = useTypewriter({
            words: ["< FullStack.jsx />","{ Freelancer.cpp }","[ Coffee ] = [ Life.exe ]","__Hackathons.py__"],
            loop: true,   
            typeSpeed:40,                  
            delaySpeed:700,
            
    })
        
     return (
        <motion.div className='h-screen relative top-0 flex flex-row space-y-8 lg:text-7xl items-center justify-center text-left overflow-hidden' 
            initial="initial" 
            animate="animate" >
            
            <BackgroundCircles />
            {/* -mb-20  shadow-md shadow-teal-50/40 */}

            <div className='z-20 '> 
                
                <h1 className='text-3xl pb-2 p-2 md:text-6xl lg:text-7xl font-semibold md:px-10 '>
                    <div className='overflow-hidden '>
                        <AnimateWords title="Hi&nbsp;there,&nbsp;I'm&nbsp;"/> <br/>
                    </div>
                    <motion.div 
                    
                        className='overflow-hidden '>
                        <span className='text-[#E2711E] font-bold '>
                            <AnimateWd title="Kinshuk&nbsp;Dewari"/>
                        </span>
                    </motion.div>
                </h1>
                
                <motion.h1 
                    initial={{
                        scale:0.8,
                        opacity:0
                    }}
                    animate={{
                        scale:1,
                        opacity:1
                    }}
                    transition={{
                        ease:easeInOut,
                        duration:2
                    }}
                    className='text-center pb-3 text-lg lg:text-xl text-gray-500'>
                    <span >{text}</span>
                    <Cursor cursorColor='xl'/>
                </motion.h1>           

                <motion.div 
                    initial={{
                        y:100,
                        opacity:0
                    }}
                    animate={{
                        y:0,
                        opacity:1
                    }}
                    transition={{
                        ease:easeIn, 
                        duration:1.8
                    }} 
                
                    className='pt-2 gap-2 flex items-center justify-center'>
                    
                    <Link href="#projects" className='gap-2'>  
                        <button className="hoverButton tracking-[2px] text-xs md:text-xl font-bold">Projects</button>
                    </Link>

                    <Link href="#contact" className='gap-2'>                  
                        <button className="hoverButton tracking-[2px] text-xs md:text-xl font-bold">Contact Me</button>
                    </Link>               

                    
                </motion.div>               

            </div>            

            <motion.div  className='flex flex-col items-center gap-2 justify-center text-center overflow-hidden'>
                {/* h-96 md:h-[36rem] xl:h-[42rem] w-full */}
                <motion.img variants={profileAnimation} className=' flex-shrink-0 
                w-56 h-auto  md:w-[440px]  xl:w-[540px] 
                object-cover 
                z-10 
            ' width={500} height={500} 
                src="/profile.jpg"  alt={'My Image'} />
                
                <motion.h2 variants={riseWithFade} className='text-sm md:text-xl font-bold uppercase text-gray-500 pb-2 tracking-[2px] md:tracking-[6px] xl:tracking-[8px] ' >
                    Software Developer
                </motion.h2>
            </motion.div>

        </motion.div>    
            
            
    )
    }   

    type AnimateWordsProps={
        title:string
    };
    
    
    const AnimateWords: React.FC<AnimateWordsProps> = ({title}) => {
        return (
            <motion.span variants={staggerChildren}>
                {title.split(' ').map((word,i)=>(
                    <motion.div  key={i} className="inline-block">
                        <motion.span variants={wordAnimation} className="inline-block">{word}</motion.span>
                    </motion.div>
                ))}
            </motion.span>
        );
      };
      const isSpace =(char:string):boolean=>{
        if(char==" ")return true;
        return false;
      }
    
      const AnimateWd: React.FC<AnimateWordsProps> = ({title}) => {
        return (            
            
            <motion.span variants={staggerChildren}>
                {title.split("").map((word,i) => (  
                    
                    <motion.div key={i} className="inline-block ">
                        <motion.span variants={delayedWordAnimation} className="inline-block">
                            {word}
                        </motion.span>                       
                        
                    </motion.div>
                ))}
            </motion.span>
        );

        
    };
    



export default Hero
