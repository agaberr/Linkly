import React from 'react'

const Chat = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-gray-100 pl-5 py-2 cursor-pointer'>
        <div className='avatar online '>
          <div className='w-12 rounded-full'>
            <img src='https://avatar.iran.liara.run/username?username=agaberr' alt='user avatar'/>
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className=''>
            <p className='font-bold  text-gray-900'>
              Ahmed Gaber
            </p>
            <p className='font-normal text-gray-600'>
              hello gaboora how are ...
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat