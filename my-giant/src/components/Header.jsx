import React from 'react';
import bgImage from '../assets/img/newsletter.png';
import HomeSearchForm from './HomeSearchForm';

const Header = () => {
  return (
    <header
      className="relative flex flex-col items-center justify-center text-white px-4"
      style={{
        height: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay with subtle opacity */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Heading */}
      <h1 className="relative text-5xl font-extrabold tracking-wide z-10 text-center max-w-lg">
        Explore Your Next Adventure
      </h1>

      <HomeSearchForm />
    </header>
  );
};

export default Header;
