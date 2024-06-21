import React from 'react'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const userSignIn = () => {

    const { setAuthUser } = useAuthContext();

    const signIn = async({username, password}) => {

    if (!username || !password) {
        toast.error("Please fill all fields");
        return;
      }

      username.trim();
      username.trim();
  
      if (!username || !password) {
        toast.error("Please fill all fields");
        return;
      }

      // signin to generate token
      try {
        const signIn = await fetch(`/api/auth/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        // const statusCode = signIn.status;
        // console.log("Status code:", statusCode);
  
        if (!signIn.ok) {
          toast.error("Couldn't login successfully");
          return;
        }

        const signInToken = await signIn.json();

        // localstorage
        localStorage.setItem("linkly-user", JSON.stringify(signInToken));
        
        setAuthUser(signInToken)

        toast.success("Signed In successfully");

    } catch (err) {
        toast.error("Internal Server Error");
        console.log(err);
      }
    }

    return {signIn};
}

export default userSignIn;
