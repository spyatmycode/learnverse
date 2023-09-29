import React from 'react'
import { RiHome2Line, RiHome6Line, RiHome8Line } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className=' fixed  bottom-2 w-full' >
        
      <section className=' relative w-[90%]  pt-5'>
            <div className=' bg-white rounded-full flex gap-4 justify-between px-4 py-2 '>
                <div className=' flex justify-center items-center flex-col gap-1'>
                <RiHome8Line className=' text-[#9E7167] ' size={30}/>
                <h1>Home</h1>
                </div>
               
                <div className=' flex justify-center items-center flex-col gap-1'>
                <RiHome8Line className=' text-[#9E7167] ' size={30}/>
                <h1>Home</h1>
                </div>
               
                <div className=' flex justify-center items-center flex-col gap-1'>
                <RiHome8Line className=' text-[#9E7167] ' size={30}/>
                <h1>Home</h1>
                </div>
               
                <div className=' flex justify-center items-center flex-col gap-1'>
                <RiHome8Line className=' text-[#9E7167] ' size={30}/>
                <h1>Home</h1>
                </div>
               
            </div>
        </section>
      
    </div>
  )
}

export default Navbar
