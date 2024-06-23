import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import userSignUp from '../../hooks/userSignUp'

const SignUp = () => {

    const [userInputs, setUserInputs] = useState({

      username: '',
      email: '',
      password: '',

    });

    const { signUp } = userSignUp();

    const handleSubmit = async (e) => {
      e.preventDefault();
      await signUp(userInputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96   mx-auto'>
          <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-opacity-0'>
            <h1 className='text-4xl font-semibold text-center text-black'>
              Create an account
            </h1>
            <h1 className='text-xl font-normal text-center text-gray-800'>
              Please fill all the fields
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-1 pt-5'>
                        <span className='text-base label-text text-gray-600'>username</span>
                    </label>
                    <input 
                      type="text"
                      placeholder="Enter username"
                      className="input input-bordered w-full max-w-xs bg-white text-black"
                      value={userInputs.username}
                      onChange={(e) => setUserInputs({...userInputs, username: e.target.value})} 
                      />
                </div>
                
                <div>
                    <label className='label p-1 pt-5'>
                        <span className='text-base label-text text-gray-600'>email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter email"
                      className="input input-bordered w-full max-w-xs bg-white text-black"
                      value={userInputs.email}
                      onChange={(e) => setUserInputs({...userInputs, email: e.target.value})} 
                      />
                </div>

                <div>
                    <label className='label p-1 pt-5'>
                        <span className='text-base label-text text-gray-600'>password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="input input-bordered w-full max-w-xs bg-white text-black"
                      value={userInputs.password}
                      onChange={(e) => setUserInputs({...userInputs, password: e.target.value})} 
                      />
                </div>
                
                <Link to='/signin' className='font-normal text-gray-600 hover:underline hover:text-black hover:cursor-pointer block p-2'>Already have an account?</Link>
                
                <button class="btn border-none btn-block rounded-box bg-blue-600 btn-lg hover:bg-blue-700 text-3xl mt-1 text-center text-white">Sign Up</button>
            </form>
            
          </div>
        </div>
      )
}

export default SignUp