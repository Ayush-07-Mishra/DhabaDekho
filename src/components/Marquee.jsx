import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full mt-[3vw] h-[18vw] py-[5vw] bg-[#004D43] rounded-tr-3xl rounded-tl-3xl text-white'>
        <div className='text border-t-2 border-b-2 border-zinc-500 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear", repeat: Infinity,duration: 10}} className='text-[8vw] leading-none font-["Founders Grotesk condensed"] font-extrabold uppercase'>SpiceTrail-Explorer</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear", repeat: Infinity,duration: 10}} className='text-[8vw] leading-none font-["Founders Grotesk condensed"] font-extrabold uppercase'>SpiceTrail-Explorer</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear", repeat: Infinity,duration: 10}} className='text-[8vw] leading-none font-["Founders Grotesk condensed"] font-extrabold uppercase'>SpiceTrail-Explorer</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
