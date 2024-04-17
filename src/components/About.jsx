import React from 'react'

function About() {
  return (
    <div className='w-full p-[6vw] bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl '>
      <h1 className='Neue Montreal text-[4vw] leading-[3.5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full border-t-[2px] border-[#7f8e41] mt-[6vw] flex py-[1.5vw]'>
      <div className='w-1/3 text-[1.5vw]'>
        <h1>What you can expect:</h1>
      </div>
      <div className='w-2/3 flex justify-between '>
        <div className='w-1/2'>
            <div>
                <p className='text-[1.5vw]'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people</p><br/>
            </div>
            <div className='text-[1.5vw]'>
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
        </div>
        <div className='w-1/2 ml-[15vw] text-[1.5vw]'>
        <h1 className='p-10'>S:</h1><br/>
            <a className='p-10'>instagram</a><br/>
            <a className='p-10'>facebook</a><br/>
            <a className='p-10'>Linkedin</a><br/>
        </div>
      </div>

      </div>
    <div className='mt-20vw'>
    <div className='w-full border-t-[2px] border-[#7f8e41] mt-[6vw]  py-[1.5vw] flex justify-between'>
        <div>
            <h1 className='text-[4vw]'>Our approach:</h1>
            <div className='w-[15vw] flex items-center mt-8 px-[2vw] py-[1vw] text-[1.3vw] text-white bg-[#20260b] border-2 border-[#7f8e41] rounded-full gap-8 '>
            <button className='uppercase'>read more</button> 
            <span className='rotate-[45deg]'>

            </span> 
            </div>
        </div>
        <div className='h-[35vw] w-1/2 bg-[#98a952] rounded-2xl'>
            {/* photo */}
        </div>
    </div>
   
    </div>
    </div>
  )
}

export default About
