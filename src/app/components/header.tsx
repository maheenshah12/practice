"use client"
import {useState} from "react";
// import useState for state management
import Link from 'next/link';
import Image from "next/image";
import vector from "@/app/assets/Vector.png";
import { FaAngleDown } from "react-icons/fa";
import humburger from "@/app/assets/humburger.png";
// import searchicon from "@/app/assets/search icon.png"
import { IoCartOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export default function Header(){

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
   <div className="w-full h-[140px] bg-[#ffffff] mx-auto relative lg:relative">
    {/* top bar */}
    <div className="bg-black text-[#ffffff] py-2 px-4 flex justify-between items-center">
      <p className="font-normal text-[12px] text-center mx-auto">
      Sign up and get 20% off to your first order.
      <span className="font-medium underline cursor-pointer ml-2">Sign Up Now</span>
      </p>
      
      <div className="hidden lg:block w-[20px] h-[20px] mr-[90px]">
            <Image src={vector} alt="Close Icon hover:shadow-lg " />
          </div>
  </div>

    {/* Navbar section */}
  <div className="flex items-center justify-between px-3 lg:px-12 py-6">
    {/* humburger menu for mobile */}
    <div className="lg:hidden">
   <Image src={humburger} alt="humburger" className="w-6 h-6 cursor-pointer"
     onClick={() => setMenuOpen(!menuOpen)}/>
    </div>

    {/* for logo */}
    <div className="font-extrabold font-font text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10">
           <Link href={"/"}>SHOP.CO</Link> 
          </div>
{/* className */}
          {/* navigation links */}
          <ul className="hidden lg:flex gap-6 items-center font-normal text-[16px]">
            <Link href={"/"} className="flex items-center gap-2 hover:underline  hover:text-gray-700 transition duration-200">Shop<FaAngleDown/></Link>
            <Link href={"/onsale"} className="hover:underline hover:text-gray-700 transition duration-400">On Sale</Link>
            <Link href={"/New Arrivals"} className="hover:underline hover:text-gray-700 transition duration-400">New Arrivals</Link>
            <Link href={"/Brands"} className="hover:underline hover:text-gray-700 transition duration-400">Brands</Link>
            <Link href={"/about"} className="hover:underline hover:text-gray-700 transition duration-400">About</Link>
          </ul>
{/* extra */}
{/* search bar */}
<div className="hidden lg:flex w-[477px] h-[48px] px-4 py-3 gap-3 bg-[#F0F0F0] rounded-full items-center hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
<FaSearch  className="text-gray-600"/>
            <p className="text-[#655e5e]">Search for products...</p>
          </div>
{/* extra icon for mobile */}
<div className="flex items-center gap-4">
            {/* <Image src={searchicon} alt="Icon 2" className="w-6 h-6 lg:hidden text-black" /> */}
            <FaSearch  className="w-5 h-4 lg:hidden text-black"/>
            <Link href={"/cart"}><IoCartOutline className="w-6 h-6"/></Link>
             <IoMdContact className="w-6 h-6"/>
          </div>
{/* extra */}
<div
          className={`fixed top-0 left-0 h-full w-1/2 bg-gray-950 shadow-lg transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            {/* <IoMdClose /> */}
             <Image src={vector} alt="Close Icon" className="text-black"/>
          </button>

          {/* Center Heading */}
          <div className="flex justify-center items-center h-[80px] border-b-2">
            <h2 className="text-white font-bold font-font text-xl lg:text-[32px] mb-2">SHOP.Co</h2>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-center py-10 space-y-6 font-medium text-black">
            <Link href={"/"} className="hover:underline text-white hover:text-gray-700 transition duration-200">
              Shop
            </Link>
            <Link href={"/onsale"}  className="hover:underline text-white hover:text-gray-700 transition duration-200">
              On Sale
            </Link>
            <Link href={"/onsale"}  className="hover:underline text-white hover:text-gray-700 transition duration-200">
              New Arrivals
            </Link>
            <Link href={"/onsale"} className="hover:underline text-white hover:text-gray-700 transition duration-200">
              Brands
            </Link>
          </ul>

        </div>
      </div>

{/*  */}
  </div>
   {/* </div> */}




    
    </>
 ) ;
}

//  sm:w-[390px] h-[34px] pt-[9px] pr-[544px] pb-[9px] pl-[10px]gap-10


 {/* <div className="bg-black h-[40px] text-white flex items-center justify-around">
      
    <div className="flex items-center justify-center ml-[200px]">
    <p className="font-title font-[400] text-[14px] leading-[18.9px] sm:flex">Sign up and get 20% off to your first order.</p>
    <p className="font-title underline font-[500] text-[14px] leading-[18.9px] sm: flex"> Sign Up Now</p>
    </div>
     <div className="flex items-center -mr-[130px] sm:hidden ">     
    <Image src={vector} 
      alt="pic" className="w-[13.13px] h-[13.13px] pt-[3.43px] pl-[3.44px]"/>
    </div>
    </div> */}












    {/* mobile menu */}
    // {menuOpen && (
    //   <div className="bg-gray-600 absolute top-5 left-0 w-[300px] h-[500px] shadow-lg">
    //     <ul className="flex flex-col items-center py-4 space-y-4 font-medium ">
    //       <li className="text-black font-font  hover:text-gray-400  transition duration-400">Shop</li>
    //       <li className="text-black font-font  hover:text-gray-400  transition duration-400">On Sale</li>
    //       <li className="text-black font-font  hover:text-gray-400  transition duration-400">New Arrivals</li>
    //       <li className="text-black font-font  hover:text-gray-400  transition duration-400">Brands</li>
    //     </ul>
    //   </div>
    // )}