import React from 'react';
import { Page } from '../types';
import { ICONS } from '../constants';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  onSearchClick: () => void;
  onWishlistClick: () => void;
  onCartClick: () => void;
  wishlistCount: number;
  cartCount: number;
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
  const isActive = currentPage === page;
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onNavigate(page);
      }}
      className={`text-gray-600 hover:text-[#C08081] transition-colors px-3 py-2 rounded-md text-sm font-medium ${
        isActive ? 'text-[#C08081] font-semibold' : ''
      }`}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ 
    onNavigate, 
    currentPage,
    onSearchClick,
    onWishlistClick,
    onCartClick,
    wishlistCount,
    cartCount,
    isLoggedIn,
    onLoginClick,
    onLogoutClick
}) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40 sowina-font-sans">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold sowina-font-serif text-black cursor-pointer" onClick={() => onNavigate('Home')}>
          SOWINA
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <NavLink page="Home" currentPage={currentPage} onNavigate={onNavigate}>Home</NavLink>
          <NavLink page="Shop" currentPage={currentPage} onNavigate={onNavigate}>Shop</NavLink>
          <NavLink page="Custom Design" currentPage={currentPage} onNavigate={onNavigate}>Custom Design</NavLink>
          <NavLink page="Our Story" currentPage={currentPage} onNavigate={onNavigate}>Our Story</NavLink>
        </div>
        <div className="flex items-center space-x-4">
            <button onClick={onSearchClick} className="text-gray-500 hover:text-[#C08081]" aria-label="Search"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
            <button onClick={onWishlistClick} className="relative text-gray-500 hover:text-[#C08081]" aria-label="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
              {wishlistCount > 0 && <span className="absolute -top-2 -right-2 bg-[#C08081] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{wishlistCount}</span>}
            </button>
            <button onClick={onCartClick} className="relative text-gray-500 hover:text-[#C08081]" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-[#C08081] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{cartCount}</span>}
            </button>
            <div className="border-l h-6"></div>
             <button onClick={isLoggedIn ? onLogoutClick : onLoginClick} className="text-gray-500 hover:text-[#C08081]" aria-label={isLoggedIn ? 'Logout' : 'Login'}>
                {isLoggedIn ? ICONS.logout : ICONS.person}
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;