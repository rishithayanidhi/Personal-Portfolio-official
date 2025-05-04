import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-2xl z-50">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* Navbar Title - redirects to homepage */}
        <Link to="/" className="cursor-pointer hover:text-orange-500 transition duration-300 text-lg font-semibold tracking-wide font-[Ubuntu]">
          Rishi T.
        </Link>

        {/* Centered Navbar Links */}
        <ul className="flex space-x-6 text-black font-medium text-base font-[Ubuntu] ml-auto mr-auto">
          {["About", "Skills", "Education", "Projects", "Experience"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-orange-500 transition duration-300"
              >
                {item}.
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact aligned right */}
        <Link
          to="/contact"
          className="text-black font-medium text-base font-[Ubuntu] hover:text-orange-500 transition duration-300"
        >
          Contact.
        </Link>
      </div>
    </nav>
  );
}
