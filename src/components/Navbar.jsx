import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Company Name */}
        <div className="text-2xl font-bold text-blue-700 tracking-wide">
          FlowBiasCraft
        </div>

        {/* Hamburger Button - Small Screens */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links - Medium & Up */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition duration-300">Home</Link>
          <Link to="/servey" className="hover:text-blue-600 transition duration-300">Survey</Link>
          <Link to="/project" className="hover:text-blue-600 transition duration-300">Projects</Link>
          <Link to="/team" className="hover:text-blue-600 transition duration-300">Team</Link>
          <Link to="/aboutus" className="hover:text-blue-600 transition duration-300">About Us</Link>
        </div>
      </nav>

      {/* Dropdown Menu - Small Screens */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <Link to="/" onClick={toggleMenu} className="block hover:text-blue-600">Home</Link>
          <Link to="/servey" onClick={toggleMenu} className="block hover:text-blue-600">Survey</Link>
          <Link to="/project" onClick={toggleMenu} className="block hover:text-blue-600">Projects</Link>
          <Link to="/team" onClick={toggleMenu} className="block hover:text-blue-600">Team</Link>
          <Link to="/aboutus" onClick={toggleMenu} className="block hover:text-blue-600">About Us</Link>
        </div>
      )}
    </header>
  );
}
