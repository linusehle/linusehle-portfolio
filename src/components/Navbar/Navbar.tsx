import { useState } from "react";

function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center flex-wrap p-6 bg-[#000000] text-white">
      <div className="block">
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
          <a 
          href="#" 
          className="block pt-4 text-zinc-300 mr-4">
            Start
          </a>
          <a 
          href="#" 
          className="block pt-4 text-zinc-300 mr-4">
            Über mich
          </a>
          <a 
          href="#" 
          className="block pt-4 text-zinc-300 mr-4">
            Kompetenzen
          </a>
          <a 
          href="#" 
          className="block pt-4 text-zinc-300 mr-4">
            Portfolio
          </a>
          <a 
          href="#" 
          className="block pt-4 text-zinc-300 mr-4">
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
