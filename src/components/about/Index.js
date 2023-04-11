import React from "react";
import Link from "next/link";

// assets
import Logo from "@/src/assets/logo";
import AboutPic from "@/src/assets/About";
import ManVector from "@/src/assets/ManVector";
import Facebook from "@/src/assets/Facebook";
import Twitter from "@/src/assets/Twitter";

function About() {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <div className="mt-14 ml-14">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <p className="bottom-3 ml-3 absolute">2019 schoolIT Technology</p>
        <div className="bottom-3 flex mx-7 items-center absolute right-3">
          <Facebook />
          <div className="ml-7">
            <Twitter />
          </div>
        </div>
      </div>
      <div className="bg-[#46C3EA] flex h-screen justify-center items-center"></div>
      <div className="absolute max-w-[1080px] mt-32 ml-32 max-h-[516px] top-0 shadow-2xl bg-white rounded-sm">
        <div className="pl-14 pt-5">
          <AboutPic />
        </div>
        <div className="flex ml-14 items-center">
          <p className="max-w-[512px]">
            SchoolIT Technology is designed to automate a schools diverse
            opertions from classes exams to school events calender. It provide
            a powerfull online community to brings parent teachers and student
            on a commin interactive platform.
          </p>
          <div className="ml-20 mr-24">
            <ManVector />
          </div>
        </div>
        <button className="bg-[#F18585] ml-14 hover:bg-white mb-12 hover:text-[#F18585] border-2 border-[#F18585] hover:border-[#F18585]  text-white mt-2 py-2 px-28 rounded-full ">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default About;
