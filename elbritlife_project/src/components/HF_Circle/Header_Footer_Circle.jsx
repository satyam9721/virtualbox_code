import React from 'react'

const Header_Footer_Circle = ({desc, text}) => {
  return (
    <div className='flex flex-col items-center justify-center -mt-20 px-10 py-10'>
        <div className='w-20 h-20 rounded-full bg-[#fff]'>
        </div>
        <div >
            <p className='p-3'>{desc}</p>
        </div>
        <div>
            <p className='text-[10px] flex items-center justify-center'>{text}</p>
        </div>
    </div>
  )
}

export default Header_Footer_Circle