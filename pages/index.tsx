import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import React from 'react'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import Image from 'next/image';
import Socials from '../components/Socials'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

const Home: NextPage = () => {

  

  return (
    <div className='bg-[#0A0A0A] text-white h-screen snap-y snap-mandtory overflow-y-scroll 
    z-0 overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded-md scrollbar-track-gray-400/20 scrollbar-thumb-[#E2711E]/80'>
      <Head>
        <title>Kinshuk's Portfolio</title>
      </Head>     
      
      
      <Header/>
      {/* Hero Section */} 
      <section id="hero" >
        <Hero/>
      </section>

      {/* About Section*/}
      <section id="about" >
        <About/>
      </section>

      <section>         
        <Socials/>        
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-center">
        <Projects/>
      </section>      

      {/* Experience Section */}
      <section id="experience" className="snap-center">
        <WorkExperience/>
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      {/* Contact Me Section */}
      <section id="contact" >
        <ContactMe/>
      </section>
      <ScrollTop/>
      <Footer/>          
      
    </div>
      
  )
}

export default Home
