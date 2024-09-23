//'use client'; // Ensures this component is rendered on the client

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";
import Image from "next/image";
import aishu from "./images/aishu.png";
import design from "./images/design.png";
import consulting from "./images/consulting.png";
import code from "./images/code.png";

export default function Home() {
  return (
    <div>
      <main className="px-10">
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className="text-xl font-burtons">developed_by_as</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl"/>
              </li>
              {/* <li>
                <BsFillSunFill className="cursor-pointer text-2xl"/>
              </li> */}
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className="text-5xl py-3 text-teal-600 font-medium">Aishwarya Shree</h2>
            <h3 className='text-2xl py-2'>Software Engineer and Student</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200'>
              Final year software engineering student at TCE with a passion for developing innovative solutions. Skilled in web development, problem-solving, and constantly exploring new technologies.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-200'>
            <AiFillLinkedin />
            <AiFillTwitterCircle/>
            <AiFillInstagram/>
          </div>
          <div className='relative mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-80 h-80 mt-20  overflow-hidden'>
                <Image src={aishu} layout='fill' objectFit='cover'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-800">
              Translations: Can you help translate this site into a foreign language ? Please email us with details if you can help.
              <span className='text-teal-500'> Hi have currently been selected to do internship at JMAN company.</span> It was through a college placement process. Totally 4 members from our college out of all the students from different departments have been selected.
              <span className='text-teal-500'> I am set to purse my first career at JMAN after the successful completion of my internship. </span>
              I hope I do well at the internship so that they will convert me as a full-time employee.
            </p>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs using design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs using design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={consulting} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs using design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs using design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-800">
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
