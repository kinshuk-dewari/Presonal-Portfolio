import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="">
      
        <h3 className="text-5xl text-center text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 realtive 
        top-0 uppercase tracking-[4px] md:tracking-[14px] xl:pb-8 "> 
            Projects
        </h3>

        <BentoGrid className="max-w-7xl p-4 mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon} 
              projectlink={item.link} 
            />
          ))}
        </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Ghuunj",
    description: "Empowering individuals with Hearing and Speech impairments through M.L.",
    header:   <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-neutral-100 bg-transparent">
                <img src="/Ghuunj.png" className='w-full' alt="" />
              </div>,
    className: "md:col-span-1",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://github.com/kinshuk-dewari/GHUUNJ-Sign-Language-Detection-ML-Project",
  },
  
  {
    title: "my wallet",
    description: "Your E-Wallet, enabling Transfering Money via Phone numbers and simplified Payments through QR code scanning .",
    // dark:border-white/[0.2]
    header:  <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-neutral-100 bg-transparent">
              <img src="/my wallet.png" className='w-full h-[24em] md:h-auto' alt="" />
            </div>,  
    className: "md:col-span-2 md:row-span-2",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://github.com/kinshuk-dewari/My-Wallet",
  },
  {
    title: "Presence",
    description: "A Robust Android ERP system for marking Attendance via Facial recognition and Geo-fencing .",
    header: <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-neutral-100 bg-transparent">
              <img src="/Presence.gif" className='w-full h-[24em] md:h-auto' alt="" />
            </div>,
    className: "md:row-span-2 ",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://github.com/kinshuk-dewari/PRESENCE",
  },
  {
    title: "bookify",
    description:
      "Buy, Sell & Share BOOKS online .",
    header: <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-neutral-100 bg-transparent">
              <img src="/bookify.png" className='w-full' alt="" />
            </div>,
    className: "md:col-span-1",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://github.com/kinshuk-dewari/Bookify",
  },
  
];

export default Projects