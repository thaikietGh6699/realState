import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 font-primary">
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left
         justify-center flex-1 px-4 lg:px-0 font-primary "
        >
          <h1 className=" text-4xl lg:text-[58px] font-bold leading-none mb-6">
            <span className=" text-violet-700">Rent</span> Your Drem House With
            Us
          </h1>
          <p className=" max-w-[480px] mb-8 font-primary font">
            Bất động sản nhà ở: bao gồm các loại hình nhà phố, căn hộ, biệt thự.
            Đây là loại hình bất động sản phổ biến nhất hiện nay.
          </p>
        </div>
        <div className=" hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
