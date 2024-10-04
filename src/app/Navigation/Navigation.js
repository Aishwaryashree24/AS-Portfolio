// // components/Navigation.js
"use client"; // This converts the component to a client component

import Link from "next/link";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply the dark mode class to the <html> element whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 glass-effect">
        <h1 className={`text-3xl font-burtons ${darkMode ? "text-white" : "text-black"}`}>
          developed by as
        </h1>
  
        <div className="flex items-center space-x-8 mr-4">
          <Link href="/" className={`text-xl ${darkMode ? "text-white" : "text-black"} hover:text-teal-800`}>
            Home
          </Link>
          <Link href="/resume" className={`text-xl ${darkMode ? 'text-white' : 'text-black'} hover:text-teal-800`}>
            Resume
          </Link>
          <Link href="/about" className={`text-xl ${darkMode ? "text-white" : "text-black"} hover:text-teal-800`}>
            About
          </Link>
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <BsFillSunFill className="text-xl cursor-pointer text-yellow-500 hover:scale-125 transition-transform duration-300" />
            ) : (
              <BsFillMoonStarsFill className="text-xl cursor-pointer text-black hover:text-white hover:scale-125 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>


      {/* Bottom Navigation Bar */}
      {/* <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4">
        <div className="glass-effect rounded-lg shadow-lg p-4 w-full max-w-lg">
          <nav className="flex justify-around">
            <Link href="/" className={`text-xl ${darkMode ? "text-white" : "text-black"}`}>
              Home
            </Link>
            <Link href="/resume" className={`text-xl ${darkMode ? 'text-white' : 'text-black'} hover:text-white`}>
              Resume
            </Link>
            <Link href="/about" className={`text-xl ${darkMode ? "text-white" : "text-black"}`}>
              About
            </Link>
          </nav>
        </div>
      </div> */}
    </>
  );
};

export default Navigation;
