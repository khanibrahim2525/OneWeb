import React from "react";
import Box from "./Box";
import { FaReact, FaNodeJs, FaDatabase} from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
const Community = () => {
    const boxData = [
    {
      title: "React Development",
      description: "Learn how to build interactive UIs using React and modern JavaScript tools.",
      link: "/co",
      icon: <FaReact size={30} className="text-blue-500" />,
    },
    {
      title: "Node.js Backend",
      description: "Master backend development with Node.js, Express, and REST APIs.",
      link: "/co",
      icon: <FaNodeJs size={30} className="text-green-500" />,
    },
    {
      title: "Database Management",
      description: "Understand how to design, query, and optimize databases effectively.",
      link: "/co",
      icon: <FaDatabase size={30} className="text-yellow-500" />,
    },
    {
      title: "Code Sandbox",
      description: "Experiment with projects and code snippets directly in your browser.",
      link: "/co",
      icon: <FiCodesandbox size={30} className="" />,
    },
     {
      title: "Database Management",
      description: "Understand how to design, query, and optimize databases effectively.",
      link: "/co",
      icon: <FaDatabase size={30} className="text-yellow-500" />,
    },
    {
      title: "Code Sandbox",
      description: "Experiment with projects and code snippets directly in your browser.",
      link: "/co",
      icon: <FiCodesandbox size={30} className="" />,
    },
     {
      title: "Database Management",
      description: "Understand how to design, query, and optimize databases effectively.",
      link: "/co",
      icon: <FaDatabase size={30} className="text-yellow-500" />,
    },
    {
      title: "Code Sandbox",
      description: "Experiment with projects and code snippets directly in your browser.",
      link: "/co",
      icon: <FiCodesandbox size={30} className="" />,
    },
  ];

  
  return (
    <div className="bg-black min-h-screen ">
      <div>
        <div className="flex justify-center items-center gap-3" >
             <h1 className="text-4xl md:text-5xl font-medium text-white 
 p-7 m-6">
          A Community <br/>   <span className="inline-block ml-10">At Work</span>
        </h1>
        </div>
       
      </div>
  <div className="flex">

       |<div className="flex flex-col md:flex-row  ">
        <div className="flex flex-col items-start md:items-start md:min-w-[280px] ">
          <div className="w-px  flex-grow ml-45 h-[24rem] bg-white "></div>
          <div
            className="
        w-56 h-56
        md:w-64 md:h-64
        rounded-full
        border border-gray-400
        flex items-center justify-center
        text-center
        p-6
        ml-4
      "
          >
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
            </p>
          </div>
          <div className="w-px ml-45  h-[11rem] bg-gray-400"></div>
        </div>
      </div>
      <div className="grid mx-auto items-end overflow-x-auto grid-flow-col
       grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-full    p-6 m-6"
         style={{
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  scrollbarWidth: 'none',          
  msOverflowStyle: 'none', 
  }}
       >
          
          {boxData.map((item, index) => (
          <Box
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            icon={item.icon}
          />
        ))}
        
      </div>
   
       
      </div>
      
      
    
    </div>
  );
};

export default Community;
