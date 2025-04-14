import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState<Boolean>(false);

  return (
    <nav className="bg-gray-800 shadow-lg sticky">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            {/* Home Link */}
            <Link 
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>

            {/* Gallery Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsGalleryOpen(true)}
                onMouseLeave={() => setIsGalleryOpen(false)}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors inline-flex items-center"
              >
                <span>Gallery</span>
                <svg 
                  className="ml-1 h-4 w-4" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setIsGalleryOpen(true)}
                onMouseLeave={() => setIsGalleryOpen(false)}
                className={`${
                  isGalleryOpen ? "block" : "hidden"
                } absolute z-10 -ml-4 mt-1 w-48 rounded-md shadow-lg`}
              >
                <div className="rounded-md bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/gallery"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Gallery Home
                    </Link>
                    <Link
                      to="/gallery/animations"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Animations
                    </Link>
                    <Link
                      to="/gallery/art"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Art
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me Link */}
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;