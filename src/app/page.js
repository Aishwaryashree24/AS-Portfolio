'use client'; // useState only works in a client component. so it is advisable to include it

import { useState } from 'react';
import Navigation from "./Navigation/Navigation";
import Image from "next/image";
import aishu from "./images/aishu.png";
import design from "./images/design.png";
import consulting from "./images/consulting.png";
import code from "./images/code.png";
import { AiFillMail, AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white dark:bg-black px-10 md:px-20 lg:px-40">
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

        <section className="min-h-screen pt-20"> {/* Add padding-top to avoid overlap */}
          <div className='text-center p-10'>
            <h2 className="text-5xl py-3 text-teal-600 font-medium md:text-6xl">Aishwarya Shree</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Engineer and Student</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto'>
              Final year software engineering student at TCE with a passion for developing innovative solutions.
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
         </section>
      </main>
    </div>
  );
}
