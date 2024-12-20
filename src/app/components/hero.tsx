'use client'
import React, { useState } from "react";
import Image from "next/image";
import couple from "@/app/assets/couple.jpg";
import star from "@/app/assets/star.png";
import versace from "@/app/assets/versace.png";
import zara from "@/app/assets/zara.png";
import gucci from "@/app/assets/gucci.png";
import prada from "@/app/assets/prada.png";
import calvin from "@/app/assets/calvin.png";
import shirt from "@/app/assets/shirt.png"
import shirtbutton from "@/app/assets/shirt button.png";
import jeans from "@/app/assets/jeans.png";
import shirtt from "@/app/assets/shirt t.png";
import stars1 from "@/app/assets/stars 1.png";
import stars2 from "@/app/assets/stars2.png";
import stars3 from "@/app/assets/stars 3.png";
import stars4 from "@/app/assets/stars 4.png";
import shirt2 from "@/app/assets/shirt2.png";
import stars5 from "@/app/assets/stars5.png"
import stars6 from "@/app/assets/stars6.png";
import stars7 from "@/app/assets/stars7.png";
import shirt3 from "@/app/assets/shirt3.png";
import shorts from "@/app/assets/shorts.png";
import jeans2 from "@/app/assets/jeans2.png";
import man1 from "@/app/assets/man1.png";
import man2 from "@/app/assets/man2.png";
import girl from "@/app/assets/girl.png";
import gum from "@/app/assets/gum.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import frame10 from "@/app/assets/Frame 10.png";
import sarah from "@/app/assets/sarah.png";
import alex from "@/app/assets/alex.png";
import james from "@/app/assets/james.png";


export default function Super(){

  const [currentIndex, setCurrentIndex] = useState(0);

  const comments = [
    {
      name: "Sarah",
      comment: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
      image: sarah, // Replace with actual path
      frame: frame10,

    },
    {
      name: "Alex",
      comment: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`,
      image: alex, // Replace with actual path
      frame: frame10,
    },
    {
      name: "James",
      comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`,
      image: james, // Replace with actual path
      frame: frame10,
    },
  ];

  // Handle next and previous navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? comments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === comments.length - 1 ? 0 : prev + 1));
  };

  // 
    return(
    <>
         {/* Hero Section */}
         <div className="bg-[#F2F0F1] w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Column 1: Text Section */}
         <div className="flex flex-col items-start justify-center px-6 py-8 lg:px-16 lg:py-20">
            <h1 className="text-4xl font-extrabold lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[#000000] text-opacity-60 text-[16px] leading-[24px] mb-6">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="w-full lg:w-[210px] h-[52px] rounded-full bg-[#000000] text-[#ffffff] font-medium text-[16px] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
              Shop Now
            </button>
           
            <div className="grid grid-cols-2 gap-6 mt-8 lg:grid-cols-3">
            <div>
            <p className="font-bold text-[24px] lg:text-[40px]">200+</p>
            <p className="text-[#000000] text-opacity-60 text-[12px] lg:text-[16px]">
              International Brands
            </p>
           </div>

           <div>
          <p className="font-bold text-[24px] lg:text-[40px]">2,000+</p>
         <p className="text-[#000000] text-opacity-60 text-[12px] lg:text-[16px]">
          High-Quality Products
          </p>
         </div>

         <div className="col-span-2 text-center lg:col-span-1">
        <p className="font-bold text-[24px] lg:text-[40px]">30,000+</p>
       <p className="text-[#000000] text-opacity-60 text-[12px] lg:text-[16px]">
        Happy Customers
       </p>
      </div>
   </div>
</div>

 {/* Column 2: Image Section */}
 <div className="relative flex items-center justify-center group">
  {/* Hero Image */}
  <Image
    src={couple}
    alt="Hero Image"
    className="w-[360px] h-[448px] lg:w-[500px] transition-all duration-300 ease-in-out group"/>

 {/* First Star Icon */}
 <span className="absolute w-[76px] h-[76px] top-[10%] right-[10%] ">
    <Image src={star} alt="Star Icon" />
  </span>

  {/* Second Star Icon */}
  <span className="absolute w-[44px] h-[44px] top-[40%] left-9">
    <Image src={star} alt="Star Icon" />
  </span>
</div>
</div>
        {/* logos */}
        <div className="h-[146px] w-auto bg-[#000000] grid grid-cols-3 gap-4 justify-center items-center 
  lg:h-[122px] lg:grid-cols-5 lg:gap-6">
 {/* Versace Logo */}
 <div className=" w-[166.48px] h-[33.16px] mx-auto group relative">
    <Image 
      src={versace} 
      alt="Versace"/>
  </div>
  {/* Zara Logo */}
  <div className=" w-[91px] h-[38px] mx-auto group relative">
    <Image 
      src={zara} 
      alt="Zara" 
      
    />
  </div>
  {/* Gucci Logo */}
  <div className="w-[109.39px] h-[25.24px] lg:w-[156px] lg:h-[36px] mx-auto group relative">
    <Image 
      src={gucci} 
      alt="Gucci" 
     
    />
  </div>
  {/* Prada and Calvin Klein Logos */}
  <div className="w-[127px] h-[21px] lg:w-[149px] lg:h-[32px] mx-auto group relative">
      <Image 
        src={prada} 
        alt="Prada" 
        
      />
    </div>
     {/* Calvin Klein Logo */}
     <div className=" lg:w-[206.79px] lg:h-[33.35px] mx-auto group relative">
      <Image 
        src={calvin} 
        alt="Calvin Klein" 
        className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:filter group-hover:brightness-125"
      />
    </div>
    {/* </div> */}
  </div> 


  {/*  */}
  <main>
  <div className="w-full flex justify-center items-center mt-10 mb-1">
    <div className="w-[90%] max-w-[1200px]">
        <div className="flex justify-center">
          <h1 className="text-black text-center font-font font-extrabold text-3xl md:text-3xl lg:text-4xl xl:text-5xl pt-4">NEW ARRIVALS</h1>   
     </div>


     {/* main content of this div */}
     <div className=" flex flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-wrap">
      {/* 1div */}
      <div>
            <div className="group shadow-md bg-[#F0EEED] rounded-2xl sm:w-full md:w-[300px] lg:w-[220px] h-[298px] flex justify-center items-center cursor-pointer relative">
                <Image src={shirt} alt=""/>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to Cart</button>
              </div>
              <h1 className="font-bold font-sans pt-2"> T-shirt with Tape Details</h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 " >
              <Image src={stars1} alt=""/>
              </div>
              <span className="text-black font-bold relative ">$120</span>
              {/* <span className="text-gray-500 font-bold line-through ml-2">$360</span> */}
            </div>
      {/* 2 div */}
      <div>
            <div className="group shadow-md bg-[#F0EEED] rounded-2xl  sm:w-full md:w-[300px] lg:w-[220px] h-[298px] flex justify-center items-center cursor-pointer relative">
                <Image src={jeans } alt=""/>
                <span className="absolute top-1 right-1 text-red rounded-full">
                    {/* <Image src={heart} alt=""/> */}
                    </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to Cart</button>
              </div>
              <h1 className="font-bold font-sans pt-2">skinny fit jeans</h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <Image src={stars2} alt=""/>
              </div>
              <span className="text-black font-bold relative -top-2">$240</span>
              <span className="text-gray-500 font-bold line-through  relative -top-2 ml-2">$260</span>
              <span className="text-red-500 bg-red-200 rounded-2xl p-2 relative -top-2 ml-3">-20%</span>
              

            </div>
      {/* 3 div */}
      <div>
            <div className="group shadow-md bg-[#F0EEED] rounded-2xl  sm:w-full md:w-[300px] lg:w-[220px] h-[298px] flex justify-center items-center cursor-pointer relative">
                <Image src={shirtbutton} alt=""/>
                <span className="absolute top-1 right-1 text-red rounded-full">
                    {/* <Image src={heart} alt=""/> */}
                    </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to Cart</button>
              </div>
              <h1 className="font-bold font-sans pt-2">RGB liquid CPU Cooler</h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <Image src={stars3} alt=""/>
              </div>
              <span className="text-black font-bold relative -top-5">$180</span>
            </div>
      {/* 4 div */}
      <div>
            <div className="group shadow-md bg-[#F0EEED] rounded-2xl  sm:w-full md:w-[300px] lg:w-[220px] h-[298px] flex justify-center items-center cursor-pointer relative">
                <Image src={shirtt} alt=""/>
                <span className="absolute top-1 right-1 text-red rounded-full">
                    {/* <Image src={heart} alt=""/> */}
                    </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to Cart</button>
              </div>
              <h1 className="font-bold font-sans pt-2">Sleeve Striped T-shirt</h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <Image src={stars4} alt=""/>
              </div>
              <span className="text-black font-bold mb-64 relative -top-2">$130</span>
              <span className="text-gray-500 font-bold line-through  relative -top-2 ml-2">$160</span>
              <span className="text-red-500 bg-red-200 rounded-2xl p-2 relative -top-2 ml-3">-30%</span>
            </div>
     </div>
  </div>  
</div>
<div className="w-full flex justify-center items-center">
        <div className="w-[80%] flex justify-center border-b-2 border-neutral-100 pb-10">
          <button className="bg-neutral-100 border border-gray-300 rounded-[60px] text-black py-2 px-9 mt-9">View All</button>
        </div>
      </div>
  </main>
  {/*  */}
  {/*  */}
        {/* same copy div */}
        <main>
  <div className="w-full flex justify-center items-center mt-10 mb-1">
    <div className="w-[90%]">
        <div className="flex justify-center">
          <h1 className="text-black  font-font font-extrabold text-5xl md:text-3xl lg:text-4xl xl:text-5xl pt-4">Top Selling</h1>   
     </div>
     {/* main content of this div */}
     <div className=" flex flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-wrap">
      {/* 1div */}
      <div>
            <div className="group shadow-md bg-[#F0EEED] rounded-2xl sm:w-full md:w-[300px] lg:w-[220px] h-[298px] flex justify-center items-center cursor-pointer relative">
                <Image src={shirt2} alt=""/>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to Cart</button>
              </div>
              <h1 className="font-bold font-sans pt-2"> T-shirt with Tape Details</h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 " >
              <Image src={stars5} alt=""/>
              </div>
              <span className="text-black font-bold relative top-2">$210</span>
              <span className="text-gray-500 font-bold line-through relative top-2 ml-2">$232</span>
              <span className="text-red-500 bg-red-200 rounded-2xl p-2 relative top-2 ml-3">-20%</span>
              {/* <span className="text-gray-500 font-bold line-through ml-2">$360</span> */}
            </div>
      {/* 2 div */}
      <div>
            <div className="group shadow-md bg-[#F0EEED] rounded-2xl  sm:w-full md:w-[300px] lg:w-[220px] h-[298px] flex justify-center items-center cursor-pointer relative">
                <Image src={shirt3 } alt=""/>
                <span className="absolute top-1 right-1 text-red rounded-full">
                    {/* <Image src={heart} alt=""/> */}
                    </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to Cart</button>
              </div>
              <h1 className="font-bold font-sans pt-2">skinny fit jeans</h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <Image src={stars6} alt=""/>
              </div>
              <span className="text-black font-bold relative -top-5">$145</span>
              
              

            </div>
      {/* 3 div */}
      <div>
            <div className="group shadow-md bg-[#F0EEED] rounded-2xl  sm:w-full md:w-[300px] lg:w-[220px] h-[298px] flex justify-center items-center cursor-pointer relative">
                <Image src={shorts} alt=""/>
                <span className="absolute top-1 right-1 text-red rounded-full">
                    </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to Cart</button>
              </div>
              <h1 className="font-bold font-sans pt-2">RGB liquid CPU Cooler</h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <Image src={stars7} alt=""/>
              </div>
              <span className="text-black font-bold relative -top-5">$80</span>
            </div>
      {/* 4 div */}
      <div>
            <div className="group shadow-md bg-[#F0EEED] rounded-2xl  sm:w-full md:w-[300px] lg:w-[220px] h-[298px] flex justify-center items-center cursor-pointer relative">
                <Image src={jeans2} alt=""/>
                <span className="absolute top-1 right-1 text-red rounded-full">
                    </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to Cart</button>
              </div>
              <h1 className="font-bold font-sans pt-2">Sleeve Striped T-shirt</h1>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <Image src={stars4} alt=""/>
              </div>
              <span className="text-black font-bold mb-64 relative -top-5">$210</span>
            </div>
     </div>
    </div>
  </div>
  {/*  */}
  <div className="w-full flex justify-center items-center">
        <div className="w-[80%] flex justify-center border-b-2 border-neutral-100 pb-10">
          <button className="bg-neutral-100 border border-gray-300 rounded-[60px] text-black py-2 px-9 mt-9">View All</button>
        </div>
      </div>
  {/*  */}
 </main>
{/* ////////////////////////////////////////////////// */}
<div className="w-full max-w-[1239px] mx-auto h-auto rounded-[40px] bg-[#F0F0F0] p-4">
  {/* Heading */}
  <div className="text-center my-8">
    <h2 className="text-5xl p-6 md:text-3xl lg:text-4xl font-font font-extrabold ">
      BROWSE BY DRESS STYLE
    </h2>
  </div>

  {/* Grid Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {/* Casual */}
    <div className="bg-gray-400 h-[289px] rounded-[20px] relative">
      <Image src={man1} alt="Casual" className="w-full h-full object-cover rounded-[20px]" />
      <span className="absolute top-7 left-6 text-xl md:text-2xl lg:text-3xl font-bold text-black">Casual</span>
    </div>

    {/* Formal */}
    <div className="bg-gray-400 h-[289px] rounded-[20px] relative">
      <Image src={man2} alt="Formal" className="w-full h-full object-cover rounded-[20px]" />
      <span className="absolute top-7 left-6 text-xl md:text-2xl lg:text-3xl font-bold text-black">Formal</span>
    </div>

    {/* Party */}
    <div className="bg-gray-400 h-[289px] rounded-[20px] relative">
      <Image src={girl} alt="Party" className="w-full h-full object-cover rounded-[20px]" />
      <span className="absolute top-7 left-6 text-xl md:text-2xl lg:text-3xl font-bold text-black">Party</span>
    </div>

    {/* Gym */}
    <div className="bg-gray-400 h-[289px] rounded-[20px] relative">
      <Image src={gum} alt="Gym" className="w-full h-full object-cover rounded-[20px]" />
      <span className="absolute top-7 left-6 text-xl md:text-2xl lg:text-3xl font-bold text-black">Gym</span>
    </div>
  </div>
</div>

  
       
 
 
 {/* //////////////////////////////////////////////////// */}
 {/* next part for comments */}
 <main>
      <div className="w-full flex justify-center items-center mt-10 mb-1 relative">
        <div className="w-[80%]">
          {/* Heading and Arrows */}
          <div className="flex justify-between items-center relative">
            <h1 className="text-black font-font font-extrabold text-5xl pt-4">
              OUR HAPPY CLIENTS
            </h1>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <FaArrowLeft
                onClick={handlePrev}
                className="cursor-pointer text-2xl text-gray-500 hover:text-black"
              />
              <FaArrowRight
                onClick={handleNext}
                className="cursor-pointer text-2xl text-gray-500 hover:text-black"
              />
            </div>
          </div>

          {/* Comments Section */}
          <div className="flex justify-between mt-10 gap-4">
            {/* Mobile View: Single Comment */}
            <div className="md:hidden flex justify-center items-center w-full border border-gray-300 rounded-[20px] p-4">
              <div className="text-center">

              <Image
                  src={comments[currentIndex].frame}
                  alt={comments[currentIndex].name}
                  className="mb-4"
                /> 

                <Image
                  src={comments[currentIndex].image}
                  alt={comments[currentIndex].name}
                  className="mb-4"
                />
                <p className="text-gray-600 text-md">{comments[currentIndex].comment}</p>
                {/* <h3 className="text-black font-bold mt-2">
                  - {comments[currentIndex].name}
                </h3> */}
              </div>
            </div>

            {/* Desktop View: All Comments */}
            <div className="hidden md:flex justify-between gap-4 w-full">
              {comments.map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center w-[50%] border border-gray-300 rounded-[20px] p-4"
                >
               <Image
                  src={comments[currentIndex].frame}
                  alt={comments[currentIndex].name}
                  className="mb-4"
                />    

                  <Image
                    src={client.image}
                    alt={client.name}
                    className="mb-4"
                  />
                  <p className="text-gray-600 text-md">{client.comment}</p>
                  {/* <h3 w-20 h-20      rounded-full className="text-black font-bold mt-2">- {client.name}</h3> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>

{/*  */}






</>
    );
}



