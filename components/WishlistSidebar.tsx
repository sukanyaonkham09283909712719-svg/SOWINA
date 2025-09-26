import React from 'react';
import { Product, Page } from '../types';
import { ICONS } from '../constants';

interface WishlistSidebarProps {
  items: Product[];
  onClose: () => void;
  onToggleWishlist: (product: Product) => void;
  onNavigate: (page: Page) => void;
}

const WishlistSidebar: React.FC<WishlistSidebarProps> = ({ items, onClose, onToggleWishlist, onNavigate }) => {
  
  const handleShopClick = () => {
    onClose();
    onNavigate('Shop');
  }
  
  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col sowina-font-sans transform transition-transform duration-300 ease-in-out translate-x-0">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold sowina-font-serif">สิ่งที่อยากได้ ({items.length})</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">{ICONS.close}</button>
        </div>

        {items.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
            </div>
            <h3 className="text-lg font-semibold">Wishlist ของคุณว่างเปล่า</h3>
            <p className="text-gray-500 my-2">เพิ่มสินค้าที่คุณชอบเพื่อบันทึกไว้ดูภายหลัง</p>
            <button onClick={handleShopClick} className="mt-4 bg-[#C08081] text-white px-6 py-2 rounded-full font-semibold">
              เลือกซื้อสินค้า
            </button>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-4">
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.id} className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0 mr-4" />
                  <div className="flex-grow">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.price} บาท</p>
                  </div>
                  <button onClick={() => onToggleWishlist(item)} className="text-gray-400 hover:text-red-500 ml-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistSidebar;
