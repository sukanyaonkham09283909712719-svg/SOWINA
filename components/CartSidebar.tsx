import React from 'react';
import { CartItem } from '../types';
import { ICONS } from '../constants';

interface CartSidebarProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  isLoggedIn: boolean;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ items, onClose, onUpdateQuantity, onRemoveItem, isLoggedIn }) => {
  
  const SHIPPING_COST = 39;
  const subtotal = items.reduce((sum, item) => sum + (parseInt(item.price) * item.quantity), 0);
  const discount = isLoggedIn ? subtotal * 0.10 : 0;
  const shipping = isLoggedIn ? 0 : SHIPPING_COST;
  const total = subtotal - discount + shipping;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col sowina-font-sans transform transition-transform duration-300 ease-in-out translate-x-0">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold sowina-font-serif">ตะกร้าสินค้า</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">{ICONS.close}</button>
        </div>

        {items.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-lg font-semibold">ตะกร้าของคุณว่างเปล่า</h3>
            <p className="text-gray-500 my-2">เลือกชมสินค้าเพื่อเพิ่มลงตะกร้า</p>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto p-4">
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item.id} className="flex items-start">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0 mr-4" />
                    <div className="flex-grow">
                      <h4 className="font-semibold text-md">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.price} บาท</p>
                      <div className="flex items-center border rounded-md w-fit mt-2">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">-</button>
                        <span className="px-3 py-1 text-sm">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">+</button>
                      </div>
                    </div>
                    <button onClick={() => onRemoveItem(item.id)} className="text-gray-400 hover:text-red-500 ml-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 border-t bg-gray-50">
              <div className="space-y-2 text-sm">
                 <div className="flex justify-between">
                    <span>ราคาสินค้า</span>
                    <span>{subtotal.toLocaleString()} บาท</span>
                 </div>
                 {isLoggedIn && (
                    <div className="flex justify-between text-green-600">
                        <span>ส่วนลดสมาชิกใหม่ (10%)</span>
                        <span>- {discount.toLocaleString(undefined, {minimumFractionDigits: 2})} บาท</span>
                    </div>
                 )}
                 <div className="flex justify-between">
                    <span>ค่าจัดส่ง</span>
                    <span>{shipping === 0 ? <span className="text-green-600">ฟรี</span> : `${shipping.toLocaleString()} บาท`}</span>
                 </div>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <span className="text-lg font-semibold">ยอดรวม</span>
                <span className="text-lg font-bold sowina-font-serif">{total.toLocaleString(undefined, {minimumFractionDigits: 2})} บาท</span>
              </div>
              <button className="w-full bg-[#C08081] text-white py-3 rounded-full font-semibold hover:bg-opacity-90 mt-4">
                ไปยังหน้าชำระเงิน
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
