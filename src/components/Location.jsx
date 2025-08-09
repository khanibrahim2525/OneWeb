import React from 'react'
const spaces = [
  {
    title: "Meeting Pod",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Executive Workspace",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Boardroom",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Collaborative Corner",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80"
  }
];
const Location = () => {
  return (
    <div className="bg-white py-12 px-4">
      
      <h1 className="text-3xl md:text-4xl font-light text-center mb-12">
        See Your <br /> Working Space
      </h1>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-5xl mx-auto place-items-center">
        {spaces.map((space, index) => (
          <div key={index}   className={`flex flex-row gap-5 space-y-2 ${
  (index === 0 || index === 1) ? '-mr-2' : ''} ${
  (index === 2 || index === 3) ? 'ml-47' : ''
}`}>
           
            <img
              src={space.img}
              alt={space.title}
              className="w-40 h-40 object-cover"
            />
            <p className="text-black font-light flex flex-col 
            justify-center items-center ">
              <span>{space.title}</span> 
              <span className="border-b border-gray-400 w-6 -ml-10 "></span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Location