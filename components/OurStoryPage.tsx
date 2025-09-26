import React from 'react';
import { ICONS } from '../constants';
import { Page } from '../types';

interface OurStoryPageProps {
  onNavigate: (page: Page) => void;
}

const TimelineItem = ({ icon, title, children, isLast = false }: { icon: React.ReactNode, title: string, children: React.ReactNode, isLast?: boolean }) => {
    return (
        <div className="flex items-start">
            <div className="flex flex-col items-center mr-6">
                <div className="bg-[#F8F4F4] text-[#C08081] rounded-full p-3 border-2 border-white shadow-md">
                    {icon}
                </div>
                {!isLast && <div className="w-px h-full bg-gray-200 mt-2"></div>}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex-1 flex-shrink-0 fade-in">
                <div>
                    <h4 className="font-bold text-xl mb-2 sowina-font-serif text-gray-800">{title}</h4>
                    <p className="text-gray-600">{children}</p>
                </div>
            </div>
        </div>
    );
};


const OurStoryPage: React.FC<OurStoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="fade-in">
      <section 
        className="relative bg-cover bg-center text-white text-center py-32 px-6" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/sowina-story-hero/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl sowina-font-serif mb-4 drop-shadow-lg">เรื่องราวที่ร้อยเรียงจากกลีบดอกไม้</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto sowina-font-sans drop-shadow-md">SOWINA ไม่ได้เริ่มต้นจากการเป็นธุรกิจ แต่เริ่มต้นจากความเชื่อที่ว่า...พลังจากธรรมชาติสามารถเป็นเครื่องนำทางและมอบกำลังใจให้เราได้ในทุกวัน</p>
        </div>
      </section>

      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                      <h2 className="text-3xl font-bold sowina-font-serif mb-4 text-[#C08081]">จากใจผู้ก่อตั้ง</h2>
                      <p className="text-gray-600 mb-4 sowina-font-sans">
                          "สวัสดีค่ะ... SOWINA เกิดจากความรักในธรรมชาติ และความปรารถนาส่วนตัวที่อยากจะมีเครื่องรางนำโชคที่ไม่ได้ดูขลังจนเกินไป แต่สามารถเป็นเครื่องประดับสวยๆ ที่เข้ากับการแต่งตัวในชีวิตประจำวันได้ค่ะ จากจุดนั้นเอง แรงบันดาลใจในการนำความงามของดอกไม้จริงมาผนวกเข้ากับความเชื่อ จึงได้ถือกำเนิดขึ้นมาเป็น SOWINA เราหวังว่าเครื่องประดับทุกชิ้นจากเราจะเป็นเหมือนเพื่อนสนิทที่คอยมอบพลังบวกและเตือนให้คุณเห็นความงดงามในตัวเองเสมอ"
                      </p>
                      <p className="text-gray-600 sowina-font-sans">
                          "เราเชื่อว่าทุกคนมีความสวยงามในแบบของตัวเอง และเครื่องประดับของเราเป็นเพียงส่วนเล็กๆ ที่จะช่วยสะท้อนความงามนั้นออกมา ขอบคุณที่ให้ SOWINA เป็นส่วนหนึ่งในการเดินทางของคุณนะคะ"
                      </p>
                  </div>
                  <div className="order-1 md:order-2">
                      <div 
                        className="relative rounded-lg shadow-xl overflow-hidden aspect-[6/7] bg-cover bg-center"
                        style={{ backgroundImage: "url('https://picsum.photos/seed/sowina-founder/600/700')" }}
                      >
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-20 bg-[#F8F4F4]">
          <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="text-3xl font-bold text-center mb-12 sowina-font-serif">การเดินทางของ SOWINA</h2>
              <div>
                  {/* FIX: Explicitly passing 'children' as a prop to resolve TypeScript error on line 70. */}
                  <TimelineItem icon={ICONS.seed} title="จุดเริ่มต้น" children="จากความหลงใหลใน 'ภาษาดอกไม้' และการมองหาเครื่องประดับที่ 'มีความหมาย' มากกว่าความสวยงาม" />
                  {/* FIX: Explicitly passing 'children' as a prop to resolve TypeScript error on line 73. */}
                  <TimelineItem icon={ICONS.hand} title="การรังสรรค์" children="สู่การค้นคว้าและทดลองนับครั้งไม่ถ้วน เพื่อให้ได้เทคนิคการเคลือบเรซิ่นที่คงความงามของดอกไม้จริงไว้ได้ดีที่สุด" />
                  {/* FIX: Explicitly passing 'children' as a prop to resolve TypeScript error on line 76. */}
                  <TimelineItem icon={ICONS.star} title="กำเนิดความหมาย" children="และแล้ว SOWINA ก็ถือกำเนิดขึ้น พร้อมแก่นความเชื่อ 5 ประการ ที่จะเป็นพลังนำทางให้ผู้สวมใส่" />
                  {/* FIX: Explicitly passing 'children' as a prop to resolve TypeScript error on line 79. */}
                   <TimelineItem icon={ICONS.heart} title="สู่ครอบครัวของเรา" isLast={true} children="วันนี้...เรื่องราวของเราคือเรื่องราวของคุณ ขอบคุณที่ร่วมเป็นส่วนหนึ่งของครอบครัว SOWINA" />
              </div>
          </div>
      </section>

      <section className="relative py-20 bg-cover bg-center text-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/sowina-story-cta/1920/1080')" }}
      >
          <div className="absolute inset-0 bg-[#F8F4F4] bg-opacity-70"></div>
          <div className="container mx-auto px-6 bg-white/70 backdrop-blur-sm py-10 rounded-xl relative z-10">
              <h2 className="text-3xl font-bold sowina-font-serif mb-4 text-gray-800">ทุกชิ้นงานคือหนึ่งในเรื่องราวของเรา...</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">ให้ SOWINA ร่วมเป็นส่วนหนึ่งในเรื่องราวของคุณ</p>
              <button 
                onClick={() => onNavigate('Shop')}
                className="bg-[#C08081] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-lg font-semibold"
              >
                เลือกซื้อสินค้าของเรา
              </button>
          </div>
      </section>
    </div>
  );
};

export default OurStoryPage;