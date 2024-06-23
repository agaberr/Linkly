import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-hot-toast";
import userSignOut from '../../../hooks/userSignOut'

const SignOut = () => {

  const { signOut } = userSignOut();

  const handleSignOut = async() => {
    await signOut();
  }

  return (
    <div onClick ={handleSignOut}className='w-7 h-7 text-black cursor-pointer absolute insert-y-0 end-5 mt-[-50px]'>
      <BiLogOut size={30} />
    </div>
  )
}

export default SignOut