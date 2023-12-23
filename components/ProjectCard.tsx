import Link from 'next/link';
import React from 'react'

type Props = {
    projectName:string;
    imageSrc:string;    
    description: string;  
    projectLink:string;  
}

function ProjectCard({projectName,imageSrc,description,projectLink}:Props)  {
  return (
    <div  className='w-screen  flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-20 md:p-44 h-screen'>
                  <img className='relative h-auto w-auto md:w-auto md:h-[350px]  mx-auto object-cover '
                      src={imageSrc}  alt={projectName} />
                  <div className='space-y-4 px-0 md:p-5 max-w-6xl'>
                      <h4 className='text-4xl text-[#c7b6ad] tracking-[2px] font-semibold text-center uppercase '> {projectName} </h4>                      
                      <p className='text-xl text-gray-500'>
                        {description}
                      </p>
                      <div className='flex  items-center justify-around '>
                        <Link href={projectLink} target="_blank">  
                            <button className="hoverButton flex flex-row  justify-center items-center">
                              <div className=" gap-x-2 tracking-[2px] text-xl font-bold">
                                GitHub  <span>&nbsp;</span>
                              </div>
                              <div> 
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 gap-x-2">
                                <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 
                                0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0
                                 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
                              </svg>
 
                              </div>
                            </button>               
                        </Link>
                        
                      </div>
                  </div>
            </div>
  )
}
export default ProjectCard