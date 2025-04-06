import { Link } from "react-router-dom";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="p-4 bg-transparent shadow-2xl">
      <div className="container mx-auto px-8 flex justify-between items-center">
        
        {/* Navbar Title */}
        <h1 className="cursor-pointer hover:text-orange-500 transition duration-300 text-lg font-semibold tracking-wide font-[Ubuntu]">
          Rishi T.
        </h1>

        {/* Navbar Links */}
        <ul className="flex space-x-6 text-black font-medium text-base font-[Ubuntu]">
          {[ "About", "Skills", "Education", "Projects", "Contact"].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase()}`} className="hover:text-orange-500 hover: transition duration-300">
                {item}.
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle (Optional) */}
        <button className="text-xl hover:text-orange-500 transition duration-300">
          <Moon />
        </button>
      </div>
    </nav>
  );
}

