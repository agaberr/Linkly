import React from 'react'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const userUpdateData = () => {

    const { setAuthUser } = useAuthContext();

    const updateData = async({username, bio, email, password}) => {

        if(!username) {
            toast.error("Please fill username field");
        }

        if(!email) {
            toast.error("Please fill email field");
        }

        if(!bio) {
            toast.error("Please fill bio field");
        }

        //TODO: Change Password
  
      try {
        const updateUser = await fetch(`/api/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, bio, email }),
        });
  
        if (!updateUser.ok) {
          toast.error("Username already exists");
          return;
          }
          

        // localstorage
        const userdata = await updateUser.json();

        localStorage.setItem("linkly-user", JSON.stringify(userdata));
            
        setAuthUser(userdata);


        toast.success("User Updated successfully");


      
    } catch (err) {
        toast.error("Internal Server Error");
        console.log(err);
      }


    }


    return {updateData};
}


export default userUpdateData