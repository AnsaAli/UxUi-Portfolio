import React from "react";

const Header = () => {
  return (
  
      <div className= "bg-violet-200 text-xl text-black font-bold p-10 flex justify-between px-16 items-center shadow-sm">
        <div>
          <h3>Ansa's Portfolio</h3>
        </div>
        <div>
          <ul className="flex gap-10">
           
            <li>MERN</li>
            <li>FRONTEND</li>
            <li>UX/UI</li>
            <li>ABOUT</li>
            <li>RESUME</li>
          </ul>
        </div>
      </div>
  
  );
};

export default Header;
