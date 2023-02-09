import React from 'react'
import Landing from './Landing'
import ImageSection from './ImageSection'
import Departments from './Departments'
import principal from '../images/principal.jpeg'
// import slides from '../images/clg1.jpg'


export default function Home() {

  return (
    <div className="w-screen">
      <Landing />
      <ImageSection />
      <div className='bg-white py-8 mt-32 mb-4 w-[80%] mx-auto rounded-2xl shadow-lg '>
      <h2 className='font-bold text-center md:dividerStyle text-sm md:text-2xl mb-4 underline underline-offset-2 '>Principal Message</h2>
      <div className='h-fit mb-8 px-4  flex flex-col text-center items-center justify-center gap-4 md:gap-12 md:flex-row md:text-left'>
        <img src={principal} alt="Principal Pic" className='rounded-xl border-2 border-black relative top-1 w-36 float-left mr-3 h-fit select-none ' draggable={false} />
        <div className='w-full lg:w-1/2 '>
          <h4 className='font-semibold'>Dear Students / Parents,</h4>
          <p className='mb-1 text-gray-800 text-sm md:text-base'>We firmly believe that the parents are their child's first and most important teacher. Parents play a vital role in the education of their children. We happily welcome all our parents to take an active role in the education of their children and to be the active participants in our school life.</p>
          <div className="md:ml-16">--- X --- </div>
        </div>
      </div>
      </div>
      <Departments />
    </div>
  )
}
