import React from 'react'
import Slider from './Slider'

const slides =[
    "clg1.jpg",
    "clg2.jpg",
    "clg3.jpg",
    ]

export default function ImageSlider() {
    return (
        <div id='images' className='pt-32 h-fit lg:h-screen space-y-24 lg:space-y-2 md:pt-20'>
            <h2 className='dividerStyle'>IMAGES</h2>
            <div className='max-w-4xl h-fit md:h-[550px] mx-auto mt-5 border-2 rounded-lg '>
                <Slider >
                    {slides.map((image) => (
                        <img className='w-fit object-fill select-none' src={`${process.env.PUBLIC_URL}/images/${image}`} alt={image} key={image} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}
