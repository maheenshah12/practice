'use client'
import { useState } from 'react';
import Image, { StaticImageData } from "next/image";
import Footer from "@/app/components/footer";
import greaterthan from "@/app/assets/greaterthan.png";
import page2shirt from "@/app/assets/page 2 shirt.png";
import page3shirt from "@/app/assets/clear pic1.png";
import page3shirt2 from "@/app/assets/clear pic 2.png"; 
import page2stars from "@/app/assets/page 2 stars.png";
import check from "@/app/assets/check.png";
import minus from "@/app/assets/minus.png";
import plus from "@/app/assets/plus.png";
import downward from "@/app/assets/downward.png";
import cfilter from "@/app/assets/c filter.png";
import starset from "@/app/assets/star set.png";
import dots from "@/app/assets/dots.png";
import greencheek from "@/app/assets/green cheek.png";
import page2shirt1 from "@/app/assets/page 2 shirt 1.png";
import page2stars2 from "@/app/assets/page 2 stars2.png";
import poloshirt from "@/app/assets/polo shirt.png";
import page2shirt2 from "@/app/assets/page 2 shirt 2.png";
import multishirt from "@/app/assets/multi shirt.png";

export default function Details(){
// for pictures navigation
const [selectedImage, setSelectedImage] = useState<typeof page2shirt>(page2shirt);

  // Define images object with type inference
  const images: { [key: string]: StaticImageData } = {
    page2shirt,
    page3shirt,
    page3shirt2,
  };

  // Handle click event on small images, imageKey must be one of the keys in images
  const handleImageClick = (imageKey: keyof typeof images) => {
    setSelectedImage(images[imageKey]); // Update the selected image
  };

    return(
      <>
       <main>
        <div className="max-w-frame mx-9 px-4 xl:px-0">
            <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6"/>
            <div className="mb-5 sm:mb-9">
              <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
             <li className="inline-flex items-center gap-1.5">
             <a className="Transition-colors text-gray-500 hover:text-foreground" href="./">Home</a>   
             </li>
                <li><Image src={greaterthan} alt=""/></li>
                <li className="inline-flex items-center gap-1.5">
                    <a className="transition-colors text-gray-500 hover:text-black" href="/onsale">On Sale</a>
                </li>
                <li><Image src={greaterthan} alt=""/></li>
                <li className="inline-flex items-center gap-1.5">
                    <span className="font-medium text-black">Gradient Graphic T-shirt</span>
                </li>
             </ol>  
            </div>
            {/* next part */}

<section className="mb-11">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="flex flex-col-reverse lg:flex-row lg:space-x-3.5">
            <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-3.5 w-full lg:w-fit items-center lg:justify-start justify-center">
              
              {/* First small image button */}
              <button
                type="button"
                className="bg-[#F0EEED] rounded-[13px] xl:rounded-[20px] w-full max-w-[111px] xl:max-w-[152px] max-h-[106px] xl:max-h-[167px] xl:min-h-[167px] aspect-square overflow-hidden"
                onClick={() => handleImageClick('page2shirt')}
              >
                <Image
                  src={images.page2shirt}  // Correct path
                  alt="Page 2 Shirt"
                  width={152}
                  height={167}
                  className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
              </button>

              {/* Second small image button */}
              <button
                type="button"
                className="bg-[#F0EEED] rounded-[13px] xl:rounded-[20px] w-full max-w-[111px] xl:max-w-[152px] max-h-[106px] xl:max-h-[167px] xl:min-h-[167px] aspect-square overflow-hidden"
                onClick={() => handleImageClick('page3shirt')}
              >
                <Image
                  src={images.page3shirt}  // Correct path
                  alt="Page 3 Shirt"
                  width={152}
                  height={167}
                  className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
              </button>

              {/* Third small image button */}
              <button
                type="button"
                className="bg-[#F0EEED] rounded-[13px] xl:rounded-[20px] w-full max-w-[111px] xl:max-w-[152px] max-h-[106px] xl:max-h-[167px] xl:min-h-[167px] aspect-square overflow-hidden"
                onClick={() => handleImageClick('page3shirt2')}
              >
                <Image
                  src={images.page3shirt2}  // Correct path
                  alt="Page 3 Shirt 2"
                  width={152}
                  height={167}
                  className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
              </button>
            </div>

            {/* Big image section */}
            <div className="flex items-center justify-center bg-[#F0EEED] rounded-[13px] sm:rounded-[20px] w-full sm:w-96 md:w-full mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden mb-3 lg:mb-0">
              <Image
                src={selectedImage}  // Dynamically render selected image
                alt="Selected Product"
                width={500}
                height={530}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      {/* </div> */}

             {/* left side complete */}
             <div>
                <h1 className="text-3xl font-font font-extrabold md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize">Gradient Graphic T-shirt</h1>
                <div className="flex items-center mb-3 sm:mb-3.5">
                <Image src={page2stars} alt=""/>
                </div>
                <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
               <span className="font-bold text-black text-2xl sm:text-[32px]">$145</span>
                </div>
            <p className="text-sm sm:text-base text-black/60 mb-5">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>    
            <hr className="h-[1px] border-t-black/10 mb-5"/> 
           {/* next line */}
           <div className="flex flex-col">
            <span className="text-sm sm:text-base text-black/60 mb-4">Select Colors</span>
           <div className="flex items-center flex-wrap space-x-3 sm:space-x-4">
            {/* 1 circle */}
            <button type="button" className="bg-[#4F4631] rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"><Image src={check} alt="" className='w-4 h-4'/></button>
            {/* 2 circle */}
            <button type="button" className="bg-[#314F4A] rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            {/* 3 circle */}
            <button type="button" className="bg-[#31344F] rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"></button>
            </div> 
           </div>
           <hr className="h-[1px] border-t-black/10 my-5"/>
        {/* next line */}
        <div className="flex flex-col">
            <span className="text-sm sm:text-base text-black/60 mb-4">Choose Size</span>
            <div className="flex items-center flex-wrap lg:space-x-3">
          <button type="button" className="flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base rounded-full m-1 lg:m-0 max-h-[46px] bg-black font-medium text-white">Small</button>
          <button type="button" className="flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base rounded-full m-1 lg:m-0 max-h-[46px] bg-[#F0F0F0] font-medium text-black">Medium</button>
          <button type="button" className="flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base rounded-full m-1 lg:m-0 max-h-[46px] bg-[#F0F0F0] font-medium text-black">Large</button>
          <button type="button" className="flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base rounded-full m-1 lg:m-0 max-h-[46px] bg-[#F0F0F0] font-medium text-black">X-large</button>
            </div>
        </div>
        <hr className="h-[1px] border-t-black/10 my-5"/>
        {/* next line */}
        <div className="fixed md:relative w-full bg-white border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 z-10 flex items-center justify-between sm:justify-start md:justify-center">
        <div className="bg-[#F0F0F0] w-full min-w-[110px] max-w-[110px] sm:max-w-[170px] py-3 md:py-3.5 px-4 sm:px-5 rounded-full flex items-center justify-between">
           <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium h-5 w-5 sm:h-6 text-xl">
               <Image src={minus} alt=""/>
        </button> 
        <span className="font-medium text-sm sm:text-base">3</span>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium h-5 w-5 sm:h-6 text-xl">
               <Image src={plus} alt=""/>
        </button> 
        </div>
        {/* 2 button  */}
        <button type="button" className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all">Add to Cart</button>
        </div>
 </div>
   </div>
        </section>
{/* end */}
{/* downward kaam */}
<div>
    <div className="flex items-center mb-6 sm:mb-8 overflow-x-auto">
<button className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors  h-9 border-b border-black/10 text-black/60 font-normal p-5 sm:p-6 rounded-none flex-1" type="button">Product Details</button>
<button className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors  h-9 border-black border-b-2 font-medium p-5 sm:p-6 rounded-none flex-1" type="button">Rating & Reviews</button>
<button className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors  h-9 border-b border-black/10 text-black/60 font-normal p-5 sm:p-6 rounded-none flex-1" type="button">FAQs</button>
  </div>
  <div className='md-12 sm:mb-16'>
    <section className='flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6'>
      <div className='flex items-center mb-4 sm:mb-0'>
        <h3 className='text-xl sm:text-2xl font-bold text-black mr-2'>All Reviews</h3>
        <span className='text-sm sm:text-base text-gray-500'>(451)</span>
      </div>
      <div className='flex items-center space-x-2.5'>
        <Image src={cfilter} alt=""/>
        <button className='flex w-full items-center justify-between min-w-[120px] font-medium text-xs sm:text-base px-4 py-3 sm:px-5 sm:text-black bg-[#F0F0F0] border-none rounded-full h-12'>
        <span className=''>Latest</span>
        <Image src={ downward} alt=""/>
        </button>
        <button className='inline-flex items-center justify-center shadow text-white hover:bg-gray-600 sm:min-w-[166px] px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-black font-medium text-xs sm:text-base h-12'>Write a Review</button>
      </div>
       </section>
        </div>
      {/* comments part */}
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:md-9'>
  {/* stars and dot */}
  <div className='relative bg-white flex flex-col items-start border border-gray-500 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden'>
<div className='w-full flex items-center justify-between mb-3 sm:mb-4'>
  <Image src={starset} alt=""/>
  <Image src={dots} alt=""/>
</div>
{/* naam */}
<div className='flex items-center mb-2 sm:mb-3'>
  <span className='text-black font-bold sm:text-xl mr-1'>Alex K.</span>
  <Image src={greencheek} alt=""/>
</div>
{/* para */}
<p className='text-sm sm:text-base text-gray-800'>&quot;Finding clothes that align with my personal style used to be a challenge until I discovered Taha Sidd. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.&quot;</p>
{/* last line */}
<p className='text-gray-800 text-sm font-medium mt-4 sm:mt-6'>Posted on August 14,2023</p>
</div>

{/* 2 same div */}
{/* stars and dot */}
<div className='relative bg-white flex flex-col items-start border border-gray-500 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden'>
<div className='w-full flex items-center justify-between mb-3 sm:mb-4'>
  <Image src={starset} alt=""/>
  <Image src={dots} alt=""/>
</div>
{/* naam */}
<div className='flex items-center mb-2 sm:mb-3'>
  <span className='text-black font-bold sm:text-xl mr-1'>Alex M.</span>
  <Image src={greencheek} alt=""/>
</div>
{/* para */}
<p className='text-sm sm:text-base text-gray-800'>&quot;The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&apos;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.&quot;</p>
{/* last line */}
<p className='text-gray-800 text-sm font-medium mt-4 sm:mt-6'>Posted on August 15,2023</p>
</div>

{/* 3 same div */}
{/* stars and dot */}
<div className='relative bg-white flex flex-col items-start border border-gray-500 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden'>
<div className='w-full flex items-center justify-between mb-3 sm:mb-4'>
  <Image src={starset} alt=""/>
  <Image src={dots} alt=""/>
</div>
{/* naam */}
<div className='flex items-center mb-2 sm:mb-3'>
  <span className='text-black font-bold sm:text-xl mr-1'>Ethan R.</span>
  <Image src={greencheek} alt=""/>
</div>
{/* para */}
<p className='text-sm sm:text-base text-gray-800'>&quot;This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&apos;s touch in every aspect of this shirt.&quot;</p>
{/* last line */}
<p className='text-gray-800 text-sm font-medium mt-4 sm:mt-6'>Posted on August 16,2023</p>
</div>

{/* 4 same div */}
{/* stars and dot */}
<div className='relative bg-white flex flex-col items-start border border-gray-500 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden'>
<div className='w-full flex items-center justify-between mb-3 sm:mb-4'>
  <Image src={starset} alt=""/>
  <Image src={dots} alt=""/>
</div>
{/* naam */}
<div className='flex items-center mb-2 sm:mb-3'>
  <span className='text-black font-bold sm:text-xl mr-1'>Olivia P.</span>
  <Image src={greencheek} alt=""/>
</div>
{/* para */}
<p className='text-sm sm:text-base text-gray-800'>&quot;As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&apos;s evident that the designer poured their creativity into making this t-shirt stand out.&quot;</p>
{/* last line */}
<p className='text-gray-800 text-sm font-medium mt-4 sm:mt-6'>Posted on August 17,2023</p>
</div>

{/* 5 same div */}
{/* stars and dot */}
<div className='relative bg-white flex flex-col items-start border border-gray-500 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden'>
<div className='w-full flex items-center justify-between mb-3 sm:mb-4'>
  <Image src={starset} alt=""/>
  <Image src={dots} alt=""/>
</div>
{/* naam */}
<div className='flex items-center mb-2 sm:mb-3'>
  <span className='text-black font-bold sm:text-xl mr-1'>LiamK.</span>
  <Image src={greencheek} alt=""/>
</div>
{/* para */}
<p className='text-sm sm:text-base text-gray-800'>&quot;This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer&apos;s skill. It&apos;s like wearing a piece of art that reflects my passion for both design and fashion.&quot;</p>
{/* last line */}
<p className='text-gray-800 text-sm font-medium mt-4 sm:mt-6'>Posted on August 18,2023</p>
</div>

{/* 6 same div */}
{/* stars and dot */}
<div className='relative bg-white flex flex-col items-start border border-gray-500 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden'>
<div className='w-full flex items-center justify-between mb-3 sm:mb-4'>
  <Image src={starset} alt=""/>
  <Image src={dots} alt=""/>
</div>
{/* naam */}
<div className='flex items-center mb-2 sm:mb-3'>
  <span className='text-black font-bold sm:text-xl mr-1'>AvaH.</span>
  <Image src={greencheek} alt=""/>
</div>
{/* para */}
<p className='text-sm sm:text-base text-gray-800'>&quot;I&apos;m not just wearing a t-shirt; I&apos;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.&quot;</p>


{/* last line */}
<p className='text-gray-800 text-sm font-medium mt-4 sm:mt-6'>Posted on August 19,2023</p>
</div>
  </div>
    {/*  */}
    <div className='w-full px-4 sm:px-0 text-center'>
      <a href="#" className='inline-block w-[230px] px-1 py-4 mt-5 border rounded-full bg-black text-white hover:bg-gray-400 hover:text-black transition-all font-medium text-sm sm:text-base'>Load More Reviews</a>
    </div>
   </div>
  </div>
  {/* last part */}
  <div className='mb-[50px] sm:mb-20'>
    <section className='max-w-frame mx-auto text-center'>
      <h2 className='text-[32px] mt-4 font-extrabold md:text-5xl mb-8 md:mb-14 capitalize'>You might also like</h2>
<div className='relative w-full mb-6 md:mb-9'>
  <div className='overflow-hidden'>
    <div className='flex pl-5 mx-4 xl:mx-0 space-x-4 sm:space-x-5'>
      {/* 1 div */}

<div className='min-w-0 shrink-0 grow-0 basis-full w-full max-w-[198px] sm:max-w-[295px] pl-0'>
<a className='flex flex-col items-start aspect-auto' href="#">
  <div className='bg-[#F0EEED] rounded-2xl mb-2.5 xl:mb-4 overflow-hidden'>
    <Image src={poloshirt} alt="" className='rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500'/>
  </div>
  <span className='text-black font-bold  xl:text-xl'>Polo With Contrast Trims</span>
  <div className='mb-1 xl:mb-2'><Image src={page2stars2} alt=""/></div>
  <div className='flex items-center space-x-[5px] xl:space-x-2.5'>
    <span className="font-bold text-black text-xl xl:text-2xl">$212</span>
    <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">$242</span>
    <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">-20%</span>
  </div>
</a>
</div>

{/* 2 div */}
<div className='min-w-0 shrink-0 grow-0 basis-full w-full max-w-[198px] sm:max-w-[295px] pl-0'>
<a className='flex flex-col items-start aspect-auto' href="#">
  <div className='bg-[#F0EEED] rounded-2xl mb-2.5 xl:mb-4 overflow-hidden'>
    <Image src={multishirt} alt="" className='rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500'/>
  </div>
  <span className='text-black font-bold  xl:text-xl'>Gradient Graphic T-shirt</span>
  <div className='mb-1 xl:mb-2'><Image src={page2stars2} alt=""/></div>
  <div className='flex items-center space-x-[5px] xl:space-x-2.5'>
    <span className="font-bold text-black text-xl xl:text-2xl">$145</span>
  </div>
</a>
</div>
{/* 3 div */}
<div className='min-w-0 shrink-0 grow-0 basis-full w-full max-w-[198px] sm:max-w-[295px] pl-0'>
<a className='flex flex-col items-start aspect-auto' href="#">
  <div className='bg-[#F0EEED] rounded-2xl mb-2.5 xl:mb-4 overflow-hidden'>
    <Image src={page2shirt1} alt="" className='rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500'/>
  </div>
  <span className='text-black font-bold  xl:text-xl'>Polo with Tipping Detail</span>
  <div className='mb-1 xl:mb-2'><Image src={page2stars2} alt=""/></div>
  <div className='flex items-center space-x-[5px] xl:space-x-2.5'>
    <span className="font-bold text-black text-xl xl:text-2xl">$80</span>
  </div>
</a>
</div>
{/* 4 div */}
<div className='min-w-0 shrink-0 grow-0 basis-full w-full max-w-[198px] sm:max-w-[295px] pl-0'>
<a className='flex flex-col items-start aspect-auto' href="#">
  <div className='bg-[#F0EEED] rounded-2xl mb-2.5 xl:mb-4 overflow-hidden'>
    <Image src={page2shirt2} alt="" className='rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500'/>
  </div>
  <span className='text-black font-bold  xl:text-xl'>Black Striped T-shirt</span>
  <div className='mb-1 xl:mb-2'><Image src={page2stars2} alt=""/></div>
  <div className='flex items-center space-x-[5px] xl:space-x-2.5'>
    <span className="font-bold text-black text-xl xl:text-2xl">$120</span>
    <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">$150</span>
    <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">-30%</span>
  </div>
</a>
</div>
      {/*  */}
</div>
 </div>
  </div>
   </section>
    </div>
{/* last end */}
        
       </main>
         <Footer/>
         </>
    )
}