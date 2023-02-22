import React from 'react'
import LogoECE from '../images/ece.png';
import LogoMEC from '../images/mec.jpeg';
import LogoCME from '../images/cme.png';

export default function Departments() {
  return (
    <div className='pt-32 h-fit md:h-fit  md:pt-20 mb-16 '>
        <h2 className='dividerStyle'>DEPARTMENTS</h2>
        <div className='flex flex-wrap gap-8 lg:gap-12 px-8 mt-16 items-center justify-evenly lg:px-16'>
          
        <div className="w-full max-w-sm rounded-t-xl overflow-hidden shadow-lg border-2 ">
            <img className="w-full object-cover object-center h-64 select-none " src={LogoCME} alt="Sunset in the mountains" draggable={false} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">Computer Science Engineering</div>
              <p className="text-gray-700 text-base">
              Computer Science Engineering (CSE) encompasses a variety of topics that relates to computation, like analysis of algorithms, programming languages, program design, software, and computer hardware.
              </p>
            </div>
            <button className=' bg-indigo-600 font-semibold px-4 py-1 w-full hover:bg-indigo-700 text-white'>SHOW INFO</button>
          </div>

          <div className="w-full max-w-sm rounded-t-xl overflow-hidden shadow-lg border-2">
            <img className="w-full object-cover object-center h-64 select-none " src={LogoECE} alt="Sunset in the mountains" draggable={false} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">Electronics and Communications Engineering</div>
              <p className="text-gray-700 text-base">
              Electronics and Communications Engineering (ECE) involves researching, designing, developing, and testing electronic equipment used in various systems.
              </p>
            </div>
            <button className=' bg-indigo-600 font-semibold px-4 py-1 w-full hover:bg-indigo-700 text-white'>SHOW INFO</button>
          </div>

          <div className="w-full max-w-sm rounded-t-xl overflow-hidden shadow-lg border-2">
            <img className="w-full object-cover object-center h-64 select-none " src={LogoMEC} alt="Sunset in the mountains" draggable={false} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">Mechanical Engineering</div>
              <p className="text-gray-700 text-base">
              mechanical engineering, the branch of engineering concerned with the design, manufacture, installation, and operation of engines and machines and with manufacturing processes. 
              </p>
            </div>
            <button className=' bg-indigo-600 font-semibold px-4 py-1 w-full hover:bg-indigo-700 text-white'>SHOW INFO</button>
          </div>

        </div>
      </div>
  )
}
