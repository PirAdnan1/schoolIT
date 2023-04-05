import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/src/assets/logo";
// Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";
import { db } from "../config/config";
import { doc, setDoc } from "firebase/firestore";
// Yup
import * as Yup from "yup";
// hooks
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Form() {
  const [firstName, setfirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // validation Scheema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Field is Required"),
    lastName: Yup.string().required("Field is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string().min(8).max(32).required("Password Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  // onSubmit
  const onSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setDetails(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const setDetails = async (uid) => {
    await setDoc(doc(db, "userData", uid), {
      firstName,
      lasttName,
      email,
      uid,
    });
  };

  return (
    <>
      <div className="grid sm:grid-cols-2">
        <div className="max-w-[570px] text-white  flex flex-col h-screen w-screen justify-center items-center bg-[#F18585]">
          <h1 className="text-[40px]">Already Signed up?</h1>
          <p className="mt-9 max-w-[455px] text-center">
            To stay connected with us please login with your personal info
          </p>
          <Link href="/login" className="bg-[#F18585] border border-white text-white mt-5 px-20 py-2 hover:bg-white hover:text-[#F18585] hover:border-2 rounded-full max-w-[340px]">
            Sign In
          </Link>
        </div>
        <div>
          <div className="mt-14">
            <Logo />
          </div>
          <div className="mt-7 px-4 md:px-0">
            <h1 className="text-[40px] font-bold">Create Account</h1>
            <p className="mt-9 text-[18px]">
              Let’s get you all set up for your first onboarding experience{" "}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <input
                {...register("firstName")}
                type="text"
                className="outline-none max-w-[538px] my-3 py-3 px-4 rounded-md border border-[#F18585B2]"
                onChange={(e) => setfirstName(e.target.value)}
                placeholder="FirstName"
              />
              {errors.firstName && (
                <p className="text-red-700">{errors.firstName.message}</p>
              )}
              <input
                {...register("lastName")}
                type="text"
                className="outline-none max-w-[538px] my-3 py-3 px-4 border rounded-md border-[#F18585B2]"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="LastName"
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}

              <input
                {...register("email")}
                type="email"
                className="outline-none max-w-[538px] my-3 py-3 px-4 border rounded-md border-[#F18585B2]"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-700">{errors.email.message}</p>
              )}

              <input
                {...register("password")}
                type="password"
                className="outline-none max-w-[538px] my-3 py-3 px-4 border rounded-md border-[#F18585B2]"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-700">{errors.password.message}</p>
              )}

              <button className=" bg-[#F18585] text-white my-2 px-4 py-2 hover:bg-white hover:text-[#F18585] hover:border-2 hover:border-[#F18585] rounded-full max-w-[340px]">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
