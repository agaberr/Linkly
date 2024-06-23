import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import searchUser from "../../../../src/hooks/searchUser"
import { useUsersConversationContext } from '../../../../src/context/usersConversationContext';


const Search = () => {

  const { keyword, setKeyword, setConversations } = useUsersConversationContext();

  const searchuser = searchUser();

  const handleSearchChange = async(e) => {
    e.preventDefault();
    let newKeyword = e.target.value;
    setKeyword(newKeyword);
    if (!newKeyword) {
      newKeyword = ""
    }
      const searchResults = await searchuser(newKeyword);
      setConversations(searchResults);
  }


  return (
    <form
      onSubmit={handleSearchChange} 
      className='flex items-center gap-2 my-3 px-5'>
      <input 
        type='text'
        placeholder='Search Chats' 
        className='input input-bordered w-full bg-white text-black max-h-10 pl-8 px-20'
        value={keyword || ""}
        onChange={handleSearchChange}
        />
      <button type='submit' className='absolute mx-2'>
        <IoSearch className='font-bold size-5'/>
      </button>
    </form>
  )
}

export default Search