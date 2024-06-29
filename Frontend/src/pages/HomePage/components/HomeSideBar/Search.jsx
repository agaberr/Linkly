import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import searchUser from "../../../../hooks/searchUser"
import { useUsersConversationContext } from '../../../../context/usersConversationContext';


const Search = () => {

  const { keyword, setKeyword, setConversations } = useUsersConversationContext();

  const searchuser = searchUser();

  useEffect(() => {

      const searchFunction = async () => {
      const searchResults = await searchuser("");
      setConversations(searchResults);
    }
    searchFunction();
  },[]);

  const handleSearchChange = async(e) => {
    let newKeyword = e.target.value;
    setKeyword(newKeyword);
    if (!newKeyword) {
      newKeyword = ""
    }
      const searchResults = await searchuser(newKeyword);
      setConversations(searchResults);
      // console.log('searchResults: ', searchResults);
  }

  const handleSearchSubmit = async(e) => {
    e.preventDefault();
    setKeyword(newKeyword);
    if (!newKeyword) {
      newKeyword = ""
    }
      const searchResults = await searchuser(newKeyword);
      setConversations(searchResults);

  }


  return (
    <form
      onSubmit={handleSearchSubmit} 
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