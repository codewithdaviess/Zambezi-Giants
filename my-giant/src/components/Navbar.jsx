import { useEffect, useState } from "react";
import logoBlack from "../assets/img/logoWhite.png";
import { LogIn, UserPlus } from "lucide-react";

const navItems = [
  { label: "Destinations", href: "#destinations" },
  { label: "Tours & Trips", href: "#tours" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sectionOffsets = navItems.map(({ href }) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        return {
          id,
          offsetTop: el?.offsetTop || 0,
          offsetHeight: el?.offsetHeight || 0,
        };
      });

      const current = sectionOffsets.find(({ offsetTop, offsetHeight }) => {
        return scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-gray-800 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logoBlack}
              alt="Logo"
              className="h-11 w-auto transition-all duration-300"
            />
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {navItems.map(({ label, href }) => {
                const isActive = activeSection === href.replace("#", "");
                return (
                  <li key={label}>
                    <a
                      href={href}
                      className="group relative text-sm font-medium text-gray-800 hover:text-[#f38031] transition-colors duration-200"
                    >
                      {label}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-[#f38031] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Login / Signup */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#login"
              className="flex items-center space-x-2 px-4 py-2 text-sm rounded-md border border-[#f38031] bg-white text-[#f38031] font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              <LogIn size={18} />
              <span>Login</span>
            </a>
            <a
              href="#signup"
              className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm bg-[#f38031] text-white font-medium hover:bg-[#cc6b21] transition-colors duration-200"
            >
              <UserPlus size={18} />
              <span>Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
