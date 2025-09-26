import React, { useState, useMemo } from 'react';
import { Product, Page } from '../types';
import { ICONS } from '../constants';

interface SearchModalProps {
  products: Product[];
  onClose: () => void;
  onProductClick: (product: Product) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ products, onClose, onProductClick }) => {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) {
      return [];
    }
    const lowerCaseQuery = query.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(lowerCaseQuery) ||
      p.description.toLowerCase().includes(lowerCaseQuery)
    ).slice(0, 5); // Limit results to 5
  }, [query, products]);

  const handleProductClick = (product: Product) => {
    onClose();
    onProductClick(product);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-start justify-center p-4 pt-[10vh] sowina-font-sans" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ค้นหาสินค้า..."
            className="w-full px-4 py-4 pr-10 text-lg border-0 rounded-t-lg focus:ring-2 focus:ring-[#C08081] focus:outline-none"
            autoFocus
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
        
        {query && (
          <div className="p-4 border-t max-h-[50vh] overflow-y-auto">
            {filteredProducts.length > 0 ? (
              <ul>
                {filteredProducts.map(product => (
                  <li key={product.id} onClick={() => handleProductClick(product)} className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md flex-shrink-0 mr-4"/>
                    <div>
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.price} บาท</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>ไม่พบสินค้าที่ตรงกับ "{query}"</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;