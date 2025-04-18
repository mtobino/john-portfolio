import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState<Boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsGalleryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 shadow-lg sticky z-50">
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors inline-flex items-center"
              >
                <span>Gallery</span>
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isGalleryOpen ? 'rotate-180' : ''}`}
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
                className={`${
                  isGalleryOpen ? "block" : "hidden"
                } absolute z-50 -ml-4 mt-1 w-48 rounded-md shadow-lg transition-all duration-200`}
              >
                <div className="rounded-md bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link to='/gallery'
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsGalleryOpen(false)}
                      >
                        Gallery
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/gallery/animations"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsGalleryOpen(false)}
                    >
                      Animations
                    </Link>
                    <Link
                      to="/gallery/art"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsGalleryOpen(false)}
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
            {/* Contact Link */}
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;