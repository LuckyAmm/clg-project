import React from 'react'
import ImageSection from './ImageSlider'
import principal from '../images/principal.jpeg'
import Logo from '../images/logo.png'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-screen">
      {/* <marquee behavior="scroll" direction="left" className='absolute bg-[#ffffffb3] text-gray-900 top-12 lg:top-[60px] w-screen py-[6px] '><span className='bg-black text-white animate-pulse p-1 rounded'>NEW</span></marquee> */}
      <Landing />
      <ImageSection />
      <Message />
      <Departments />
    </div>
  )
}


function Landing() {

  return (<>

    <div className=" min-h-screen  overflow-hidden  absolute top-0 left-0 -z-20"><div className=" clgPic h-screen w-screen"></div></div>
    <main className=' h-screen flex items-center justify-center lg:justify-start select-none'>
      <div className=" px-6 lg:px-8 lg:w-[60%] w-full  ">
        <div className="mx-auto max-w-2xl">

          <div className="">
            <div className='flex gap-5 items-center'>

              <img src={Logo} alt='Logo' className='h-32' />
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
        <ArrowDownIcon className='h-8 w-8 text-black p-2 bg-white bg-opacity-60 hover:bg-opacity-75 cursor-pointer rounded-full absolute bottom-12 left-[50%] animate-bounce hover:animate-none' onClick={() => { document.getElementById('images').scrollIntoView({ behavior: 'smooth' }) }} />
      </div>
    </main>
  </>
  )
}


function Message() {
  return (
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
  )
}


function Departments() {

  const branchInfo = [
    {
      'nameShort': 'cme',
      'nameFull': 'Computer Science Engineering',
      'imageUrl': 'cme.png',
      'abtBranch': 'Computer Science Engineering (CSE) encompasses a variety of topics that relates to computation, like analysis of algorithms, programming languages, program design, software, and computer hardware.'
    }, {
      'nameShort': 'ece',
      'nameFull': 'Electronics and Communications Engineering',
      'imageUrl': 'ece.png',
      'abtBranch': 'Electronics and Communications Engineering (ECE) involves researching, designing, developing, and testing electronic equipment used in various systems.'
    },
    {
      'nameShort': 'mec',
      'nameFull': 'Mechanical Engineering',
      'imageUrl': 'mec.jpeg',
      'abtBranch': 'mechanical engineering, the branch of engineering concerned with the design, manufacture, installation, and operation of engines and machines and with manufacturing processes. ',
    }
  ]

  return (
    <div className='pt-32 h-fit md:h-fit  md:pt-20 mb-16 '>
      <h2 className='dividerStyle'>DEPARTMENTS</h2>
      <div className='flex flex-wrap gap-8 lg:gap-12 px-8 mt-16 items-center justify-evenly lg:px-16'>
        {
          branchInfo.map((branch) => {
            return(

            <div key={branch.nameShort} className="w-full max-w-sm rounded-t-xl overflow-hidden shadow-lg border-2 ">
              <img className="w-full object-cover object-center h-64 select-none " src={`${process.env.PUBLIC_URL}/images/${branch.imageUrl}`} alt="Sunset in the mountains" draggable={false} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">{branch.nameFull}</div>
                <p className="text-gray-700 text-base">
                  {branch.abtBranch}
                </p>
              </div>
              <Link to={`/departments`} className=' bg-indigo-600 font-semibold px-4 py-1 w-full hover:bg-indigo-700 text-white mx-auto'>SHOW INFO</Link>
            </div>
            )

          })
        }
      </div>
    </div>
  )
}
