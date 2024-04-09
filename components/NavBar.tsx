import React, { useState } from 'react';
import { motion } from 'framer-motion';

type NavItem = {
  name: string;
  link: string;
  // icon?: string | React.ReactNode;
};

type MenuButtonProps = {
    isMenuOpen: boolean;
    onToggle: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ isMenuOpen, onToggle }) => {
    return (
      <button
        className="focus:outline-none transition duration-1000 "
        onClick={onToggle}
      >
        {isMenuOpen ? (
        
        <motion.div 
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:.25
        }}
        
        className=' transition translate-x-[6rem]'>            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" >
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>           

        </motion.div>
 
        ) : (      
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" >
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </div>
          

        )}
      </button>
      
    );
  };

const NavBar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: '.About( )', link: '#about' },
    { name: '.Project( )', link: '#projects' },
    { name: '.Achievements( )', link: '#achievements' },
    { name: '.Experience( )', link: '#experience' },
    { name: '.Skills( )', link: '#skills' },
    { name: '.Contact( )', link: '#contact' },
  ];

  return (
    <nav className="text-base md:text-xl">
      <div className="container mx-auto flex justify-between items-center ">
        
        <div className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-[#E2711E] focus:text-[#D26412] px-3 py-2 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:hidden flex items-center">          
          <MenuButton isMenuOpen={isMenuOpen} onToggle={() => setMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      {/* Responsive menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-right mt-2 w-full space-y-2 h-screen">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}           
              onClick={() => setMenuOpen(false)}
            >
              <button className="hoverNav pt-20 text-3xl font-bold md:text-4xl ">{item.name}</button> 
              
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;