import React, { useState } from 'react';
import { Product } from '../types';
import { ICONS } from '../constants';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  wishlist: Product[];
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onAddToCart, onToggleWishlist, wishlist }) => {
  const [quantity, setQuantity] = useState(1);
  const isWishlisted = wishlist.some(item => item.id === product.id);

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
    onClose(); // Close modal after adding to cart
  };

  const handleWishlistClick = () => {
    onToggleWishlist(product);
  }

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 sowina-font-sans" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 relative">
             <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10" aria-label="Close">
                {ICONS.close}
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                {/* Image Section */}
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold sowina-font-serif text-gray-900 mb-2">{product.name}</h2>
                    <p className="text-2xl sowina-font-serif text-gray-700 mb-4">{product.price} บาท</p>
                    <div className="border-t pt-4">
                        <p className="text-gray-600 sowina-font-sans leading-relaxed">{product.description}</p>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center border rounded-md">
                            <button onClick={decrementQuantity} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md transition">-</button>
                            <span className="px-4 py-2 text-md font-semibold">{quantity}</span>
                            <button onClick={incrementQuantity} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md transition">+</button>
                        </div>
                        <button 
                            onClick={handleAddToCartClick}
                            className="flex-grow bg-[#C08081] text-white py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all text-md"
                        >
                            เพิ่มลงตะกร้า
                        </button>
                         <button onClick={handleWishlistClick} className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="Toggle Wishlist">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-colors ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-500'}`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;