'use client'; // useState only works in a client component. so it is advisable to include it

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { AiFillMail, AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import aishu from "./images/aishu.png";
import design from "./images/design.png";
import consulting from "./images/consulting.png";
import code from "./images/code.png";
import web1 from "./images/web1.png";
import web2 from "./images/web2.png";
import web3 from "./images/web3.png";
import web4 from "./images/web4.png";
import web5 from "./images/web5.png";
import web6 from "./images/web6.png";
import { useState } from 'react';
import Navigation from "./Navigation/Navigation";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? 'dark' : ''}>
      <main className="bg-white dark:bg-black px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className="text-2xl font-burtons dark:text-white">developed_by_as</h1>
            <ul className="flex items-center">
            <li className="inline-block transform transition-transform duration-300 hover:scale-125">
              {darkMode ? (
                <BsFillSunFill 
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-xl text-yellow-500 size={50}'
                />
              ) : (
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-xl text-black size={50}'
                />
              )}
              
            </li>
            <li>
              <a 
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" 
                href={`/resume?darkMode=${darkMode ? 'true' : 'false'}`}>
                Resume
              </a>
            </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className="text-5xl py-3 text-teal-600 font-medium md:text-6xl">Aishwarya Shree</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Engineer and Student</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto'>
              Final year software engineering student at TCE with a passion for developing innovative solutions. Skilled in web development, problem-solving, and constantly exploring new technologies.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-200'>
            <a href="https://www.linkedin.com/in/aishwarya-shree-803376204/" target="_blank" rel="noopener noreferrer" className="inline-block transform transition-transform duration-300 hover:scale-125"><AiFillLinkedin size={50}/></a>
            <a href="https://github.com/Aishwaryashree24" target="_blank" rel="noopener noreferrer" className="inline-block transform transition-transform duration-300 hover:scale-125"><AiFillGithub size={50}/></a>
            <a href='mailto:aishwaryashree826@gmail.com' className="inline-block transform transition-transform duration-300 hover:scale-125"><AiFillMail size={50}/></a>
            <a href="https://www.instagram.com/aishwaryashreo/?next=%2F" target='_blank' rel='noopener noreferrer' className="inline-block transform transition-transform duration-300 hover:scale-125"><AiFillInstagram size={50}/></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
                <Image src={aishu} layout='fill' objectFit='cover'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl mt-10 py-1 dark:text-white'>Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Translations: Can you help translate this site into a foreign language ? Please email us with details if you can help.
              <span className='text-teal-500'> Hi have currently been selected to do internship at JMAN company.</span> It was through a college placement process. Totally 4 members from our college out of all the students from different departments have been selected.
              <span className='text-teal-500'> I am set to purse my first career at JMAN after the successful completion of my internship. </span>
              I hope I do well at the internship so that they will convert me as a full-time employee.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg dark:shadow-gray-900 p-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Beautiful Designs</h3>
              <p className='py-2 dark:text-white'>
                Creating elegant designs using design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Figma</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Photoshop</p>
            </div>
            <div className='text-center shadow-lg dark:shadow-gray-900 p-10 rounded-xl my-10'>
              <Image src={code} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Beautiful Designs</h3>
              <p className='py-2 dark:text-white'>
                Creating elegant designs using design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Figma</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Photoshop</p>
            </div>
            <div className='text-center shadow-lg dark:shadow-gray-900 p-10 rounded-xl my-10'>
              <Image src={consulting} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Beautiful Designs</h3>
              <p className='py-2 dark:text-white'>
                Creating elegant designs using design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Figma</p>
              <p className='text-gray-800 py-1 dark:text-gray-200'>Photoshop</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Translations: Can you help translate this site into a foreign language ? Please email us with details if you can help.
              <span className='text-teal-500'> Hi have currently been selected to do internship at JMAN company.</span> It was through a college placement process. Totally 4 members from our college out of all the students from different departments have been selected.
              <span className='text-teal-500'> I am set to purse my first career at JMAN after the successful completion of my internship. </span>
              I hope I do well at the internship so that they will convert me as a full-time employee.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap'>
            {/* basis-1/2 means give the element 50%of it's width */}
            <div className='mt-1 basis-1/3 flex-1'><Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='mt-3 basis-1/3 flex-1'><Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='mt-3 basis-1/3 flex-1'><Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='mt-3 basis-1/3 flex-1'><Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='mt-3 basis-1/3 flex-1'><Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='mt-3 basis-1/3 flex-1'><Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
          </div>
        </section>
        <Navigation darkMode={darkMode} />
      </main>
    </div>
  );
}
