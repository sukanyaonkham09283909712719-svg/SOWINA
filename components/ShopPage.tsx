import React, { useState, useMemo } from 'react';
import { Product, Page, BeliefCategory } from '../types';
import ProductCard from './ProductCard';
import { beliefThaiMap, BELIEF_CATEGORIES, PRODUCT_CATEGORIES } from '../constants';

interface ShopPageProps {
  products: Product[];
  initialFilter: string | null;
  onNavigate: (page: Page) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onToggleWishlist: (product: Product) => void;
  wishlist: Product[];
  onProductClick: (product: Product) => void;
}

const categoryOrder: { [key in Product['category']]: number } = {
  'Hair Clip': 1,
  'Necklace': 2,
  'Bracelet': 3,
  'Ring': 4,
};

const ShopPage: React.FC<ShopPageProps> = ({ products, initialFilter, onAddToCart, onToggleWishlist, wishlist, onProductClick }) => {
  const [filters, setFilters] = useState<{
    belief: BeliefCategory['name'] | null;
    category: Product['category'] | null;
  }>({
    belief: initialFilter ? beliefThaiMap[initialFilter] : null,
    category: null,
  });

  const [sortBy, setSortBy] = useState<'default' | 'price_asc' | 'price_desc'>('default');

  const handleFilterChange = (type: 'belief' | 'category', value: string | null) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };
  
  const clearFilters = () => {
    setFilters({ belief: null, category: null });
  }

  const sortedAndFilteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      const beliefMatch = filters.belief ? product.belief === filters.belief : true;
      const categoryMatch = filters.category ? product.category === filters.category : true;
      return beliefMatch && categoryMatch;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === 'price_asc') {
        return parseInt(a.price) - parseInt(b.price);
      }
      if (sortBy === 'price_desc') {
        return parseInt(b.price) - parseInt(a.price);
      }
      // Default sort logic
      const orderA = categoryOrder[a.category];
      const orderB = categoryOrder[b.category];
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return a.id - b.id; // secondary sort
    });
  }, [products, filters, sortBy]);

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="container mx-auto px-6 py-12 fade-in">
       <div className="text-center mb-12">
            <h1 className="text-4xl font-bold sowina-font-serif text-gray-900">สินค้าทั้งหมด</h1>
            <p className="text-gray-600 mt-2">ค้นพบชิ้นงานทำมือที่บอกเล่าเรื่องราว</p>
        </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <div className="sticky top-28 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-xl font-semibold sowina-font-serif">ตัวกรอง</h3>
              {activeFiltersCount > 0 && (
                 <button onClick={clearFilters} className="text-sm text-gray-500 hover:text-[#C08081]">ล้างทั้งหมด</button>
              )}
            </div>
            {/* Belief Filters */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-gray-800">ความเชื่อ</h4>
              <ul className="space-y-2">
                {BELIEF_CATEGORIES.map(b => (
                  <li key={b.key}>
                    <button 
                      onClick={() => handleFilterChange('belief', filters.belief === b.name ? null : b.name)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${filters.belief === b.name ? 'bg-[#F8F4F4] text-[#C08081] font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {b.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Category Filters */}
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">ประเภทสินค้า</h4>
              <ul className="space-y-2">
                 {PRODUCT_CATEGORIES.map(c => (
                  <li key={c.key}>
                    <button 
                      onClick={() => handleFilterChange('category', filters.category === c.key ? null : c.key)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${filters.category === c.key ? 'bg-[#F8F4F4] text-[#C08081] font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <p className="text-gray-600">แสดง {sortedAndFilteredProducts.length} รายการ</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#C08081] sowina-font-sans"
            >
              <option value="default">เรียงตาม</option>
              <option value="price_asc">ราคา: น้อยไปมาก</option>
              <option value="price_desc">ราคา: มากไปน้อย</option>
            </select>
          </div>
          
          {sortedAndFilteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {sortedAndFilteredProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onAddToCart={onAddToCart}
                        onToggleWishlist={onToggleWishlist}
                        wishlist={wishlist}
                        onProductClick={onProductClick}
                    />
                    ))}
                </div>
          ) : (
            <div className="text-center py-20">
                <p className="text-xl text-gray-500">ไม่พบสินค้าตามที่คุณเลือก</p>
                <button onClick={clearFilters} className="mt-4 text-white bg-[#C08081] px-6 py-2 rounded-full">
                    ล้างตัวกรองทั้งหมด
                </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ShopPage;