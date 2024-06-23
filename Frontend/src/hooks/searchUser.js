import React from 'react'
import toast from 'react-hot-toast'

const searchUser = () => {

    const searchuser = async (keyword) => {
        try {

        const req = await fetch(`/api/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "keyword": keyword }),
            });
        
            if (!req.ok) {
            toast.error("error searching");
            return;
            }
            return await req.json();

        } catch(err) {
            toast.error("Internal Server Error");
                console.log(err);
          }

    }

    return searchuser;
}

export default searchUser;