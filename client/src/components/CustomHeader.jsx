import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import "../styles/component.css";

const CustomHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="items-center">
        <div className="fixed top-[10px] right-[10px] sm:right-[50px]  lg:right-[50px] 2xl:right-[100px]   cursor-pointer">
          <span
            onClick={() => setIsOpen(!isOpen)}
            className="text-5xl text-black"
          >
            <RxHamburgerMenu />
          </span>
        </div>
      </div>
      <div
        className={`fixed font-mono bg-black z-[1000]  ${
          isOpen ? "opacity-100  w-[100%]" : "w-[0] opacity-0"
        } h-[100vh] text-white flex justify-center items-center  text-[40px] tracking-[1px] overflow-hidden origin-left duration-300`}
      >
        <div className="fixed top-[10px] right-[10px] sm:right-[50px]  lg:right-[50px] 2xl:right-[100px]   cursor-pointer">
          <span onClick={() => setIsOpen(!isOpen)} className="text-5xl">
            <AiOutlineClose className="text-white" />
          </span>
        </div>
        <ul>
          <li className="">
            <a href="/" className="nav">
              Kategoriler
            </a>
          </li>
          <li className="">
            <a href="/members" className="nav">
              Üyeler
            </a>
          </li>
          <li className="">
            <a href="/coaches" className="nav">
              Antrenörler
            </a>
          </li>
          <li className="">
            <a href="/tools" className="nav">
              Eşyalar
            </a>
          </li>
          <li className="">
            <a href="/package" className="nav">
              Paketler
            </a>
          </li>
          <li className="">
            <a href="/branches" className="nav">
              Branşlar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { CustomHeader };
