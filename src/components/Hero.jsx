import React from "react";
import Img from "../img/office.avif";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <div className="flex flex-col justify-center items-start space-x-0 space-y-4">
        <div>
          <span className="font-bold text-[4.5rem]  ">
            Your Future <br />
            Office
          </span>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-17">
          <div>
            <img className="h-full w-full object-cover" src={Img} alt="" />
          </div>
          <div className="flex flex-col items-start p-6 ">
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6 text-start  md:mb-8">
              Upgrade your work space, reduce your stress
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 px-3 w-full text-start">
              <div className="mb-4 mt-2 flex flex-col space-y-8 ">
                <p className="text-5xl font-inter font-extralight">40</p>
                <p className="text-sm">Rooms Available</p>
              </div>
              <div className="mb-4 mt-2 flex flex-col space-y-8 ">
                <p className="text-5xl font-extralight">54+</p>
                <p className="text-sm">Reading Resource</p>
              </div>
              <div className="mb-4 mt-2 flex flex-col space-y-8 ">
                <p className="text-5xl font-extralight">77</p>
                <p className="text-sm">Device Setup</p>
              </div>
              <div className="mb-4 mt-2 flex flex-col space-y-8 ">
                <p className="text-5xl font-extralight">24</p>
                <p className="text-sm">Hour Open</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:col-start-2">
        <div className="h-screen  border-l border-r w-2xl border-gray-200"></div>
        <div className="flex md:px-6 lg:px-70 justify-center flex-col w-full h-full">
          <div className="flex  w-2xl  p-0 m-0 mx-auto  h-auto mt-3">
            <img src={Img} alt="" />
          </div>
          <div className="flex items-center mx-auto justify-center  w-full ml-40">
            <button className=" bg-black text-white p-2 space-x-4 md:px-4 lg:px-4  mt-6">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
