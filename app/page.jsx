"use client"

import {useRef, useState, useEffect} from 'react'
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import NavBar from './componentes/UI/NavBar'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TypeAnimation } from "react-type-animation";


export default function Home() {
  return (
    <main id='main' className="flex min-h-screen flex-col items-center bg-black overflow-hidden">
      
      <header id='headerIter' className='flex w-screen h-screen items-center justify-center lg:justify-start overflow-hidden'>
        <NavBar toPage="/App" backColor="#0D0D0D" textColor="white"/>
        <div id='headerTextContainer' className='lg:ml-20 z-10'>
          <h1  id='headerTitle' className='text-white text-8xl lg:text-[16vw]'>ITER</h1>
          <p  id="headerDescription" className="text-white font-light text-sm lg:text-base w-[60vw] lg:w-[25vw]">
            <TypeAnimation
              sequence={[
                'Prepárate para la aventura. Cada vez falta menos para el Lift-Off.',
              ]}
              speed={50}
              repeat={0}
            />
            
          </p>
          <Link href="/App">
            <div  id='buttonHeader' className='bg-white flex items-center lg:w-44 h-10 p-2 mt-2 lg:mt-4 justify-between'>
              INICIA ITER
              <BsFillArrowUpRightSquareFill className='w-7 h-7'/>
            </div>
          </Link>
        </div>

        <video className='iterVideo lg:w-full' autoPlay muted loop>
          <source src='https://res.cloudinary.com/dygne65qq/video/upload/v1694105424/bgITERWeb_jm5ri3.webm'/>
        </video>
        <motion.div initial={{y: '50vh'}} animate={{y: 0}} transition={{ ease: "easeOut", duration: 1 }} id="headerScrollDown" className='w-36 h-14 flex justify-center items-center bg-black absolute bottom-0 right-0 z-10'>
          <h3 className='text-white p-4 text-sm'>Bienvenid@</h3>
        </motion.div>
      </header>
    </main>
  )
}


