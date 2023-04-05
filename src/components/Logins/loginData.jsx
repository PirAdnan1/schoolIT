import React, { useState } from "react";

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
})


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
}

  return (
    <div className="grid sm:grid-cols-2">
      <div className="max-w-[570px] text-white  flex flex-col px-4 md:px-0 h-screen justify-center items-center bg-[#F18585]">
        <h1 className="text-[40px]">Already Signed up?</h1>
        <p className="mt-9 max-w-[455px] text-center">
          To stay connected with us please login with your personal info
        </p>
        <button className="bg-[#F18585] border border-white text-white mt-5 hover:bg-white hover:text-[#F18585] hover:border-2 hover:border-[#F18585] px-20 py-2 rounded-full max-w-[340px]">
          Sign Up
        </button>
      </div>
      <div>
        <div className="mt-14">
          <Logo />
        </div>

        <div className="mt-14 px-4 md:px-0">
          <h1 className="text-[40px] font-bold">Access Account</h1>
          <p className="mt-8 text-[18px]">
            Gain access to your account and explore!
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="my-4">
              <input
              {...register("email")}
                type="email"
                className="px-3 border-2 outline-none border-[#F18585B2] py-1.5 w-96 rounded-md"
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
                className="px-3 outline-none border-2 border-[#F18585B2] py-1.5 w-96 max-w-[638px] rounded-md"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-700">{errors.password.message}</p>
              )}
            </div>
            <div className="text-center md:text-left" >
              <button className="bg-[#F18585] hover:bg-white hover:text-[#F18585] hover:border-2 hover:border-[#F18585]  text-white mt-2 py-2 px-28 rounded-full ">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginData;