import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import sendMessage from "../../../hooks/sendMessage";

const SendMessage = () => {

  const [message, setMessage] = useState(null);

  const sendmessage = sendMessage();
  console.log(message);

  const handleSendMessage = async(e) => {
    e.preventDefault();
    await sendmessage(message);
    setMessage('')
  }

  return (
    <form 
      onSubmit={handleSendMessage}
      className='flex items-center gap-2 mb-[10px] mt-1 px-5'>
      <input 
        type='text'
        placeholder='Enter Your Message'
        className='input input-bordered w-full bg-white text-black max-h-10'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
      <button type='submit' className='absolute insert-y-0 end-5 flex items-center pe-3'>
         <IoMdSend className='font-bold size-6 text-gray-700'/>
      </button>
    </form>
  )
}

export default SendMessage