import React from 'react'
import { Link } from 'react-router-dom';

const Box = ({ title, description, link,icon }) => {
  return (
    <div className="bg-black text-white 
    border border-red-500 p-6
     w-[20rem] sm:w-[20rem] md:w-[20rem] hover:shadow-xl 
      transition-shadow duration-300">
<div className='p-3 m-2 gap-2 flex flex-col'>
   {icon }
 <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-300 mb-6">
       { description }
      </p>
   <Link to={link} className="text-blue-400 hover:underline">
      Learn More →
    </Link>

</div>
    </div>
  )
}

export default Box