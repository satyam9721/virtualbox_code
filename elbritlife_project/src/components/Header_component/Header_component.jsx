import Image from "next/image";
import React from "react";
import circle_component from "../Circle_component/Circle_component";
import Circle_component from "../Circle_component/Circle_component";
import Header_footer from "../Header_Footer/Header_footer";

const Header_component = () => {
  return (
    <div className="">
      <div className="bg-[#e2f5fb] ml-3 mr-3 pt-10  pb-56">
        <div className="text-8xl text-[#003569] font-bold items-center justify-center flex   ">
          Essential Vitamins
        </div>
        <div className=" grid grid-cols-3 gap-10 items-center justify-center px-48 ">
          <div className="pt-20 ">
            <p className="text-[#727272]">Online Medical Supplies</p>
            <p className="text-xl text-[#17414f] font-semibold">
              Get Your Vitamins & Minerals
            </p>
            <button className="bg-[#17414f] w-100 p-7 text-white rounded-full  text-xs py-1 ">
              Explore
            </button>
            <span></span>
          </div>
          <div>
            <Image
              src="/f2-1.png.png"
              width={250}
              height={250}
              alt="Picture of the author"
              className="-mt-2"
            />
          </div>
          <div className="pt-20">
            <Circle_component
              data="Vitamins"
              text="Increased Vitamins and minerals in your diet"
            />
            <Circle_component
              data="Weight Loss"
              text=" Weight Loss Find scientifically proven solutions"
            />
            <Circle_component
              data="Functional Foods"
              text="Functional Foods From protein powers to baby formula"
            />
          </div>
        </div>
      </div>
      <div className="text-white items-center justify-center">
        <Header_footer />
      </div>
    </div>
  );
};

export default Header_component;
