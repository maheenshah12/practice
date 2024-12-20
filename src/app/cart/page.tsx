
import Image from "next/image";
import Footer from "@/app/components/footer";
import page2shirt from "@/app/assets/multi shirt.png";
import greaterthan from "@/app/assets/greaterthan.png"; 
import dustbin from "@/app/assets/dustbin.png";
import minus from "@/app/assets/minus.png";
import plus from "@/app/assets/plus.png";
import page2jeans  from "@/app/assets/page 2 jeans.png";
import page2shirt3 from "@/app/assets/page 2 shirt 3.png";
import coupon from "@/app/assets/coupon.png";
// import rightarrow from "@/app/assets/right arrow.png";
import { FaArrowRight } from "react-icons/fa";


   
export default function Cart(){
    return(
      <>
      <hr className="h-[1px]  bg border-t-black/10 mb-5 sm:mb-6"/>
      <main className="pb-2 m-8">
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <nav className="mb-2 sm:mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5">
              <li className="inline-flex items-center gap-1.5">
                <a className="transition hover:text-black text-gray-500" href="./">Home</a>
              </li>
              <li><Image src={greaterthan} alt=""/></li>
              <li className="inline-flex items-center gap-1.5">
                <span className="font-normal">Cart</span>
              </li>
            </ol>
          </nav>
          {/*  heading*/}
        <h2 className="font-extrabold text-[32px] md:text-[40px] text-black mb:5 md:mb-6">YOUR CART</h2>
<div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
  <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
  <div className="flex items-center space-x-4">
    <a className="bg-[#F0EEED] rounded-lg w-full min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden" href="/shop/product/13/Gradient-Graphic-T-shirt">
    <Image src={page2shirt} alt="" className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-300"/>
    </a>
   <div className="flex w-full flex-col">
     <div className="flex items-center justify-between">
      <h3 className="font-bold">Gradient Graphic T-shirt</h3>
<Image src={dustbin} alt=""/>
</div>
{/*  */}
<div className="mt-1">
  <span className="text-black text-xs md:text-sm mr-1">Sizes : </span>
  <span className="text-gray-600 text-xs md:text-sm">Large</span>
</div>
<div className="mb-auto -mt-1.5">
  <span className="text-black text-xs md:text-sm mr-1">Color:</span>
  <span className="text-gray-600 text-xs md:text-sm">Brown</span>
</div>
<div className="flex items-center flex-wrap justify-between">
<div className="flex items-center space-x-[5px] xl:space-x-2.5">
<span className="font-bold text-black text-xl xl:text-2xl">$145</span>
</div>
{/*  */}
<div className="bg-[#F0F0F0] w-full md:py-3.5 sm:px-5 rounded-full flex items-center justify-between px-5 py-3 max-h-8 md:max-h-10 min-w-[105px] max-w-[105px] sm:max-w-32">
<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={minus} alt="" /></button>
<span className="font-medium text-sm sm:text-base">1</span>
<button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={plus} alt=""/></button>
</div>
</div>
</div> 

</div>
<hr className="border-t-black/10"/>
 {/* 2 div */}
<div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
  <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
  <div className="flex items-center space-x-4">
    <a className="bg-[#F0EEED] rounded-lg w-full min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden" href="/shop/product/13/Gradient-Graphic-T-shirt">
    <Image src={page2shirt3} alt="" className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-300"/>
    </a>
   <div className="flex w-full flex-col">
     <div className="flex items-center justify-between">
      <h3 className="font-bold">Checkered Shirt</h3>
<Image src={dustbin} alt=""/>
</div>
<div className="mt-1">
  <span className="text-black text-xs md:text-sm mr-1">Sizes : </span>
  <span className="text-gray-600 text-xs md:text-sm">Medium</span>
</div>
<div className="mb-auto -mt-1.5">
  <span className="text-black text-xs md:text-sm mr-1">Color:</span>
  <span className="text-gray-600 text-xs md:text-sm">Red</span>
</div>
<div className="flex items-center flex-wrap justify-between">
<div className="flex items-center space-x-[5px] xl:space-x-2.5">
<span className="font-bold text-black text-xl xl:text-2xl">$180</span>
</div>
<div className="bg-[#F0F0F0] w-full md:py-3.5 sm:px-5 rounded-full flex items-center justify-between px-5 py-3 max-h-8 md:max-h-10 min-w-[105px] max-w-[105px] sm:max-w-32">
<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={minus} alt="" /></button>
<span className="font-medium text-sm sm:text-base">1</span>
<button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={plus} alt=""/></button>
</div>
</div>
</div> 
</div>
</div>
 </div>
 <hr className="border-t-black/10"/>
  {/* 3 div */}
<div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
  <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
  <div className="flex items-center space-x-4">
    <a className="bg-[#F0EEED] rounded-lg w-full min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden" href="/shop/product/13/Gradient-Graphic-T-shirt">
    <Image src={page2jeans} alt="" className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-300"/>
    </a>
   <div className="flex w-full flex-col">
     <div className="flex items-center justify-between">
      <h3 className="font-bold">Gradient Graphic T-shirt</h3>
<Image src={dustbin} alt=""/>
</div>
<div className="mt-1">
  <span className="text-black text-xs md:text-sm mr-1">Sizes : </span>
  <span className="text-gray-600 text-xs md:text-sm">Large</span>
</div>
<div className="mb-auto -mt-1.5">
  <span className="text-black text-xs md:text-sm mr-1">Color:</span>
  <span className="text-gray-600 text-xs md:text-sm">Blue</span>
</div>
<div className="flex items-center flex-wrap justify-between">
<div className="flex items-center space-x-[5px] xl:space-x-2.5">
<span className="font-bold text-black text-xl xl:text-2xl">$245</span>
</div>
<div className="bg-[#F0F0F0] w-full md:py-3.5 sm:px-5 rounded-full flex items-center justify-between px-5 py-3 max-h-8 md:max-h-10 min-w-[105px] max-w-[105px] sm:max-w-32">
<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={minus} alt="" /></button>
<span className="font-medium text-sm sm:text-base">1</span>
<button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  h-4 w-4 sm:h-6 sm:w-6 text-xl hover:bg-transparent"><Image src={plus} alt=""/></button>
</div>
</div>
</div> 
</div>
</div>
 </div>
 {/* <hr className="border-t-black/10"/> */}
</div>
{/* new section */}
<div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-gray-300">
  <h6 className="text-xl md:text-2xl font-bold text-black">Order Summary</h6>
  <div className="flex flex-col space-y-5">
  <div className="flex items-center justify-between">
    <span className="md:text-xl text-gray-500">Subtotal</span>
    <span className="md:text-xl font-bold">$585</span>
  </div>

  <div className="flex items-center justify-between">
    <span className="md:text-xl text-gray-500">Discount (-20%)</span>
    <span className="md:text-xl text-red-600 font-bold">-$113</span>
  </div>

  <div className="flex items-center justify-between">
    <span className="md:text-xl text-gray-500">Delivery Fee</span>
    <span className="md:text-xl font-bold">$15</span>
  </div>
  <hr className="border-t-black/10"/>
  <div className="flex items-center justify-between">
    <span className="md:text-xl  text-2xl text-black font-bold">Total</span>
    <span className="md:text-xl text-2xl font-bold">$533</span>
  </div>
</div>
<h2>hiiiii</h2>
<div className="flex space-x-3">
  <div className="transition-all relative flex items-center rounded-full w-full overflow-hidden bg-[#F0F0F0]">
    <div className="input-group-text mr-3">
      <Image src={coupon} alt="" className="text-gray-600 text-2xl"/>
    </div>
    <input className="input-control w-full py-3 pr-4 outline-none placeholder:font-medium placeholder:text-sm bg-transparent placeholder:text-gray-500" placeholder="Add Promo Code" type="text"></input>
  </div>
  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition shadow hover:bg-slate-900 px-4 py-2 bg-black text-white rounded-full w-full max-w-[119px] h-[48px]">Apply</button>
</div>
<button className="inline-flex items-center justify-center whitespace-nowrap shadow hover:bg-gray-800 transition-all hover:translate-x-2 px-4 text-sm md:text-[16px] font-medium bg-black text-white rounded-full w-full py-4 h-[54px] md:h-[60px] ">Go to Checkout 
<FaArrowRight className="ml-4 transition-all hover:translate-x-2 text-xl" />
  {/* <Image src={rightarrow} alt="" className="text-white"/> */}
</button>



</div>

{/* next work */}





  {/* end */}
  {/* <h2>hiiiii</h2> */}
</div> 
 {/* de end */}
    </div>  
 
      </main>
    <Footer/>
      
      </>
    );
   }
  


// ////////////////////////////
// //////////////////////



/* <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Filters</h3>
              <button
                className="text-gray-500 font-medium"
                onClick={toggleDrawer(false)}
              >
                Close
              </button>
            </div>

            Filters Content
            <div className="space-y-5">
              Price Filter
              <div>
                <h4 className="font-medium text-base mb-2">Price</h4>
                <Box sx={{ width: 250 }}>
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    sx={{
                      color: "black",
                      "& .MuiSlider-thumb": {
                        borderColor: "black",
                      },
                      "& .MuiSlider-track": {
                        backgroundColor: "black",
                      },
                      "& .MuiSlider-rail": {
                        backgroundColor: "#bdbdbd",
                      },
                    }}
                  />
                </Box>
              </div>

              Size Filter
              <div>
                <h4 className="font-medium text-base mb-2">Size</h4>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 text-sm rounded-md bg-gray-200">
                    Small
                  </button>
                  <button className="px-3 py-1.5 text-sm rounded-md bg-gray-200">
                    Medium
                  </button>
                  <button className="px-3 py-1.5 text-sm rounded-md bg-gray-200">
                    Large
                  </button>
                </div>
              </div>

              Apply Filters Button
              <button
                className="w-full py-3 text-white bg-black rounded-lg font-medium hover:bg-gray-900"
                type="button"
              >
                Apply Filters
              </button>
            </div>
          </Box> */



          // ////////////////////////////////
          