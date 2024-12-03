import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [message, setMessage] = useState('')

  return (
    <section className='h-screen flex items-center justify-center'>

        <div className='max-w-sm border shadow bg-white mx-auto p-8'>

            <h2 className='text-2xl font-semibold pt-5 '>Please Login</h2>

            <form className='space-y-5 max-w-sm mx-auto pt-8'>

                <input type="email" name='email' id='email' placeholder='Email ID' required className='w-full bg-gray-100 focus:outline-none px-5 py-3' />

                <input type="password" name='password' id='password' placeholder='Password' required className='w-full bg-gray-100 focus:outline-none px-5 py-3' />
                
                {
                    message && <p className='text-red-500'>{message}</p>
                }

                <button type='submit'
                    className='w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md'
                >
                    Login
                </button>

            </form>

            <p className='my-5 italic text-sm text-center'>
                Don't have an account? 
                <Link to="/register">Register</Link> here.
            </p>

        </div>

    </section>
  )
}

export default Login