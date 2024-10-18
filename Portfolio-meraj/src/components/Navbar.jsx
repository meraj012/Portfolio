import React from "react";
import pic from "../../public/logo.avif";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 1,
      text: "About",
    },
    {
      id: 1,
      text: "Portfolio",
    },
    {
      id: 1,
      text: "Experience",
    },
    {
      id: 1,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} alt="" className="h-12 w-12 rounded-full" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Mera<span className="text-green-500 text-2xl">j</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8 ">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer">
                  {text}
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24} /> : <FiMenu size={24} />}
            </div>
          </div>
        </div>

        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer ">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
