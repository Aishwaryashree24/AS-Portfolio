// components/Navigation.js
import Link from "next/link";

const Navigation = ({ darkMode }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4">
      <div className="glass-effect rounded-lg shadow-lg p-4 w-full max-w-lg">
        <nav className="flex justify-around">
          <Link href="/" className={`text-xl ${darkMode ? 'text-white' : 'text-black'} hover:text-teal-500`}>
            Home
          </Link>
          <Link href="/resume" className={`text-xl ${darkMode ? 'text-white' : 'text-black'} hover:text-teal-500`}>
            Resume
          </Link>
          <Link href="/about" className={`text-xl ${darkMode ? 'text-white' : 'text-black'} hover:text-teal-500`}>
            About
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
