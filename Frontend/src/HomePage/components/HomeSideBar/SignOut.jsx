import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { useAuthContext } from '../../../context/AuthContext'

const SignOut = () => {

  const { setAuthUser } = useAuthContext();

  const handleSignOut = async() => {

    // signout to remove token
    try {
      const signOut = await fetch(`/api/auth/signout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
     
      if (!signOut.ok) {
        toast.error("Couldn't logout successfully");
        return;
      }
  
      localStorage.removeItem("linkly-user");
      setAuthUser(null);
      toast.success("Signed out successfully");
  
    } catch (err) {
        toast.error("Internal Server Error");
        console.log(err);
      }
  }

  return (
    <div onClick ={handleSignOut}className='w-7 h-7 text-black cursor-pointer absolute mt-[665px] ml-4'>
      <BiLogOut size={30} />
    </div>
  )
}

export default SignOut