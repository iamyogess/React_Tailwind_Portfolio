import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProfilePic from "./components/ProfilePic";
import Introduction from "./components/Introduction";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 text-black"><Introduction/></div>
        <div className="col-span-1 text-black hidden md:block"><ProfilePic/></div>
      </div>
    </>
  );
};

export default App;
