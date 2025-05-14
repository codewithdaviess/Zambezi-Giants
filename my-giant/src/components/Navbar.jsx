import logo from "../assets/img/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg mt-6 mx-6 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-11 w-auto" />
          </div>
        </div>
      </div>
    </nav>
  );
}
