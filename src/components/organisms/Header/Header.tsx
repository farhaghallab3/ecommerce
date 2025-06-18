
import React from 'react';
import HeaderTopBar from './HeaderTopBar';
import HeaderMainBar from './HeaderMainBar';
import HeaderNavBar from './HeaderNavBar';

export const Header: React.FC = () => {
  return (
    <header className="w-full fixed z-10 top-0"> {/* Remove fixed here if it's meant to scroll with page */}
      <HeaderTopBar />
      <HeaderMainBar />
      <HeaderNavBar />
    </header>
  );
};