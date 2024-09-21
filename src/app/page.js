//'use client'; // Ensures this component is rendered on the client

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="min-h-screen">
          <nav className='py-10'>
            <h1>developed_by_AS</h1>
            <ul className="flex space-x-4">
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <BsFillSunFill />
              </li>
            </ul>
            <ul>
              <li><a href="#">Resume</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
