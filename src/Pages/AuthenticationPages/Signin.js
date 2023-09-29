import React, { useState } from 'react'
import svg from '../../assets/E-payment and digital wallet securitylogin_svg.svg'
import arrow from '../../assets/Arrow - Left.svg'

const Signin = () => {

  const [signInData, setSignInData] = useState({email:"", password:""})

  const handleChange = (e) => {
    e.preventDefault()
    setSignInData({...signInData, [e.target.name]: e.target.value})
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

          <div className='lg:px-[30%] px-10 flex items-center flex-col gap-5 py-20'>
            <h1 className='font-bold text-4xl'>
              Welcome
            </h1>
            <p className='text-[#8F959E] text-sm'>
              Please enter your data to continue
            </p>
          </div>

          <form className='lg:px-[30%] px-10 py-20 flex flex-col  gap-12'>
            <div className=' relative'>

              <label htmlFor="username" className='bg-white text-[#343434B2] absolute text-sm top-[-10px] left-[20px]'>Username</label>

              <input placeholder='Example@gmail.com' type="email" className='w-full border-2 border-[#67949E] py-2 px-5 rounded-full ' name='email' onChange={handleChange}/>


            </div>
            <div className=' relative'>

              <label htmlFor="username" className='text-[#343434B2] bg-white absolute text-sm top-[-10px] left-[20px]'>Password</label>

              <input placeholder='Enter password' type="password" className='w-full border-2 border-[#67949E] py-2 px-5 rounded-full' name='password' onChange={handleChange} />


            </div>

            <div className='flex w-full justify-center'>
              <button className='border-[#9E7167] border-2 rounded-lg px-16 py-2 shadow-lg font-bold text-xl text-[#9E7167]'>
                Login
              </button>
            </div>

            <div className='flex justify-end'>
              <p className='text-[#EA4335]'>
                Forgot password?
              </p>
            </div>


            <p className='text-center'>
          By connecting your account confirm that you agree with our <span className='font-bold'>Term and Condition</span>
          </p>

          </form>

         

        </div>
      </div>
    </>
  )
}

export default Signin