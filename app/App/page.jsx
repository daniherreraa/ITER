"use client"
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import NavBar from '../componentes/UI/NavBar'
import PlanetSelector from '../componentes/UI/PlanetSelector'
import TimeIndicator from '../componentes/UI/TimeIndicator'

const Page = () => {

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    lenis.lerp = 0
    requestAnimationFrame(raf)
      
  }, []);

  const [distanceOne, setDistancieOne] = useState(null);
  const [distanceTwo, setDistanceTwo] = useState(null);
    
  return (
    <div id='App' className='w-screen h-screen bg-[#1B1C17] pt-20 px-2 lg:flex lg:gap-20 lg:items-center lg:place-content-center'>
      <NavBar toPage="/" backColor="#B6FF00" textColor="#1B1C17"/>
      <div className='md:w-[42%] h-fit'>
        <PlanetSelector mode="actual" planetColor="#0D0D0D" distance={distanceOne} setDistance={setDistancieOne} />
      </div>
      <div className='md:w-[42%] h-fit'>
        <PlanetSelector mode="destino" planetColor="#B6FF00" distance={distanceTwo} setDistance={setDistanceTwo} />
      </div>
      <TimeIndicator firstDistance={distanceOne} secondDistance={distanceTwo}/>
    </div>
  )
}

export default page
