"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilepic from "../assets/profilepic.png";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-gradient-to-b from-black via-[#281942] via-35% to-[#DBAF6E]">
        <div className="absolute rounded-[50%] w-[3000px] h-[1300px]  top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
        <div className="relative">
      <div className=" text-8xl text-center font-bold ">
        <h1 className="text-[#98B4CE] text-8xl">Hi, I am</h1>
        <h1 className="text-[#E48A57] text-8xl">Rohit Rana</h1>
      </div>
      <motion.div className=" hidden md:block absolute left-[280px] top-[170px]"drag>
        
        <Image
          src={cursor}
          height={170}
          width={170}
          alt="cursor"
          className=""
          draggable="false"
        />
      </motion.div>
      <motion.div className=" hidden md:block absolute right-[220px] top-[20px]" drag>
        <Image
          src={lightning}
          height={120}
          width={120}
          alt="message"
          className=""
          draggable="false"
        />
      </motion.div>
      <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
        I am a full-stack developer focused on creating websites that provide the best experience for users
      </p>
      <Image
        src={profilepic}
        alt="profile picture"
        className="h-auto w-auto mx-auto"
      />
      </div>
    </div>
  );
};

export default Hero;
