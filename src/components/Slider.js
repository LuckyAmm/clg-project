import { ChevronRightIcon,ChevronLeftIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

// import { ChevronLeft, ChevronRight } from "react-feather"


export default function Carousel({
  children: slides,
  // autoSlide = false,
  // autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  // useEffect(() => {
  //   if (!autoSlide) return
  //   const slideInterval = setInterval(next, autoSlideInterval)
  //   return () => clearInterval(slideInterval)
  // }, [])
  return (
    <div className="overflow-hidden relative mx-auto h-full flex">
      <div
        className="flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeftIcon width={30} strokeWidth={1} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
        <ChevronRightIcon width={30} strokeWidth={1}/>
        </button>
      </div>

      <div className="absolute bottom-0 right-0 left-0 bg-[#00000065] py-2 h-8">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
            key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}