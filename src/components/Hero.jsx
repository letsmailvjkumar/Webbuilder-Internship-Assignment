import React from "react";
import { IMAGE, down, important, right } from "../assets/images";
import Cards from "./Cards";

const Hero = () => {
  return (
    <div className="">
      <div className="text-4xl">Best Website builders in the US</div>
      <hr className="mt-2 max-[420px]:hidden" />
      <div className="flex justify-between mt-2 max-[420px]:hidden">
        <div className="flex items-center">
          <div className="flex gap-3 items-center">
            <div>
              <img src={IMAGE} alt="current" className="w-4 h-4" />
            </div>
            <div>Last Updated - </div>
          </div>
          <div className="px-3">Feburary 28, 2024</div>
          <div className="flex gap-3 items-center">
            <div>
              <img src={important} alt="important" className="w-4 h-4" />
            </div>
            <div>Advertising Disclosure</div>
          </div>
        </div>
        <div className="flex items-center">
          <div>Top Relevant</div>
          <div>
            <img src={down} alt="down" />
          </div>
        </div>
      </div>
      <hr className="mt-2" />
      <div className="mt-2 flex gap-10">
        <div className="bg-white w-[8rem] text-center rounded-lg">Tools</div>
        <div className="bg-white w-[8rem] text-center rounded-lg">
          AWS Builder
        </div>
        <div className="bg-white w-[8rem] text-center rounded-lg">
          Start Build
        </div>
        <div className="bg-white w-[8rem] text-center rounded-lg">
          Build Supplies
        </div>
        <div className="bg-white w-[8rem] text-center rounded-lg">Tooling</div>
        <div className="bg-white w-[8rem] text-center rounded-lg">
          BlueHosting
        </div>
      </div>
      <hr className="mt-2 min-[425px]:hidden" />
      <div className="mt-4 flex items-center text-sm">
        <div className="flex items-center gap-2">
          <div>Home</div>
          <div>
            <img src={right} alt="" className="w-2 h-2" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="ps-2">Hosting for all</div>
          <div>
            <img src={right} alt="" className="w-2 h-2" />
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="ps-2 ">Hosting</div>
          <div>
            <img src={right} alt="" className="w-2 h-2" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="ps-2">Hosting6</div>
          <div>
            <img src={right} alt="" className="w-2 h-2" />
          </div>
        </div> 
        <div className="flex items-center gap-2">
          <div className="ps-2">Hosting5</div>
          
        </div>
      </div>

      
      
    </div>
  );
};

export default Hero;
