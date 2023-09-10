"use client"

import {BsArrowBarRight} from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NavBar = ({toPage, backColor, textColor}) => {

  return (
    <motion.div initial={{ y: '-50vw' }} animate={{ y: 0 }} transition={{ ease: "easeOut", duration: 1 }} id="NavBar" className={`w-36 h-16 flex align-middle top-0 left-0 absolute pt-1 pb-1 px-1 gap-3 z-10`} style={{backgroundColor: `${backColor}`}}>
        <h1 id="brandITER" className="flex text-4xl mt-2" style={{color: `${textColor}`}}>ITER</h1>
        <Link href={toPage} className="w-full">
          <button className="w-full h-full flex justify-center items-center" style={{backgroundColor: `${textColor}`}}><BsArrowBarRight className='h-4 w-4' style={{color: `${backColor}`}} />
          </button>
        </Link>   
    </motion.div>
  )
}

export default NavBar
