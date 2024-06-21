import React from 'react'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96   mx-auto'>
          <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-opacity-0'>
            <h1 className='text-4xl font-semibold text-center text-black'>
              Create an account
            </h1>
            <h1 className='text-xl font-normal text-center text-gray-800'>
              Please fill all the fields
            </h1>

            <form>
                <div>
                    <label className='label p-1 pt-5'>
                        <span className='text-base label-text text-gray-600'>username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs bg-white text-black" />
                </div>
                
                <div>
                    <label className='label p-1 pt-5'>
                        <span className='text-base label-text text-gray-600'>email</span>
                    </label>
                    <input type="text" placeholder="Enter email" className="input input-bordered w-full max-w-xs bg-white text-black" />
                </div>

                <div>
                    <label className='label p-1 pt-5'>
                        <span className='text-base label-text text-gray-600'>password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs bg-white text-black" />
                </div>
                
                <a href='#' className='font-normal text-gray-600 hover:underline hover:text-black hover:cursor-pointer block p-2'>Already have an account?</a>
                
                <button class="btn border-none btn-block rounded-box bg-blue-600 btn-lg hover:bg-blue-700 text-3xl mt-1 text-center text-white">Sign Up</button>
            </form>
            
          </div>
        </div>
      )
}

export default SignUp