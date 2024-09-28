// src/app/resume/page.js
'use client'; // Ensure this is a client component

import React, { useEffect, useState } from 'react'; // Import React, useEffect, useState
import { useRouter } from 'next/router'; // Import useRouter
import Image from "next/image";
import aish_resume from "./resume.png";
import { BsArrowLeft } from "react-icons/bs";

export default function Resume() {

  return (
    <div className={`min-h-screen bg-white flex justify-center items-center relative`}>
      <main className="max-w-full flex justify-center">
        <a 
          href="/" // Change this link to your desired back URL
          className="absolute top-5 left-5 text-xl bg-white rounded-full p-2 shadow-md transition hover:bg-gray-200" 
          title="Back" // Tooltip for accessibility
        >
          <BsArrowLeft />
        </a>
        <div className="relative w-full max-w-[595px] h-auto my-20 glass-effect shadow-custom">
          <Image 
            src={aish_resume} 
            width={595} // A4 width in pixels
            height={842} // A4 height in pixels
            alt="My Resume" 
            className="object-contain rounded-2xl" // Ensure image scales correctly
          />
        </div>
      </main>
    </div>
  );
}
