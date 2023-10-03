import React from 'react'

const Introduction = () => {
  return (
    <div>
        <div className="line flex justify-center flex-col items-center px-2">
            <div className='h-[120px] border-r-[1px] mt-[-2px] z-0'></div>
            <div className="dot w-[5px] h-[5px] bg-green-400 rounded-full"></div>
            <h2 className='mt-5 text-black font-medium text-[13px] tracking-widest'>HELLO! MY NAME IS</h2>
            <h2 className='text-[70px] font-bold text-black text-center tracking-widest mt-5'>YOGESH <br /> SHRESTHA</h2>
            <img src="https://www.memeatlas.com/images/wojakThumbnails/wojak-stage-2.5-doomer-thumbnail.png" className='w-[160px] h[160px] bg-gray-200 p-7 rounded-full object-cover' alt="" />
        </div>
    </div>
  )
}

export default Introduction