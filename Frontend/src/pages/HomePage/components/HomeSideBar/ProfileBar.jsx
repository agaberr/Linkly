import React from 'react'
import SignOut from './SignOut'
import { useAuthContext } from "../../../../context/AuthContext"
import { useNavigate } from 'react-router-dom';

const ProfileBar = () => {

    const { authUser } = useAuthContext();
    const navigate = useNavigate();

    const handleImgClick = () => {
      navigate('/profile');
    }

    
    return (
        <div className='min-h-[65px] border-b-2  border-b-gray-300 relative'>
          <div className='flex gap-2 items-center pl-5 py-2'>
            <div className='avatar'>
              <div className='w-12 rounded-full '>
                <img 
                    className='cursor-pointer'
                    src={`${authUser.userdata.profile_picture}`}
                    alt='user avatar'
                    onClick={handleImgClick}
                    />
              </div>
            </div>
          </div>
          <SignOut />
        </div>
      )
}

export default ProfileBar