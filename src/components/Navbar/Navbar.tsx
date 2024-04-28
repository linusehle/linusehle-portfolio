import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  const scrollStart = () => {
    document.getElementById("start")?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollAbout = () => {
    document.getElementById("about")?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollSkills = () => {
    document.getElementById("skills")?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollWork = () => {
    document.getElementById("work")?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <nav className="flex items-center flex-wrap p-6 fixed bg-[#000000] text-white z-50 select-none">
      <div className="block ">
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
          className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
            <path 
            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" 
            />
          </svg>
          <svg
          className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
            <path 
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 
            10l-7.071 7.071 1.414 1.414L10 11.414l7.071 
            7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 
            8.586z" 
            />
          </svg>
        </button>
      </div>
      <div className={`w-full block ${isOpen ? "block" : "hidden"}`}>
        <div>
          <Link 
          to={"/"} 
          className="block pt-4 text-zinc-300 mr-4"
          onClick={scrollStart}
          >
            Start
          </Link>
          <a 
          className="block pt-4 text-zinc-300 mr-4 cursor-pointer "
          onClick={scrollAbout}
          >
            Über mich
          </a>
          <a 
          className="block pt-4 text-zinc-300 mr-4 cursor-pointer"
          onClick={scrollSkills}
          >
            Kompetenzen
          </a>
          <a 
          className="block pt-4 text-zinc-300 mr-4 cursor-pointer"
          onClick={scrollWork}
          >
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
