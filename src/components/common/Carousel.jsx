import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel({ shops }) {
  const [index, setIndex] = useState(0);

  const incrementIndex = () => {
    if (index === shops.length - 1) {
      setIndex(0);
    } else {
      setIndex(prev => prev + 1);
    }
  }

  const decrementIndex = () => {
    if (index === 0) {
      setIndex(shops.length - 1);
    } else {
      setIndex(prev => prev - 1);
    }
  }


  return (
    <div className="h-[256px] md:h-[512px] container mx-auto relative">
      <button className="absolute top-1/2 -translate-y-1/2 left-4 p-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300 ease-in-out cursor-pointer" onClick={decrementIndex}>
        <FaArrowLeft />
      </button>
      <button className="absolute top-1/2 -translate-y-1/2 right-4 p-4  rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300 ease-in-out cursor-pointer" onClick={incrementIndex}>
        <FaArrowRight />
      </button>

      <picture className="block container w-full h-full">
        <img className="w-full h-full object-contain cursor-pointer rounded-sm transition duration-300 ease-in-out" src={shops[index].src} alt={shops[index].alt} />
      </picture>
    </div>
  )
}

export default Carousel