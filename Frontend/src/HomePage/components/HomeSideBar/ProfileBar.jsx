import React from 'react'
import SignOut from './SignOut'
import { useAuthContext } from "../../../context/AuthContext"

const ProfileBar = () => {

    const { authUser } = useAuthContext();

    
    return (
        <div className='min-h-[65px] border-b-2  border-b-gray-300 relative'>
          <div className='flex gap-2 items-center pl-5 py-2'>
            <div className='avatar'>
              <div className='w-12 rounded-full '>
                <img 
                    className='cursor-pointer'
                    src={`${authUser.userdata.profile_picture}`}
                    alt='user avatar'/>
              </div>
            </div>
          </div>
          <SignOut />
        </div>
      )
}

export default ProfileBar