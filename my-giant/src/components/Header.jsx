import React from 'react';
import bgImage from '../assets/img/newsletter.png'; // your background image

const Header = () => {
  return (
    <header
      className="relative flex items-center justify-center text-white"
      style={{
        height: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/10 "></div>

      {/* Header content */}
      <h1 className="relative text-4xl font-bold z-10">
        Welcome
      </h1>
    </header>
  );
};

export default Header;
