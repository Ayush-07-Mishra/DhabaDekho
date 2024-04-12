import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-[4vw] py-[2vw] font-["Neue Montreal"] flex justify-between items-center'>
        <div className='Logo font-semibold text-[2vw]'>DhabaDekho</div>
    
        <div className='links flex gap-10'>
            {["Services","About us","Contact us"].map((item,index)=>(
                <a key={index} className={`text-[1.3vw] capatalize font-light ${index ===2 && "ml-56"}`}>{item}</a>
            ))}
        </div>
        
    </div>
  )
}

export default Navbar
