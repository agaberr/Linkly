import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { useConversation } from '../../context/useConversation'

const OtherProfilePage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const {selectedConversation, setSelectedConversation} = useConversation();

  const conversation = location.state?.selectedConversation || selectedConversation;


  useEffect(() => {
    if (location.state?.selectedConversation) {
      setSelectedConversation(location.state.selectedConversation);
    }
  }, [location.state, conversation]);

  const handleClickChatButton = () => {
    navigate('/home');
  }

  return (
    <div className='flex sm:w-[1600px] md:h-[700px] h-screen items-center justify-center'>
      <div className='flex gap-2 flex-col items-center mr-20'>
        <div className='avatar mb-2'>
          <div className='w-30 rounded-full'>
            <img 
              src={`${conversation.profile_picture}`}
              alt='user avatar'
            />
          </div>
        </div>
        <h1 className='text-5xl text-gray-700 font-bold mb-2'>
          {conversation.username}
        </h1>

         {/* TODO: Add BIO */}
        {/* <p className='text-xl text-gray-600 mb-4'>
          Bio
        </p> */}
        <p className='text-gray-500 text-l font-semibold'>
          Active Now
        </p>
        <button
          onClick={handleClickChatButton}
          className="btn border-none rounded-box bg-blue-600 btn-lg hover:bg-blue-700 text-lg mt-4 text-center text-white px-28">Chat</button>
      </div>

      <div className='flex flex-col gap-2 mt-10'>
        

        </div>
      </div>
  )
}

export default OtherProfilePage
