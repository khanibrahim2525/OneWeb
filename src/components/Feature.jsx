import React from 'react'
import img from '../img/office.avif'
import Include from './Include'
const Feature = () => {
  return (
    <div>
<div className='flex flex-col md:flex-row lg:flex-row gap-10 p-6 m-6 items-stretch bg-white'>
<div className='flex flex-col p-3 m-3 space-y-2 
items-start justify-start max-w-full md:max-w-[40%]'>
<h1 className='text-4xl md:text-6xl tracking-widest font-medium leading-tight  text-black '>
    A space<br/>to make
    <br/>
     Your own
</h1>
<p className=' text-base md:text-lg max-w-[29rem] text-gray-700'>
    Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et 
</p>
<button className='bg-black text-white p-2 md:px-4 lg:px-4 mt-6'>
    Explore More
</button>
</div> 
 <div className="flex flex-col md:flex-row gap-4  object-cover m-h-full max-w-full ">
        <div className="flex-1 min-w-0">
          <img src={img} alt="" className="object-cover w-full h-full rounded" />
        </div>
        <div className="flex-1 min-w-0">
          <img src={img} alt="" className="object-cover w-full h-full  rounded" />
        </div>
      </div>

</div>
<div className='flex justify-center items-center

'>
<h1 className='text-4xl md:text-6xl 
tracking-widest font-semibold
 leading-tight  text-black '>Space To Suit<br/> 
 <span className="inline-block ml-15">At Work</span></h1>
</div>

<div className='flex flex-col md:flex-row gap-9 p-6 m-6 '>
<div>
    <img src={img} alt=""className=' object-cover' />
</div>
<div className='flex justify-center items-center whitespace-nowrap '><h1> Reay to Move</h1></div>
<div><img src={img} alt="" />
</div>
</div>

<div className='grid sm:grid-cols-3 md:grid-cols-3 p-6 m-6 gap-16'>
    <div className='flex justify-center items-center'>
        <h1 className='text-center'>One and two year lease
available </h1>
    </div>
    <div>
        <img src={img} alt="" />
    </div>
    <div className='flex justify-center space-x-3  items-center'>
        <h1 className=''>One and two year lease
available </h1>
    </div>
</div>
<div className='grid md:grid-cols-2 p-2 m-3 gap-6'>
  <h1 className='font-medium text-5xl text-center'>Included in your <br/> office lease
</h1>
  <Include/>
    <Include/>
    <Include/>
    <Include/>
    <Include/>
    <Include/>
</div>

<div className='flex flex-col justify-center items-center m-5 p-5 gap-8  bg-black '>
<h1 className="text-white text-2xl  sm:text-3xl md:text-4xl
lg:text-5xl font-semibold text-center ">
  Ready To Visit<br/> <span className='ml-8'>In Person</span> 
</h1>
<p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed 
             whitespace-nowrap lg:whitespace-normal max-w-full lg:max-w-2xl 
             text-center">
  Success is not final, failure is not fatal — it is the courage to continue that truly matters.
</p>
<button className="border border-white text-white p-2 md:px-5 lg:px-4 mt-6 rounded">
  Book A Tour
</button>
</div>

    </div>
  )
}

export default Feature