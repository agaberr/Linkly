import React from 'react'

const InfoBar = () => {
  return (
    <div className='min-h-[65px] border-b-2  border-b-gray-300'>
      <div className='flex gap-2 items-center hover:bg-gray-50 pl-5 py-2 cursor-pointer'>
        <div className='avatar'>
          <div className='w-12 rounded-full '>
            <img src='https://avatar.iran.liara.run/username?username=agaberr' alt='user avatar'/>
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className=''>
            <p className='font-bold  text-gray-900'>
              Msh Ahmed Gaber
            </p>
            <p className='font-normal text-gray-600'>
              Active now
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBar