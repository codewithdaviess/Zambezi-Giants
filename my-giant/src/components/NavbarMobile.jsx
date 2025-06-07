import logoBlack from "../assets/img/logoWhite.png";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  Plane,
  BookOpen,
  Info,
  Phone,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function NavbarMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const menuItems = [
    { label: "Destinations", href: "#destinations", icon: <MapPin size={20} /> },
    { label: "Tours & Trips", href: "#tours", icon: <Plane size={20} /> },
    { label: "Blog", href: "#blog", icon: <BookOpen size={20} /> },
    { label: "About Us", href: "#about", icon: <Info size={20} /> },
    { label: "Contact Us", href: "#contact", icon: <Phone size={20} /> },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white text-gray-800 shadow-md md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20 px-2">
            {!mobileMenuOpen && (
              <>
                <button
                  className="p-2 cursor-pointer"
                  aria-label="Open menu"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu size={24} />
                </button>
                <div className="flex-shrink-0 ml-4">
                  <img
                    src={logoBlack}
                    alt="Logo"
                    className="h-11 w-auto transition-all duration-300"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#f38031] z-50 shadow-lg transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <button
          className="absolute top-5 left-5 p-2 rounded-md text-white z-60"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={40} />
        </button>

        <h2 className="mt-24 mb-8 px-6 text-white text-4xl font-semibold w-fit">
          Menu
        </h2>

        <ul className="flex-grow flex flex-col space-y-12 px-6">
          {menuItems.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center space-x-4 text-white font-medium text-lg hover:text-black transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-16 mt-auto flex gap-4">
          <a
            href="#login"
            className="flex-1 flex items-center justify-center space-x-2 border border-white rounded-md py-3 text-[#f38031] bg-white font-semibold hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <LogIn size={20} />
            <span>Login</span>
          </a>
          <a
            href="#signup"
            className="flex-1 flex items-center justify-center space-x-2 rounded-md py-3 bg-[#cc6b21] text-white font-semibold hover:bg-[#b15c1b] transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <UserPlus size={20} />
            <span>Sign Up</span>
          </a>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
