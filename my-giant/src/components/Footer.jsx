import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f38031] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Zambezi Giants</h2>
          <p className="text-sm text-white/90">
            Inspiring journeys and unforgettable experiences — let's explore together.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Tours</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4">
            <a href="#"><Facebook size={20} className="hover:text-black transition" /></a>
            <a href="#"><Instagram size={20} className="hover:text-black transition" /></a>
            <a href="#"><Twitter size={20} className="hover:text-black transition" /></a>
            <a href="#"><Mail size={20} className="hover:text-black transition" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white/30 pt-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Zambezi Giants . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
