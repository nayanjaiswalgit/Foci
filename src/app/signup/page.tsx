import React from "react";
import Link from "next/link";
import Image from "next/image";
import Google from "../../../public/google.png"
import Facebook from "../../../public/facebook.png"
import Github from "../../../public/github.png"

export default function Signup() {
    return (
      <main className="flex w-screen h-screen min-h-screen flex-col items-center justify-between p-24 bg-[url('/background.jpeg')] opacity-75">
        <div className="grid mx-auto my-auto col grid-cols-12 gap-3 rounded-lg z-0 shadow-2xl backdrop-blur-sm">
          <h1 className="col-span-12 pt-3 pl-5 text-2xl font-bold text-white">Sign up</h1>
          <input type="email" placeholder="email" className="text-black bg-white rounded-lg px-5 mx-5 mt-5 py-2 col-span-12 z-40"/>
          <button className="text-white bg-red-700 rounded-lg px-3 py-3 col-span-12 mx-5">Continue with Email</button> 
          <p className="col-span-12 text-center text-xs mx-5">or, continue with</p>
          <div className="flex col-span-12 gap-3 justify-center mx-5">
            <Link href="" className="bg-white py-2 px-5 rounded-full"><Image src={Google} width={20} height={20} alt={"Google"}/></Link>
            <Link href="" className="bg-white py-2 px-5 rounded-full"><Image src={Github} width={20} height={20} alt={"Google"}/></Link>
            <Link href="" className="bg-white py-2 px-5 rounded-full"><Image src={Facebook} width={20} height={20} alt={"Google"}/></Link>
          </div>
          <p className="col-span-12 text-center text-xs py-2 mx-5">Don't have account, <Link href="/signin" className="text-red-600 font-bold">Signin here</Link> </p> 
        </div>
      </main>
      );
  } 