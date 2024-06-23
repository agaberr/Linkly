import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import userDeleteAccount from '../../hooks/userDeleteAccount';

const ProfilePage = () => {
  
  const { authUser } = useAuthContext();
  const navigate = useNavigate();

  const deleteAccount = userDeleteAccount();
  
  const handleDeleteAccountButton = () => {
    deleteAccount();
  }

  const handleClickChatButton = () => {
    navigate('/home');
  }

  return (
    <div className='flex sm:w-[1600px] md:h-[700px] h-screen pl-20 pt-20'>
      <div className='flex gap-2 flex-col items-center mr-20'>
        <div className='avatar mb-2'>
          <div className='w-30 rounded-full'>
            <img 
              src={`${authUser.userdata.profile_picture}`}
              alt='user avatar'
            />
          </div>
        </div>
        <p className='text-gray-500 text-l font-semibold'>
          Active Now
        </p>
        <button
          onClick={handleClickChatButton}
          className="btn border-none rounded-box bg-blue-600 btn-lg hover:bg-blue-700 text-lg mt-4 text-center text-white px-28">Chat</button>
      </div>

      <div className='flex flex-col gap-2 mt-10'>
        <h1 className='text-5xl text-gray-700 font-bold mb-2'>
          {authUser.userdata.username}
        </h1>

         {/* TODO: Add BIO */}
        {/* <p className='text-xl text-gray-600 mb-4'>
          Bio
        </p> */}

          <div
            onClick={handleDeleteAccountButton} 
            className='flex items-center space-x-2 p-2 rounded-lg shadow-md group bg-white hover:bg-red-200 cursor-pointer'>
            <MdDeleteForever className='text-red-400 group-hover:text-red-600' size={24} />
            <span className='text-red-400 group-hover:text-red-600'>Delete Account</span>
          </div>
        </div>
      </div>
  )
}

export default ProfilePage
