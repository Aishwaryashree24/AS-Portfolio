// src/app/resume/page.js
'use client'; // Ensure this is a client component

import React, { useEffect, useState } from 'react'; // Import React, useEffect, useState
import { useRouter } from 'next/router'; // Import useRouter
import Image from "next/image";
import aish_resume from "./resume.png";
import { BsArrowLeft } from "react-icons/bs";

export default function Resume() {
  const router = useRouter(); // Initialize the router
  const { query } = router; // Get query parameters
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  useEffect(() => {
    // Check if darkMode parameter is present in the query
    if (query.darkMode === 'true') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [query.darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-white'} flex justify-center items-center relative`}>
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
