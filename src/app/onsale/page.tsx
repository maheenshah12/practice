'use client'
// import react from "react";
import {useRouter} from "next/navigation";
import Footer from "@/app/components/footer";
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Link from "next/link";
import Image from "next/image";
import filter from "@/app/assets/filter.png";
import othergreaterthan from"@/app/assets/other greaterthan.png";
import greaterthan from "@/app/assets/greaterthan.png";
import check from "@/app/assets/check.png";
import downward from "@/app/assets/downward.png";
import page2shirt from "@/app/assets/page 2 shirt.png";
import page2stars from "@/app/assets/page 2 stars.png";
import page2shirt1 from "@/app/assets/page 2 shirt 1.png";
import page2stars2 from "@/app/assets/page 2 stars2.png";
import page2shirt2 from "@/app/assets/page 2 shirt 2.png";
import page2stars3 from "@/app/assets/page 2 stars3.png";
import page2jeans from "@/app/assets/page 2 jeans.png";
import page2shirt3 from "@/app/assets/page 2 shirt 3.png";
import page2shirt4 from "@/app/assets/page 2 shirt 4.png";
import page2shirt5 from "@/app/assets/page 2 shirt 5.png";
import page2shirt6 from "@/app/assets/page 2 shirt 6.png"; 
import page2shorts from "@/app/assets/page 2 jeans1.png";
import leftarrow from "@/app/assets/left arrow.png";
import dots from "@/app/assets/dots.png";
import rightarrow from "@/app/assets/right arrow.png";

// slider ui code
function valuetext(value: number) {
    return `${value}°C`;
  }

export default function  OnSale(){
// slider ui code
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    }

    // for new page routing
const router = useRouter();

const handleImageClick = ()=> {
  // for navigation to the next page 
  router.push('/onsale/Details');
}
    return(
        <>
        <main className="pb-2">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6"/>
        <div className="flex items-center gap-4 relative pl-12">
        <div><Link href={"/"} className="text-gray-400 ">Home</Link></div>
        <Image src={greaterthan} alt="" className="w-3 h-3"/>
        <p className="font-font">Casual</p>
        </div>


    <div className="flex p-5 md:space-x-5 items-start">


        <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
                <span className="font-bold text-black text-xl">Filters</span>
           <Image src={filter} alt=""/>
            </div>
        <hr className="border-t-black/10"/>
        
        <div className="flex flex-col space-y-0.5 text-black">
            <a className="flex items-center justify-between py-2" href="./onsale">T-shirts
            <Image src={greaterthan} alt=""/>
            </a>

            <a className="flex items-center justify-between py-2" href="./onsale">Shorts
            <Image src={greaterthan} alt=""/>
            </a>

            <a className="flex items-center justify-between py-2" href="./onsale">Hoodie
            <Image src={greaterthan} alt=""/>
            </a>

            <a className="flex items-center justify-between py-2" href="./onsale">Jeans
            <Image src={greaterthan} alt=""/>
            </a>
        </div>
      <hr className="border-t-black/10"/>
      {/* mai nai yahan matrrial ui  liberary import karwaye hai or jahan jahan ui ka comments hai mens wahan per ui import hai  */}
      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-black text-xl'>Price</h3>
        <span> <Image src={othergreaterthan} alt="" className='cursor-pointer'/></span>
      </div>
      <div>
      <Box sx={{ width: 250,}}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
            color: 'black', // Sets the slider track and thumb color
            '& .MuiSlider-thumb': {
              borderColor: 'black', // Thumb border color
            },
            '& .MuiSlider-track': {
              backgroundColor: 'black', // Track color
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#bdbdbd', // Rail color (optional for contrast)
            },
          }}
      />
    </Box>
      </div>
      <hr className="border-t-black/10"/>
      {/* next part */}
      <div className='flex justify-between items-center'>
        <h3 className='text-black text-xl font-bold'>Colors</h3>
        <span> <Image src={othergreaterthan} alt="" className='cursor-pointer'/></span>
      </div>

      <div className='pt-4 pb-3'>
        <div className='flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5'>
            <button type="button" className="bg-green-600 rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"><Image src={check} alt="" className='w-4 h-4'/></button>
            <button type="button" className="bg-red-700 rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            <button type="button" className="bg-yellow-600 rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            <button type="button" className="bg-orange-700 rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            <button type="button" className="bg-blue-500 rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            <button type="button" className="bg-blue-800 rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            <button type="button" className="bg-purple-900 rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            <button type="button" className="bg-pink-900 rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            <button type="button" className="bg-white rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            <button type="button" className="bg-black rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            <hr className="border-t-black/10"/>
        </div>
        {/* next part */}
        <div className='flex justify-between mt-4 items-center'>
        <h3 className='font-bold text-black text-xl'>Size</h3>
        <span> <Image src={othergreaterthan} alt="" className='cursor-pointer'/></span>
      </div>
        <div className='pt-4 pb-3'>
            <div className='flex items-center flex-wrap'>
                <button className='m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] bg-black font-medium text-white'>XX-Small</button>
                <button className='m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] bg-[#F0F0F0] font-medium text-black'>X-Small</button>
                <button className='m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] bg-[#F0F0F0] font-medium text-black'>Small</button>
                <button className='m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] bg-[#F0F0F0] font-medium text-black'>Medium</button>
                <button className='m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] bg-[#F0F0F0] font-medium text-black'>Large</button>
                <button className='m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] bg-[#F0F0F0] font-medium text-black'>X-Large</button>
                <button className='m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] bg-[#F0F0F0] font-medium text-black'>XX-Large</button>
                <button className='m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] bg-[#F0F0F0] font-medium text-black'>3X-Large</button>
                <button className='m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] bg-[#F0F0F0] font-medium text-black'>4X-Large</button>
            </div>
        </div>
        <hr className="border-t-black/10"/>
        {/* next part*/}
        <div className='flex justify-between mt-4 items-center'>
        <h3 className='font-bold text-black text-xl'>Dress Style</h3>
        <span> <Image src={othergreaterthan} alt="" className='cursor-pointer'/></span>
      </div>
      <div className="flex flex-col space-y-0.5 text-black">
            <a className="flex items-center justify-between py-2" href="./onsale">Casual
            <Image src={greaterthan} alt=""/>
            </a>

            <a className="flex items-center justify-between py-2" href="./onsale">Formal
            <Image src={greaterthan} alt=""/>
            </a>

            <a className="flex items-center justify-between py-2" href="./onsale">Party
            <Image src={greaterthan} alt=""/>
            </a>

            <a className="flex items-center justify-between py-2" href="./onsale">Gym
            <Image src={greaterthan} alt=""/>
            </a>
        </div>
        <button className="inline-flex mt-4 items-center justify-center shadow hover:bg-gray-900 hover:shadow-lg transition-all duration-300 ease-in transform hover:scale-110 px-4 bg-black w-full rounded-full text-sm font-medium py-4 h-12 text-white" type="button">Apply Filter</button>

      </div>
     
</div>
        {/* end */}
{/* right side */}
{/* //////////////////////////// */}
<div className="flex flex-col w-full space-y-5">
  {/* Red Div */}
  <div className=" flex-col w-full">
    {/* <!-- Main Container --> */}
    <div className="flex flex-wrap items-center justify-between space-y-0">
      {/* <!-- Left Section --> */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        {/* Casual text visible on large screens */}
        <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4 sm:block hidden">Casual</h1>

      </div>

      {/* <!-- Right Section --> */}
      <div className="flex flex-wrap sm:flex-nowrap items-center sm:space-x-3 space-y-0">
        {/* "Showing 1-10 of 100 Products" text visible on large screens */}
        <span className="text-sm md:text-base truncate text-gray-600 sm:mr-4 hidden sm:block">
          Showing 1-10 of 100 Products
        </span>

        {/* Sort by dropdown, visible on medium and larger screens */}
        <div className="hidden sm:flex items-center space-x-2">
          <span className="text-sm md:text-base text-gray-600">Sort by:</span>
          <span className="font-medium text-sm md:text-base">Most Popular</span>
          <Image src={downward} alt="Sort Icon" className="w-4 h-4" />
        </div>
      </div>
    </div>

    {/* Below section for mobile, where filter icon and text align together */}
    <div className="sm:hidden flex items-center justify-between">
      {/* Casual text visible only on mobile */}
      <h1 className="font-bold text-lg md:text-2xl lg:text-[32px] mr-4">Casual</h1>

      {/* "Showing 1-10 of 100 Products" text visible only on mobile */}
      <span className="text-sm md:text-base text-gray-600">
        Showing 1-10 of 100 Products
      </span>

      {/* Filter icon for mobile */}
      <button
          type="button"
          className="h-8 w-8 rounded-full bg-[#F0F0F0] text-black p-1 md:hidden"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r1e:"
          data-state="closed"
        >
          <Image src={filter} alt="Filter" />
        </button>

      {/* <Image src={filter} alt="Filter Icon" className="w-6 h-6" /> */}
    </div>
  </div>

<div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
  <div className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
    <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
      <Image src={page2shirt} onClick={handleImageClick} alt="" width="295" height="298" className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500" />
    </div>
    <strong className="text-black font-bold xl:text-xl mb-1.5">Gradient Graphic T-shirt</strong>  {/* Adjusted margin-bottom */}
    <div className="flex items-center mb-1">  {/* Adjusted margin-bottom to reduce gap */}
      <Image src={page2stars} alt="" className="-mt-6" />  {/* Stars image size adjustment if needed */}
    </div>
    <div className="flex items-center space-x-[5px] xl:space-x-2.5">
      <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
        $145
      </span>
    </div>
  </div>


  {/* 2 same div */}
  <a href="./" className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
    <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
      <Image src={page2shirt1} alt="" width="295" height="298" className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500" />
    </div>
    <strong className="text-black font-bold xl:text-xl mb-1.5">Polo with Tipping Details</strong>  {/* Adjusted margin-bottom */}
    <div className="flex items-center mb-1">  {/* Adjusted margin-bottom to reduce gap */}
      <Image src={page2stars2} alt="" className="-mt-6" />  {/* Stars image size adjustment if needed */}
    </div>
    <div className="flex items-center space-x-[5px] xl:space-x-2.5">
      <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
        $180
      </span>
    </div>
  </a>
  {/* 3 same div */}
  <a href="./" className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
    <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
      <Image src={page2shirt2} alt="" width="295" height="298" className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500" />
    </div>
    <strong className="text-black font-bold xl:text-xl mb-1.5">Black Striped T-shirt</strong>  {/* Adjusted margin-bottom */}
    <div className="flex items-center mb-1">  {/* Adjusted margin-bottom to reduce gap */}
      <Image src={page2stars3} alt="" className="-mt-6" />  {/* Stars image size adjustment if needed */}
    </div>
    <div className="flex items-center space-x-[5px] xl:space-x-2.5">
      <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
        $120
      </span>
      <span className='text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl'>$160</span>
      <span className="text-red-500 bg-red-200 rounded-2xl -mt-6  p-2 relative ml-3">-20%</span>
    </div>
  </a>
  {/* 4 same div */}
  <a href="./" className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
    <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
      <Image src={page2jeans} alt="" width="295" height="298" className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500" />
    </div>
    <strong className="text-black font-bold xl:text-xl mb-1.5">SKINNY FIT JEANS</strong>  {/* Adjusted margin-bottom */}
    <div className="flex items-center mb-1">  {/* Adjusted margin-bottom to reduce gap */}
      <Image src={page2stars} alt="" className="-mt-6" />  {/* Stars image size adjustment if needed */}
    </div>
    <div className="flex items-center space-x-[5px] xl:space-x-2.5">
      <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">$240</span>
      <span className='text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl'>$260</span>
      <span className="text-red-500 bg-red-200 rounded-2xl -mt-6  p-2 relative ml-3">-20%</span>
    </div>
  </a>
  {/* 5 same div */}
  <a href="./" className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
    <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
      <Image src={page2shirt3} alt="" width="295" height="298" className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500" />
    </div>
    <strong className="text-black font-bold xl:text-xl mb-1.5">Gradient Graphic T-shirt</strong>  {/* Adjusted margin-bottom */}
    <div className="flex items-center mb-1">  {/* Adjusted margin-bottom to reduce gap */}
      <Image src={page2stars2} alt="" className="-mt-6" />  {/* Stars image size adjustment if needed */}
    </div>
    <div className="flex items-center space-x-[5px] xl:space-x-2.5">
      <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">$180</span>
    </div>
  </a>
  {/* 6 same div */}
  <a href="./" className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
    <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
      <Image src={page2shirt4} alt="" width="295" height="298" className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500" />
    </div>
    <strong className="text-black font-bold xl:text-xl mb-1.5">SLEEVE STRIPED T-SHIRT</strong>  {/* Adjusted margin-bottom */}
    <div className="flex items-center mb-1">  {/* Adjusted margin-bottom to reduce gap */}
      <Image src={page2stars3} alt="" className="-mt-6" />  {/* Stars image size adjustment if needed */}
    </div>
    <div className="flex items-center space-x-[5px] xl:space-x-2.5">
      <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">$130</span>
      <span className='text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl'>$160</span>
      <span className="text-red-500 bg-red-200 rounded-2xl -mt-6  p-2 relative ml-3">-30%</span>
    </div>
  </a>
  {/* 7 same div */}
  <a href="./" className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
    <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
      <Image src={page2shirt5} alt="" width="295" height="298" className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500" />
    </div>
    <strong className="text-black font-bold xl:text-xl mb-1.5">VERTICAL STRIPED SHIRT</strong>  {/* Adjusted margin-bottom */}
    <div className="flex items-center mb-1">  {/* Adjusted margin-bottom to reduce gap */}
      <Image src={page2stars3} alt="" className="-mt-6" />  {/* Stars image size adjustment if needed */}
    </div>
    <div className="flex items-center space-x-[5px] xl:space-x-2.5">
      <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">$212</span>
      <span className='text-gray-600 -mt-6 font-bold line-through text-xl xl:text-2xl'>$232</span>
      <span className="text-red-500 bg-red-200 rounded-2xl -mt-6  p-2 relative ml-3">-20%</span>
    </div>
  </a>
  {/* 8 same div */}
  <a href="./" className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
    <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
      <Image src={page2shirt6} alt="" width="295" height="298" className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500" />
    </div>
    <strong className="text-black font-bold xl:text-xl mb-1.5">COURAGE GRAPHIC T-SHIRT</strong>  {/* Adjusted margin-bottom */}
    <div className="flex items-center mb-1">  {/* Adjusted margin-bottom to reduce gap */}
      <Image src={page2stars} alt="" className="-mt-6" />  {/* Stars image size adjustment if needed */}
    </div>
    <div className="flex items-center space-x-[5px] xl:space-x-2.5">
      <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">$145</span>
    </div>
  </a>
  {/* 9 same div */}
  <a href="./" className="flex flex-col lg:grid-cols-3 gap-4 lg:gap-5">
    <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-4 overflow-hidden">
      <Image src={page2shorts} alt="" width="295" height="298" className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500" />
    </div>
    <strong className="text-black font-bold xl:text-xl mb-1.5">LOOSE FIT BERMUDA SHORTS</strong>  {/* Adjusted margin-bottom */}
    <div className="flex items-center mb-1">  {/* Adjusted margin-bottom to reduce gap */}
      <Image src={page2stars} alt="" className="-mt-6" />  {/* Stars image size adjustment if needed */}
    </div>
    <div className="flex items-center space-x-[5px] xl:space-x-2.5">
      <span className="font-bold -mt-6 text-black text-xl xl:text-2xl">
        $80
      </span>
    </div>
  </a>
</div>
  {/* end */}
  <hr className="border-t-black/10"/>
  <nav className='mx-auto flex w-full justify-between items-center'>
  {/* Previous Button */}
  <a className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 py-2 gap-1 px-2.5 xs:pl-2.5 border border-black' href="#">
    <Image src={leftarrow} alt="" width="15" height="15" className="h-4 w-4 xs:block"/> 
    <span className='xs:ml-2'>Previous</span>
  </a>

  {/* Page Numbers */}
  <ul className='flex flex-row items-center gap-1'>
    <li>
      <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 ml-2 bg-black/5 shadow-none border-none text-black font-medium text-sm" href="#">1</a>
    </li>
    <li>
      <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 xs:w-6 shadow-none border-none  text-black font-medium text-sm" href="#">2</a>
    </li>
    <li className="hidden lg:block">
      <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 xs:w-6 shadow-none border-none  text-black font-medium text-sm" href="#">3</a>
    </li>
    {/* More Pages */}
    <li>
      <span className='flex h-9 w-9 text-black font-medium items-center justify-center text-sm'>
        <Image src={dots} alt=""/>
      </span>
    </li>
    <li className="hidden lg:block">
      <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 xs:w-6 shadow-none border-none  text-black font-medium text-sm" href="#">8</a>
    </li>
    <li>
      <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 xs:w-6 shadow-none border-none  text-black font-medium text-sm" href="#">9</a>
    </li>
    <li>
      <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md h-9 w-9 xs:w-6 shadow-none border-none text-black font-medium text-sm" href="#">10</a>
    </li>
  </ul>

  {/* Next Button */}
  <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 py-2 gap-1 px-2 xs:px-2 xs:pr-1 border border-black/10" href="#">
    <span className='xs:mr-1'>Next</span>
    <Image src={rightarrow} alt=""/>
  </a>
</nav>
</div>
{/* end */}
    </div>
 </main>
        <Footer/>
        </>
    )
    
}