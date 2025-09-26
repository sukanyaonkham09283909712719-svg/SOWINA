import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import OurStoryPage from './components/OurStoryPage';
import CustomDesignPage from './components/CustomDesignPage';
import ConsultationPage from './components/ConsultationPage';
import SearchModal from './components/SearchModal';
import WishlistSidebar from './components/WishlistSidebar';
import CartSidebar from './components/CartSidebar';
import LoginModal from './components/LoginModal';
import ProductDetailModal from './components/ProductDetailModal';
import { Page, Product, CartItem } from './types';
import { ICONS, PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);


  const handleNavigate = (page: Page, filter?: string) => {
    setCurrentPage(page);
    if (filter !== undefined) {
      setActiveFilter(filter);
    } else if (page !== 'Shop') {
      setActiveFilter(null);
    }
    window.scrollTo(0, 0);
  };
  
  const handleToggleWishlist = (product: Product) => {
    setWishlist(prev => 
      prev.find(item => item.id === product.id)
        ? prev.filter(item => item.id !== product.id)
        : [...prev, product]
    );
  };

  const handleAddToCart = (product: Product, quantityToAdd: number = 1) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
        );
      }
      return [...prev, { ...product, quantity: quantityToAdd }];
    });
    setIsCartOpen(true); // Open cart sidebar on add
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };
  
  const handleUpdateCartQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
    }
  };
  
  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    setShowWelcomeBanner(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Potentially clear user-specific data here
  };
  
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  }


  const renderPage = () => {
    const commonProductProps = {
        onAddToCart: handleAddToCart,
        onToggleWishlist: handleToggleWishlist,
        wishlist: wishlist,
        onProductClick: handleProductClick,
    };
    switch (currentPage) {
      case 'Home':
        return <HomePage onNavigate={handleNavigate} {...commonProductProps} />;
      case 'Shop':
        return <ShopPage products={PRODUCTS} initialFilter={activeFilter} onNavigate={handleNavigate} {...commonProductProps} />;
      case 'Our Story':
        return <OurStoryPage onNavigate={handleNavigate} />;
      case 'Custom Design':
        return <CustomDesignPage onNavigate={handleNavigate} />;
      case 'Consultation':
        return <ConsultationPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} {...commonProductProps} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F4F4]">
        {isLoggedIn && showWelcomeBanner && (
            <div className="bg-[#C08081] text-white text-center py-2 px-4 relative sowina-font-sans">
                <span>ยินดีต้อนรับสมาชิกใหม่! รับส่วนลด 10% และส่งฟรีสำหรับการสั่งซื้อครั้งแรก</span>
                <button onClick={() => setShowWelcomeBanner(false)} className="absolute top-1/2 right-4 -translate-y-1/2">
                    {ICONS.close}
                </button>
            </div>
        )}
      <Header 
        onNavigate={handleNavigate} 
        currentPage={currentPage}
        onSearchClick={() => setIsSearchOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogoutClick={handleLogout}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate}/>

      {/* Modals & Sidebars */}
      {isSearchOpen && <SearchModal products={PRODUCTS} onClose={() => setIsSearchOpen(false)} onProductClick={handleProductClick} />}
      {isWishlistOpen && <WishlistSidebar items={wishlist} onClose={() => setIsWishlistOpen(false)} onToggleWishlist={handleToggleWishlist} onNavigate={handleNavigate} />}
      {isCartOpen && <CartSidebar items={cart} onClose={() => setIsCartOpen(false)} onUpdateQuantity={handleUpdateCartQuantity} onRemoveItem={handleRemoveFromCart} isLoggedIn={isLoggedIn} />}
      {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} onLogin={handleLogin} />}
      {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={handleAddToCart} onToggleWishlist={handleToggleWishlist} wishlist={wishlist} />}

    </div>
  );
};

export default App;