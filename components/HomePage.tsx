import React, { useState } from 'react';
import { Page, Product } from '../types';
import { BELIEF_CATEGORIES, ICONS, PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import AIStyleAdvisorModal from './AIStyleAdvisorModal';

interface HomePageProps {
  onNavigate: (page: Page, filter?: string) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onToggleWishlist: (product: Product) => void;
  wishlist: Product[];
  onProductClick: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onAddToCart, onToggleWishlist, wishlist, onProductClick }) => {
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);
    const bestSellers = PRODUCTS.slice(0, 4);

  return (
    <div className="fade-in">
        {isAiModalOpen && <AIStyleAdvisorModal onClose={() => setIsAiModalOpen(false)} products={PRODUCTS} onAddToCart={onAddToCart} onToggleWishlist={onToggleWishlist} wishlist={wishlist} />}

      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center flex items-center parallax"
        style={{ backgroundImage: "url('https://i.postimg.cc/Y97skKrK/SOWINA.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/20 to-black/10"></div>
        <div className="container mx-auto px-6 w-full flex justify-end">
            <div className="relative z-10 max-w-xl text-right">
              <h1 className="text-4xl md:text-5xl sowina-font-serif mb-4 text-white drop-shadow-md">"SOWINA Jewelry with Nature's Meaning"</h1>
              <p className="text-md md:text-lg sowina-font-sans mb-8 text-white/90 drop-shadow-sm">Handcrafted with heart, to be your positive energy.</p>
              <button 
                onClick={() => onNavigate('Shop')}
                className="bg-white text-[#C08081] px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-lg font-semibold sowina-font-sans transform hover:scale-105 shadow-lg"
              >
                ค้นหาชิ้นที่ใช่สำหรับคุณ
              </button>
            </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl sowina-font-serif mb-2 text-gray-900">ไม่ใช่แค่เครื่องประดับ</h2>
            <p className="text-gray-600 mb-12">แต่คือสัญลักษณ์แทนตัวตน</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center">
                    <div className="bg-[#F8F4F4] text-[#C08081] rounded-full p-4 mb-4">{ICONS.seed}</div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-800">จากดอกไม้จริง 100%</h3>
                    <p className="text-gray-500">เราคัดสรรดอกไม้และใบไม้ที่สวยงามและเปี่ยมด้วยความหมาย</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-[#F8F4F4] text-[#C08081] rounded-full p-4 mb-4">{ICONS.hand}</div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-800">งานฝีมือสุดประณีต</h3>
                    <p className="text-gray-500">ทุกชิ้นงานถูกรังสรรค์ขึ้นอย่างใส่ใจในทุกรายละเอียด</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-[#F8F4F4] text-[#C08081] rounded-full p-4 mb-4">{ICONS.star}</div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-800">เปี่ยมด้วยความหมายมงคล</h3>
                    <p className="text-gray-500">เป็นเครื่องรางที่งดงามและมอบพลังบวกให้คุณในทุกวัน</p>
                </div>
            </div>
        </div>
      </section>

      {/* Interactive Belief Pillars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl sowina-font-serif mb-12 text-gray-900">เลือกพลังบวกที่คุณมองหา</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {BELIEF_CATEGORIES.map(belief => (
                    <div 
                        key={belief.key}
                        onClick={() => onNavigate('Shop', belief.key)}
                        className={`p-6 rounded-lg text-center cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 ${belief.color} ${belief.hoverColor}`}
                    >
                        <div className="flex justify-center text-[#C08081] mb-3">{belief.icon}</div>
                        <h3 className="font-semibold sowina-font-sans text-gray-800">{belief.name}</h3>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
        {/* AI Style Advisor Section */}
        <section 
            className="relative py-20 bg-cover bg-center"
             style={{ backgroundImage: "url('https://picsum.photos/seed/sowina-ai/1920/1080')" }}
        >
             <div className="absolute inset-0 bg-[#F8F4F4] bg-opacity-80"></div>
             <div className="container mx-auto px-6 bg-white/80 backdrop-blur-sm py-12 rounded-xl shadow-lg relative z-10 text-center">
              <h2 className="text-3xl font-bold sowina-font-serif mb-4 text-[#C08081]">ค้นหาชิ้นที่ใช่...ด้วย AI</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">ไม่แน่ใจว่าจะเลือกชิ้นไหนดี? ให้ AI Style Advisor ของเราช่วยแนะนำเครื่องประดับที่เหมาะกับสไตล์และโอกาสของคุณที่สุด เพียงอัปโหลดรูปภาพชุดของคุณ!</p>
              <button 
                onClick={() => setIsAiModalOpen(true)}
                className="bg-[#C08081] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-lg font-semibold transform hover:scale-105"
              >
                ลองใช้ AI Style Advisor
              </button>
          </div>
        </section>


      {/* Bestsellers Section */}
      <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl sowina-font-serif text-center mb-12 text-gray-900">ชิ้นโปรดของชาว SOWINA</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {bestSellers.map(product => (
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
          </div>
      </section>
      
      {/* Custom Order Banner */}
      <section className="container mx-auto px-6 pb-16">
        <div 
            className="relative rounded-lg p-12 flex flex-col items-center justify-center text-center text-white bg-cover bg-center overflow-hidden min-h-[300px]"
            style={{ backgroundImage: "url('https://img2.pic.in.th/pic/--1---e69c09bec45cb1dd.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all duration-300"></div>
                <div className="relative z-10">
                <h3 className="text-2xl sowina-font-serif mb-4 drop-shadow-md">ออกแบบความหมาย...ในแบบฉบับของคุณ</h3>
                <p className="mb-6 drop-shadow-sm">มีดอกไม้ในใจ? ให้เราช่วยรังสรรค์ภาพฝันของคุณให้เป็นจริง</p>
                <button onClick={() => onNavigate('Custom Design')} className="bg-white text-[#C08081] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition">ปรึกษาเรา</button>
            </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;