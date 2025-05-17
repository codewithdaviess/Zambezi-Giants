import logo from "../assets/img/logo.png";
import {
  MenuIcon,
  MenuCloseIcon,
  UserIcon,
  SearchIcon,
  DropdownIcon,
} from "./Icons";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const searchRef = useRef(null);
  const userRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        userRef.current &&
        !userRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
        setUserOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Disable background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-white shadow-2xl mx-3 rounded-xl relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <div
              className="block md:hidden cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
            </div>
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-11 w-auto" />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="text-sm font-medium text-gray-700 hover:text-[#f38031]"
                >
                  Explore
                </a>
              </li>
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-sm font-medium text-gray-700 hover:text-[#f38031]"
                >
                  Services
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-48">
                    <li>
                      <a
                        href="#service1"
                        className="block px-4 py-2 hover:text-[#f38031] hover:bg-gray-100"
                      >
                        Service 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service2"
                        className="block px-4 py-2 hover:text-[#f38031] hover:bg-gray-100"
                      >
                        Service 2
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm font-medium text-gray-700 hover:text-[#f38031]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm font-medium text-gray-700 hover:text-[#f38031]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            {/* Desktop Search */}
            <div
              ref={searchRef}
              className="relative hidden md:flex items-center h-10 border border-gray-300 rounded-full bg-gray-100 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div
                className={`flex items-center transition-all duration-300 ease-in-out ${
                  searchOpen ? "max-w-[320px] pl-3 pr-2" : "max-w-10 px-0"
                }`}
                style={{ transitionProperty: "max-width, padding" }}
              >
                {searchOpen && (
                  <>
                    <div className="relative">
                      <select className="bg-transparent text-sm text-gray-700 pr-6 pl-2 py-2 focus:outline-none appearance-none">
                        <option value="destinations">Destinations</option>
                        <option value="activities">Activities</option>
                        <option value="hotels">Hotels</option>
                      </select>
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                        <DropdownIcon />
                      </div>
                    </div>
                    <div className="w-px h-5 bg-gray-300 mx-2" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-transparent py-2 text-sm focus:outline-none flex-grow min-w-[80px]"
                    />
                  </>
                )}
                <button
                  onClick={() => {
                    setSearchOpen(!searchOpen);
                    if (!searchOpen) setUserOpen(false);
                  }}
                  className="p-2 flex-shrink-0"
                >
                  <SearchIcon />
                </button>
              </div>
            </div>

            {/* Mobile Icons */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition"
              >
                <SearchIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition"
              >
                <UserIcon />
              </a>
            </div>

            {/* Desktop User */}
            <div
              ref={userRef}
              className="relative hidden md:flex items-center h-10 transition-all duration-300 ease-in-out overflow-hidden border border-gray-300 rounded-full bg-gray-100"
            >
              <div
                className={`flex items-center transition-all duration-300 ease-in-out ${
                  userOpen ? "max-w-[200px] px-4" : "max-w-10 px-0"
                }`}
                style={{ transitionProperty: "max-width, padding" }}
              >
                {userOpen && (
                  <div className="flex items-center gap-2 text-sm text-gray-700 whitespace-nowrap">
                    <button className="hover:text-[#f38031]">Sign In</button>
                    <span className="text-gray-400">|</span>
                    <button className="hover:text-[#f38031]">Sign Up</button>
                  </div>
                )}
                <button
                  onClick={() => {
                    setUserOpen(!userOpen);
                    if (!userOpen) setSearchOpen(false);
                  }}
                  className="p-2 flex-shrink-0"
                >
                  <UserIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-Down Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white rounded-md mt-2 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <ul className="flex flex-col p-6 space-y-4">
          <li>
            <a
              href="#home"
              className="text-gray-700 font-medium hover:text-[#f38031]"
            >
              Explore
            </a>
          </li>
          <li>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-700 hover:text-[#f38031] font-medium text-left w-full"
            >
              Services
            </button>
            {dropdownOpen && (
              <ul className="pl-4 space-y-2">
                <li>
                  <a
                    href="#service1"
                    className="block text-gray-700  hover:text-[#f38031]"
                  >
                    Service 1 
                  </a>
                </li>
                <li>
                  <a
                    href="#service2"
                    className="block text-gray-700 hover:text-[#f38031]"
                  >
                    Service 2
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 font-medium hover:text-[#f38031]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 font-medium hover:text-[#f38031]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
