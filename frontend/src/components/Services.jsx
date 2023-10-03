import React from "react";
import Strings from "../shared/Strings";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTED,
      desc: Strings.FRONTED_DESC,
    },
    {
      id: 2,
      title: Strings.BACKEND,
      desc: Strings.BACKEND_DESC,
    },
    {
      id: 3,
      title: Strings.ONLINE,
      desc: Strings.ONLINE_DESC,
    },
  ];
  return (
    <div className="px-12 mt-12">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="text-[24px] font-bold">Services</h2>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
      </div>
        
        <div className="flex justify-around mt-16 gap-6">
            {servicesList.map((item)=> (
                <div className="text-center flex flex-col justify-center items-center">
                    <h2 className="mt-5 font-bold">{item.title}</h2>
                    <h2 className="text-gray-400">{item.desc}</h2>
                    <div className="bg-green-400 p-2 mt-4 text-[35px] cursor-pointer hover:scale-110 transition-all ease-in-out text-center rounded-full">--&gt;</div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Services;
