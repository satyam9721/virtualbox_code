import React from 'react';

import { BsFillTelephoneFill } from "react-icons/bs";

const Footer_cart = ({details, text}) => {
  return (
    <div className='bg-[#215d72] rounded-xl flex flex-row gap-10 text-xs px-4 py-4 w-1/4 items-center justify-center'>
        <div className=' '><BsFillTelephoneFill /></div>
        <div>
            <div>
                {details}
            </div>
            <div>
                {text}
            </div>
        </div>
    </div>
  )
}

export default Footer_cart