import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlist: Product[];
  onProductClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onToggleWishlist, wishlist, onProductClick }) => {
  const isWishlisted = wishlist.some(item => item.id === product.id);

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  }

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product);
  }

  return (
    <div 
      className={`group text-center ${onProductClick ? 'cursor-pointer' : ''}`}
      onClick={onProductClick ? () => onProductClick(product) : undefined}
    >
      <div className="relative rounded-lg overflow-hidden aspect-square shadow-sm hover:shadow-md transition-shadow duration-300">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
         <button onClick={handleWishlistClick} className="absolute top-3 right-3 z-10 p-1 bg-white/50 rounded-full hover:bg-white transition-colors" aria-label="Toggle Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-500'}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
        </button>
      </div>
      <div className="pt-4 pb-2">
        <h3 className="font-semibold text-md text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.price} บาท</p>
      </div>
       <div className="h-10"> {/* Container to prevent layout shift */}
        <button onClick={handleCartClick} className="bg-[#C08081] text-white px-6 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-90">
            เพิ่มลงตะกร้า
        </button>
    </div>
    </div>
  );
};

export default ProductCard;