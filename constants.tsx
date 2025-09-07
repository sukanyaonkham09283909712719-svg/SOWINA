import React from 'react';
import { BeliefCategory, Product } from './types';

export const ICONS = {
    close: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
    seed: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V2a1 1 0 00-1-1H12zM3.5 12a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1H4.5a1 1 0 00-1 1zm16 0a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1H20.5a1 1 0 00-1 1zM12 20.5a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V21.5a1 1 0 00-1-1H12zM7.05 7.05a1 1 0 00-1.414-1.414l-.002.002a1 1 0 001.414 1.414l.002-.002zm10 10a1 1 0 00-1.414-1.414l-.002.002a1 1 0 001.414 1.414l.002-.002zM7.05 17.05a1 1 0 001.414-1.414l-.002-.002a1 1 0 00-1.414 1.414l.002.002zM17.05 7.05a1 1 0 00-1.414 1.414l.002.002a1 1 0 001.414-1.414l-.002-.002z" /></svg>,
    hand: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-3-3m0 0l-3 3m3-3V3m0 18v-3" /></svg>,
    star: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
    heart: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    work: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    wealth: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01M12 18v-1m0-1v-.01m0-1.99V12m0 6H9m3 0h3m-3 0V6m-6 6h12M3 12h18" /></svg>,
    love: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>,
    health: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    balance: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    chat: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    pencil: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>,
    gift: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z" /></svg>,
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'สร้อยคอดอกพลัมญี่ปุ่น',
    description: 'จี้ดอกพลัมญี่ปุ่นสีม่วง ตัวแทนของความสำเร็จและความก้าวหน้าในหน้าที่การงาน',
    price: '299',
    image: 'https://picsum.photos/seed/plum-necklace/400/400',
    category: 'Necklace',
    belief: 'การงาน',
  },
  {
    id: 2,
    name: 'แหวนดอกคอนฟลาวเวอร์',
    description: 'แหวนเงินประดับดอกคอนฟลาวเวอร์สีฟ้า เชื่อกันว่าจะช่วยดึงดูดความมั่งคั่งและความโชคดีทางการเงิน',
    price: '119',
    image: 'https://storage.googleapis.com/aai-web-samples/user-assets/sowina-ring.jpeg',
    category: 'Ring',
    belief: 'การเงิน',
  },
  {
    id: 3,
    name: 'สร้อยคอดอกไฮเดรนเยีย',
    description: 'สร้อยคอดอกไฮเดรนเยียสีชมพู สัญลักษณ์ของความรักที่เบ่งบานและความรู้สึกดีๆ ที่มีให้กัน',
    price: '299',
    image: 'https://picsum.photos/seed/hydrangea-necklace/400/400',
    category: 'Necklace',
    belief: 'ความรัก',
  },
  {
    id: 4,
    name: 'สร้อยข้อมือดอกเวอร์บีน่า',
    description: 'สร้อยข้อมือดอกเวอร์บีน่าสีขาว ช่วยเสริมสร้างพลังบวกและนำพาความแข็งแรงทั้งร่างกายและจิตใจ',
    price: '299',
    image: 'https://picsum.photos/seed/verbena-bracelet/400/400',
    category: 'Bracelet',
    belief: 'สุขภาพ',
  },
  {
    id: 5,
    name: 'จี้ใบโคลเวอร์',
    description: 'จี้ใบโคลเวอร์สี่แฉก เครื่องรางแห่งความสมดุลและความโชคดีในทุกด้านของชีวิต',
    price: '199',
    image: 'https://picsum.photos/seed/clover-pendant/400/400',
    category: 'Necklace',
    belief: 'ความสมดุล',
  },
  {
    id: 6,
    name: 'แหวนดอกพลัมญี่ปุ่น',
    description: 'แหวนดอกพลัมญี่ปุ่นสีม่วง เสริมความมั่นคงและความสำเร็จในเส้นทางอาชีพของคุณ',
    price: '119',
    image: 'https://picsum.photos/seed/plum-ring/400/400',
    category: 'Ring',
    belief: 'การงาน',
  },
];

export const BELIEF_CATEGORIES: BeliefCategory[] = [
    { key: 'work', name: 'การงาน', icon: ICONS.work, color: 'bg-[#F5EBE0]', hoverColor: 'hover:bg-[#EADFD5]' },
    { key: 'wealth', name: 'การเงิน', icon: ICONS.wealth, color: 'bg-[#F5EBE0]', hoverColor: 'hover:bg-[#EADFD5]' },
    { key: 'love', name: 'ความรัก', icon: ICONS.love, color: 'bg-[#F5EBE0]', hoverColor: 'hover:bg-[#EADFD5]' },
    { key: 'health', name: 'สุขภาพ', icon: ICONS.health, color: 'bg-[#F5EBE0]', hoverColor: 'hover:bg-[#EADFD5]' },
    { key: 'balance', name: 'ความสมดุล', icon: ICONS.balance, color: 'bg-[#F5EBE0]', hoverColor: 'hover:bg-[#EADFD5]' },
];

export const beliefThaiMap: { [key: string]: 'การงาน' | 'การเงิน' | 'ความรัก' | 'สุขภาพ' | 'ความสมดุล' } = {
  work: 'การงาน',
  wealth: 'การเงิน',
  love: 'ความรัก',
  health: 'สุขภาพ',
  balance: 'ความสมดุล',
};

export const INSPIRATION_GALLERY = [
    {
        image: 'https://picsum.photos/seed/friendship-necklace/500/500',
        title: 'สร้อยคอแทนมิตรภาพ',
        description: 'สร้างสรรค์จากดอกเดซี่และฟอร์เก็ตมีน็อต ซึ่งเป็นดอกไม้ประจำวันเกิดของเพื่อนรักสองคน เพื่อเป็นของขวัญแทนคำสัญญาว่าจะไม่ลืมกัน'
    },
    {
        image: 'https://picsum.photos/seed/memory-ring/500/500',
        title: 'แหวนแห่งความทรงจำ',
        description: 'รังสรรค์จากกลีบกุหลาบที่เจ้าบ่าวใช้ขอแต่งงาน เพื่อเก็บรักษาช่วงเวลาที่สำคัญที่สุดไว้ในเครื่องประดับที่สวมใส่ได้ทุกวัน'
    },
    {
        image: 'https://picsum.photos/seed/power-bracelet/500/500',
        title: 'กำไลเสริมพลังรอบด้าน',
        description: 'ออกแบบตามหลักโหราศาสตร์ โดยใช้ดอกไม้ 5 ชนิดเพื่อเสริมพลังในทุกด้านของชีวิตตามความต้องการพิเศษของลูกค้า'
    }
];