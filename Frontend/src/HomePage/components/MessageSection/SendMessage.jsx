import React from 'react'
import { IoMdSend } from "react-icons/io";

const SendMessage = () => {
  return (
    <form className='flex items-center gap-2 mb-[10px] mt-1 px-5'>
      <input type='text' placeholder='Enter Your Message' className='input input-bordered w-full bg-white text-black max-h-10' />
      <button type='submit' className='absolute insert-y-0 end-5 flex items-center pe-3'>
         <IoMdSend className='font-bold size-6 text-gray-700'/>
      </button>
    </form>
  )
}

export default SendMessage