import React from 'react'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const userSignOut = () => {

    const { setAuthUser } = useAuthContext();

    const signOut = async() => {

        // signout to remove token
        try {
            const signOutreq = await fetch(`/api/auth/signout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
            });
        
            if (!signOutreq.ok) {
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

    return {signOut};
}

export default userSignOut