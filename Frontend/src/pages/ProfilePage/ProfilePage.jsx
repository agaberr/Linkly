import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { useAuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import userDeleteAccount from '../../hooks/userDeleteAccount';
import userUpdateData from '../../hooks/userUpdateData'

const ProfilePage = () => {
  
  const { authUser } = useAuthContext();
  const navigate = useNavigate();

  const { updateData } = userUpdateData();


  const [isEditing, setIsEditing] = useState(false);
  const [userInputs, setUserInputs] = useState({

    username: authUser.userdata.username,
    bio: authUser.userdata.bio,
    email: authUser.userdata.email,
    password: authUser.userdata.password,

  });


  const deleteAccount = userDeleteAccount();
  
  const handleDeleteAccountButton = () => {
    deleteAccount();
  }

  const handleUpdateInfoButton = () => {
    setIsEditing(true);
  };

  const handleUpdateButton = async (e) => {
    e.preventDefault();
    await updateData(userInputs);
    setIsEditing(false);
  };

  
  const handleClickChatButton = () => {
    navigate('/home');
  }

  return (
    <div className='flex sm:w-[1600px] md:h-[700px] h-screen pl-20 pt-20'>
      <div className='flex gap-2 flex-col items-center mr-20'>
        <div className='avatar mb-2'>
          <div className='w-60 rounded-full'>
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

          {!isEditing ? (
          <>
          <h1 className='text-5xl text-gray-700 font-bold mb-2'>
              {authUser.userdata.username}
            </h1>

            <p className='text-xl text-gray-600 mb-4'>
              {authUser.userdata.bio}
            </p>
            <div
              onClick={handleUpdateInfoButton} 
              className='flex items-center space-x-2 p-2 rounded-lg shadow-md group bg-white hover:bg-gray-200 cursor-pointer'>
              <RiEdit2Line className='text-gray-400 group-hover:text-gray-600' size={24} />
              <span className='text-gray-400 group-hover:text-gray-600'>Update Info</span>
            </div>
            <div
              onClick={handleDeleteAccountButton} 
              className='flex items-center space-x-2 p-2 rounded-lg shadow-md group bg-white hover:bg-red-200 cursor-pointer'>
              <MdDeleteForever className='text-red-400 group-hover:text-red-600' size={24} />
              <span className='text-red-400 group-hover:text-red-600'>Delete Account</span>
            </div>
          </>
        ) : (
          <form 
            onSubmit={handleUpdateButton}
            className='w-[350px]'
          >
                <div>
                    <label className='label p-1 pt-5'>
                        <span className='text-base label-text text-gray-600'>username</span>
                    </label>
                    <input 
                      type="text"
                      placeholder="Enter username"
                      className="input input-bordered w-full max-w-xs bg-white text-black"
                      value={userInputs.username}
                      onChange={(e) => setUserInputs({...userInputs, username: e.target.value})} 
                      />
                </div>

                <div>
                    <label className='label p-1 pt-5'>
                        <span className='text-base label-text text-gray-600'>Bio</span>
                    </label>
                    <label className="input input-bordered w-full max-w-xs bg-white text-black flex items-center gap-2">
                    <input 
                        type="text"
                        placeholder="Enter Bio"
                        value={userInputs.bio}
                        onChange={(e) => setUserInputs({...userInputs, bio: e.target.value})} 
                        />
                    </label>
                </div>
                
                <div>
                    <label className='label p-1 pt-5'>
                        <span className='text-base label-text text-gray-600'>email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter email"
                      className="input input-bordered w-full max-w-xs bg-white text-black"
                      value={userInputs.email}
                      onChange={(e) => setUserInputs({...userInputs, email: e.target.value})} 
                      />
                </div>

                <div>
                    <label className='label p-1 pt-5'>
                        <span className='text-base label-text text-gray-600'>password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="input input-bordered w-full max-w-xs bg-white text-black mb-4"
                      value={userInputs.password}
                      onChange={(e) => setUserInputs({...userInputs, password: e.target.value})} 
                      />
                </div>                
                <button class="btn border-none btn-block rounded-box bg-blue-600 btn-lg hover:bg-blue-700 text-3xl mt-1 text-center text-white ml-[-12px]">Sign Up</button>
            </form>
        )}
        </div>
      </div>
  )
}

export default ProfilePage
