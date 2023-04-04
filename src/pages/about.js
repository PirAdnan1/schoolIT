import React from "react";

// components
import AboutContents from "../components/about/Index";

// assets
import AboutPic from "../assets/About";
import ManVector from "../assets/ManVector";
import Facebook from "../assets/Facebook";
import Twitter from "../assets/Twitter";

function About() {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <div className="mt-14 ml-14 relative">
          <AboutContents />
            <span className="font-bold absolute">About</span>
        </div>
        <p className="bottom-3 ml-3 absolute">2019 schoolIT Technology</p>
        <div className="bottom-3 flex mx-7 items-center absolute right-3">
        <Facebook  />
        <div className="ml-7">
        <Twitter  />
        </div>
        </div>
      </div>
      <div className="bg-[#46C3EA] flex h-screen justify-center items-center">
        <h1>Section2</h1>
      </div>
      <div className="absolute max-w-[1080px] mt-32 ml-32 max-h-[516px] top-0 shadow-2xl bg-white rounded-sm">
        <div className="pl-14 pt-5">
          <AboutPic />
        </div>
        <div className="flex ml-14 items-center">
          <p className="max-w-[512px]">
            SchoolIT Technology is designed to automate a school's diverse
            operations from classes, exams to school events calendar. It
            provides a powerful online community to bring parents, teachers and
            students on a common interactive platform.
          </p>
          <div className="ml-20 mr-24">
            <ManVector />
          </div>
        </div>
        <button className="bg-[#F18585] ml-14 hover:bg-white mb-12 hover:text-[#F18585] hover:border-2 hover:border-[#F18585]  text-white mt-2 py-2 px-28 rounded-full ">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default About;
