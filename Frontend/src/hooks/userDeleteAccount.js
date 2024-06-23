import React from 'react'
import { toast } from 'react-hot-toast'
import userSignOut from '../hooks/userSignOut'

const userDeleteAccount = () => {
  
  const { signOut } = userSignOut();


  const userdeleteaccount = async () => {

    try {

      const req = await fetch(`/api/users`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        });
    
        if (!req.ok) {
        toast.error("Couldn't delete user successfully");
        return;
        }

        await signOut();

    }catch(err) {
      toast.error("Internal Server Error");
          console.log(err);
    }
  } 

  return userdeleteaccount;

}

export default userDeleteAccount