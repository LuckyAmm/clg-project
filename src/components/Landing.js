import React from 'react'
import Logo from '../images/logo.png'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function Landing() {
  
  return (<>
  
      <div className=" min-h-screen  overflow-hidden  absolute top-0 left-0 -z-20"><div className=" clgPic h-screen w-screen"></div></div>
    <main className=' h-screen flex items-center justify-center lg:justify-start select-none'>
        <div className=" px-6 lg:px-8 lg:w-[60%] w-full  ">
          <div className="mx-auto max-w-2xl">
            
            <div className="">
              <div className='flex gap-5 items-center'>
                
              <img src ={Logo} alt='Logo' className='h-32'/>
              <h1 className="text-xl font-bold tracking-tight text-white md:text-3xl">
              Dr.B.R.Ambedkar Govt. Model Residential Polytechnic College Bommuru, Rajamahendravaram
              </h1>
              </div>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <button
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                   JOIN IN
                </button>
              </div>
            </div>
          </div>
          <ArrowDownIcon className='h-8 w-8 text-black p-2 bg-white bg-opacity-60 hover:bg-opacity-75 cursor-pointer rounded-full absolute bottom-12 left-[50%] animate-bounce' onClick={()=>{document.getElementById('images').scrollIntoView({behavior:'smooth'})}}/>
        </div>
      </main>
      </>
  )
}
