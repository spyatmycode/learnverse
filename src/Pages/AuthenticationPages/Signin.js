import React, { useState } from 'react'
import svg from '../../assets/E-payment and digital wallet securitylogin_svg.svg'
import arrow from '../../assets/Arrow - Left.svg'
import arrowmobile from '../../assets/Arrow - Leftmobile.svg'

const Signin = () => {

  const [signInData, setSignInData] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    e.preventDefault()
    setSignInData({ ...signInData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  console.log(signInData);

  return (
    <>
      <div className='flex h-screen w-full'>
        <div className='hidden lg:flex flex-col items-center justify-center  lg:w-2/5 bg-gradient-to-r from-[#8498CB] via-[#8E89A4] to-[#9E7167]'>

          <img src={svg} width={"350px"} alt="" />

          <h1 className='font-extrabold text-6xl text-white'>LOGIN</h1>

        </div>
        <div className='lg:w-3/5 h-screen w-full'>

          <div className='lg:px-[30%] px-10 flex items-center flex-col gap-5 py-10'>
            <div className='absolute left-[10%] top-[10%] lg:hidden'>
              <img src={arrowmobile} width={"30px"} alt="arrow" />
            </div>
            <h1 className='font-bold text-4xl'>
              Welcome
            </h1>
            <p className='text-[#8F959E] text-sm'>
              Please enter your data to continue
            </p>
          </div>
          <div className='lg:hidden px-10 flex items-center flex-col '>
            <img src={svg} width={"200px"} alt="mobile__svg" />
          </div>

          <form className='lg:px-[30%] px-10 py-10 flex flex-col  gap-12' onSubmit={handleSubmit}>
            <div className=' relative'>

              <label htmlFor="username" className='bg-white text-[#343434B2] absolute text-sm top-[-10px] left-[20px]'>Username</label>

              <input placeholder='Example@gmail.com' type="email" className='w-full border-2 border-[#67949E] py-2 px-5 rounded-full ' name='email' onChange={handleChange} />


            </div>
            <div className=' relative'>

              <label htmlFor="username" className='text-[#343434B2] bg-white absolute text-sm top-[-10px] left-[20px]'>Password</label>

              <input placeholder='Enter password' type="password" className='w-full border-2 border-[#67949E] py-2 px-5 rounded-full' name='password' onChange={handleChange} />


            </div>

            <div className='flex w-full justify-center'>
              <button className='lg:border-[#9E7167] lg:border-2 lg:rounded-lg px-20 py-2 shadow-lg font-bold text-xl lg:text-[#9E7167] rounded-full bg-gradient-to-r from-[#8498CB] via-[#8E89A4] to-[#9E7167] text-white lg:bg-none '>
                Login
              </button>
            </div>

            <div className='flex justify-end'>
              <p className='text-[#EA4335]'>
                Forgot password?
              </p>
            </div>

            <div className='flex w-full'>
              <span className='flex w-full justify-between'>
                <p>
                  Remember me
                </p>


                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                </label>



              </span>

            </div>


            <p className='text-center text-xs'>
              By connecting your account confirm that you agree with our <span className='font-bold'>Term and Condition</span>
            </p>

          </form>



        </div>
      </div>
    </>
  )
}

export default Signin