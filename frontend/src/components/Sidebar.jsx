import React from "react";
// import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <div className="w-[90px] bg-white border-r-[1px] h-screen fixed flex flex-col items-center justify-around">
        <h2 className="-rotate-90 tracking-widest">HOMEPAGE</h2>
        <div className="flex flex-col gap-7 text-[20px]">
          {/* <IoLogoFacebook />
          <IoLogoLinkedin />
          <IoLogoTwitter /> */}
          <span className=" bg-black text-white p-3 rounded-md cursor-pointer hover:scale-110 transition-all ease-in-out">F</span>
          <span className=" bg-black text-white p-3 rounded-md cursor-pointer hover:scale-110 transition-all ease-in-out">L</span>
          <span className=" bg-black text-white p-3 rounded-md cursor-pointer hover:scale-110 transition-all ease-in-out">X</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
