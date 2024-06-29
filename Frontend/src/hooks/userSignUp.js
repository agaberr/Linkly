import React from 'react'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const userSignUp = () => {

    const { setAuthUser } = useAuthContext();

    const signUp = async({username, bio, email, password}) => {

    if (!username || !password || !email) {
        toast.error("Please fill all fields");
        return;
      }

    if (!email || !validateEmail(email)) {
        toast.error("Please enter valid email!");
        return;
    }
  
      username.trim();
      password.trim();
  
      if (!username || !password) {
        toast.error("Please fill all fields");
        return;
      }
  
      // Sign up to create new user
      try {
        const createUser = await fetch(`/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, bio, email, password }),
        });
  
        if (!createUser.ok) {
          toast.error("Username or email already exists");
          return;
        }
  
        // const createUserData = await createUser.json();
        // console.log(createUserData);
      } catch (err) {
        toast.error("Internal Server Error");
        console.log(err);
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

  
        if (!signIn.ok) {
          toast.error("Couldn't login successfully");
          return;
        }

        const signInToken = await signIn.json();

        // localstorage
        localStorage.setItem("linkly-user", JSON.stringify(signInToken));
        
        setAuthUser(signInToken)

        toast.success("Signed Up successfully");

    } catch (err) {
        toast.error("Internal Server Error");
        console.log(err);
      }
    }

    return {signUp};
}

const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

export default userSignUp