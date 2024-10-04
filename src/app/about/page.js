import Image from "next/image";
import aishu from "../images/aishu.png";
import { BsArrowLeft } from "react-icons/bs";

export default function About() {

    return (
      <div className={`min-h-screen bg-white dark:bg-black flex justify-center items-center relative`}>
        <main className="max-w-full flex justify-center">
          <p className="dark:text-white">
                hi this is a small page ABOUT me
          </p>
          <a 
            href="/" // Change this link to your desired back URL
            className="absolute top-20 md:20 left-5 text-xl bg-white rounded-full p-2 shadow-md transition hover:bg-gray-200" 
            title="Back" // Tooltip for accessibility
          >
            <BsArrowLeft />
          </a>
          <div className='relative mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
                <Image src={aishu} layout='fill' objectFit='cover'/>
          </div>
        </main>
      </div>
    );
  }