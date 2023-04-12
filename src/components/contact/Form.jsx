import React from "react";
import Link from "next/link";

// assets
import Logo from "@/src/assets/logo";
import Container from "../../Mycontainer/Container";

function Form() {
  return (
    <Container>
      <div className="grid md:grid-cols-2 md:pl-10 px-7 md:px-0  h-screen">
        <div className=" bg-white pt-10">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <h1 className="text-[48px] mt-20">Get in Touch</h1>
          <p className="text-[24px] mt-12">
            Please fill out the form and we will be in touch
          </p>
          <div className="flex flex-col justify-center">
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="FullName"
                className="mt-14 outline-none py-3 px-10 border border-[#F18585] rounded-md"
              />
              <input
                type="text"
                placeholder="Your email address"
                className="mt-14 py-3 px-10 outline-none max-w-[644px] w-full border border-[#F18585] rounded-md"
              />
              <textarea
                type="text-area"
                placeholder="Message"
                rows={6}
                className="mt-14 resize-none py-3 px-10 outline-none border border-[#F18585] rounded-md"
              />
              <button className="bg-[#F18585] max-w-[307px] text-base py-4 text-white rounded-full mt-14 border-2 border-[#F18585] hover:text-[#F18585] hover:bg-white">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="bg-[#46C3EA1A]/10 hidden md:block text-right">
          <h1 className="text-[48px] pt-20 pr-14">Contact</h1>
        </div>
      </div>
    </Container>
  );
}

export default Form;
