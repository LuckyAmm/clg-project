import React from 'react'
import GMR from '../images/gmr.jpg'

export default function Gallery() {
    return (
        <div className='pt-20 px-4 lg:px-16'>
            <h2 className="text-center text-2xl font-bold mb-4">
                <span className="text-red-600 border-b-4 border-gray-900 mr-3">
                    IMAGE
                </span>
                <span className="text-gray-900 border-b-4 border-red-600">
                    GALLERY
                </span>
            </h2>
            <div className='px-8 mt-6 mb-4'>
                <span className='px-4 py-1 bg-gray-300/80 mx-2 cursor-pointer rounded-2xl hover:bg-gray-400/90'>College</span> 
                <span className='px-4 py-1 bg-gray-300/80 mx-2 cursor-pointer rounded-2xl hover:bg-gray-400/90'>Events</span>
                <span className='px-4 py-1 bg-gray-300/80 mx-2 cursor-pointer rounded-2xl hover:bg-gray-400/90'>College</span> 
                <span className='px-4 py-1 bg-gray-300/80 mx-2 cursor-pointer rounded-2xl hover:bg-gray-400/90'>Events</span>
                <span className='px-4 py-1 bg-gray-300/80 mx-2 cursor-pointer rounded-2xl hover:bg-gray-400/90'>College</span> 
                <span className='px-4 py-1 bg-gray-300/80 mx-2 cursor-pointer rounded-2xl hover:bg-gray-400/90'>Events</span>
            </div>
            <div className="imagesBox flex flex-wrap justify-evenly ">
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
                <div className='w-lg md:max-w-xs mb-8  mx-2 select-none ' >
                    <img src={GMR} alt="dfd" draggable={false} className='w-full rounded shadow-lg my-3 object-cover object-center hover:scale-105 hover:shadow-xl transition-all duratoin-1000  ' />
                    <p className='text-sm text-gray-700 text-center'>College Facing Picture Looks like this </p>
                </div>
            </div>
        </div>
    )
}
