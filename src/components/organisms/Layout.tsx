import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';


interface MainLayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};