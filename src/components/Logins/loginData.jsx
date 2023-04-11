import React, { useState } from "react";
import Link from "next/link";
// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";

//  Yup
import * as Yup from "yup";

// Hooks
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// assets
import Logo from "@/src/assets/logo";

function LoginData() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  Validation Schema
  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string().min(8).max(32).required("Password Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(ValidationSchema),
  });

  //   onSubmit
  const onSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="grid sm:grid-cols-2 sm:gap-7">
      <div className="hidden md:block">
        <div className="max-w-[570px] text-white flex flex-col px-4 md:px-0 h-screen justify-center items-center bg-[#F18585]">
          <h1 className="text-[40px]">Not Signed Up Yet?</h1>
          <p className="mt-9 max-w-[455px] text-center">
            Click the link below to get started
          </p>
          <Link
            href="/signup"
            className="bg-[#F18585] border border-white text-white mt-5 hover:bg-white hover:text-[#F18585] px-20 py-2 rounded-full max-w-[340px]"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div>
        <div className="mt-14">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="mt-14 px-6 lg:px-0">
          <h1 className="text-[40px] font-bold">Access Account</h1>
          <p className="mt-8 text-[18px]">
            Gain access to your account and explore!
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="my-4">
              <input
                {...register("email")}
                type="email"
                className="outline-none max-w-[538px] w-full my-3 py-3 px-4 border rounded-md border-[#F18585B2]"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-700">{errors.email.message}</p>
              )}
            </div>
            <div className="my-4">
              <input
                {...register("password")}
                type="password"
                className="outline-none max-w-[538px] w-full my-3 py-3 px-4 border rounded-md border-[#F18585B2]"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-700">{errors.password.message}</p>
              )}
            </div>
            <div className="text-center md:text-left">
              <button className="bg-[#F18585] hover:bg-white hover:text-[#F18585] border-2 border-[#F18585]  text-white mt-2 py-2 px-28 rounded-full ">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-3">
          <span className="font-semibold md:hidden">
            If you dont have Account?&nbsp;
            <Link href="/signup" className="text-[#F18585] font-bold">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginData;
