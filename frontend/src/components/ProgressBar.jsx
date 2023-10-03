import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scollTop, setScrollTop] = useState();
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop; //scrolled height
    const height = document.documentElement.clientHeight; //total height
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  return (
    <div className="w-1.5 bg-gray-200 fixed ml-[-5px] mt-[90px] h-full mb-4">
      <div className="bg-green-600 transition-all ease-out duration-1000" style={{height:`${scollTop}%`}}></div>
    </div>
  );
};

export default ProgressBar;
