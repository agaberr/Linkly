import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <form className='flex items-center gap-2 mb-8 px-5'>
      <input type='text' placeholder='Search Chats' className='input input-bordered w-full bg-white text-black max-h-10 pl-8 px-20' />
      <button type='submit' className='absolute mx-2'>
        <IoSearch className='font-bold size-5'/>
      </button>
    </form>
  )
}

export default Search