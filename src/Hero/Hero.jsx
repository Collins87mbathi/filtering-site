import React from 'react'

const Hero = () => {
  return (
    <div className="mx-auto max-w-4xl xl:max-w-6xl relative">
    <div className="max-h-[500px] relative">
      <div className="absolute w-full text-gray-200 space-y-5 h-full bg-black/40 flex flex-col justify-center items-center">
        <h1 className="px-4 text-[#F7F7F7] md:text-4xl font-extrabold text-2xl">
          Taking space to another level
        </h1>
        <h1 className="px-4 text-[#F7F7F7] md:text-4xl font-extrabold text-2xl">
          lets go beyond
        </h1>
        <h2 className="px-4 text-[grey] md:text-3xl font-extrabold text-xl">
          #conquer space
        </h2>
        
      </div>
      <img
        className="w-full max-h-[500px] object-cover"
        src="https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhY2V4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        alt="/"
      />
    </div>
  </div>
  )
}

export default Hero