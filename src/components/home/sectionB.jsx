import React from "react";
import Image from "next/image";

// assets
import Vector1 from "@/src/assets/Vector1";
import Vector2 from "@/src/assets/Vector2";
import Vector3 from "@/src/assets/Vector3";
import Boys from "@/src/assets/boys.png";

function SectionB() {
  return (
    <div className="bg-[#46C3EA1A]/10 py-20 flex px-4 md:px-0 flex-col lg:flex-row items-center justify-center">
      <div>
        <h1 className="text-[38px] max-w-[536px] ">
          Increase adoption across your learning community
        </h1>
        <p className="mt-8 text-base max-w-[536px]">
          SchoolIT is designed to automate a school diverse operations from
          classes, exams to school events calendar.{" "}
        </p>
        <div className="flex items-center mt-8">
          <Vector1 />
          <p className="pl-4 text-base">
            Modern tools that promote technology-oriented culture and digital
            literacy.
          </p>
        </div>
        <div className="flex items-center mt-8">
          <Vector2 />
          <p className="pl-4 text-base">
            Increased student, parent, and family engagement.
          </p>
        </div>
        <div className="flex items-center mt-8">
          <Vector3 />
          <p className="pl-4 text-base">
            Well-received tools that enable progressive practices.
          </p>
        </div>
      </div>
      <div className="mt-8 lg:mt-0">
        <Image
          src={Boys}
          className="mt-4 md:mt-0"
          width={536}
          height={323}
          alt="..."
        />
      </div>
    </div>
  );
}

export default SectionB;
