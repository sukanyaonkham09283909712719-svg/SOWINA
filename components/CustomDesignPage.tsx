import React from 'react';
import { ICONS, INSPIRATION_GALLERY } from '../constants';

const Step = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5EBE0] text-[#A67B68]">
            {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold sowina-font-serif">{title}</h3>
        <p className="text-gray-600 sowina-font-sans">{description}</p>
    </div>
);


const CustomDesignPage: React.FC = () => {
  return (
    <div className="fade-in">
        <section 
            className="relative bg-cover bg-center text-white text-center py-32 px-6" 
            style={{backgroundImage: "url('https://picsum.photos/seed/atelier-hero/1600/600')"}}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl sowina-font-serif mb-4">The SOWINA Atelier</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto sowina-font-sans">เรื่องราวของคุณ...คือแรงบันดาลใจที่ยิ่งใหญ่ที่สุดของเรา</p>
                 <p className="text-md md:text-lg max-w-3xl mx-auto sowina-font-sans mt-4">ที่ SOWINA Atelier เราไม่ได้แค่สร้างเครื่องประดับ แต่เรารังสรรค์สัญลักษณ์แทนความทรงจำ ความฝัน และความปรารถนา...เพียงชิ้นเดียวเพื่อคุณ</p>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container px-6 mx-auto">
                <h2 className="text-3xl font-bold text-center sowina-font-serif mb-16 text-[#A67B68]">ขั้นตอนการร่วมสร้างสรรค์</h2>
                <div className="grid gap-12 row-gap-8 lg:grid-cols-4">
                    <Step
                        icon={ICONS.chat}
                        title="1. Share Your Story"
                        description="ทุกอย่างเริ่มต้นจากบทสนทนา เล่าเรื่องราว, แรงบันดาลใจ, หรือความต้องการพิเศษของคุณให้เราฟัง"
                    />
                    <Step
                        icon={ICONS.pencil}
                        title="2. The Design Sketch"
                        description="ทีมงานของเราจะนำเรื่องราวของคุณมาออกแบบเป็นภาพสเก็ตช์ พร้อมให้คำปรึกษาเพื่อผลงานที่สมบูรณ์แบบ"
                    />
                     <Step
                        icon={ICONS.hand}
                        title="3. The Creation"
                        description="เมื่อคุณอนุมัติแบบแล้ว ช่างฝีมือของเราจะเริ่มกระบวนการรังสรรค์ชิ้นงานด้วยความประณีตและหัวใจ"
                    />
                    <Step
                        icon={ICONS.gift}
                        title="4. A Piece to Cherish"
                        description="ผลงานชิ้นเดียวในโลกจะถูกจัดส่งถึงมือคุณในแพ็กเกจจิ้งสุดพิเศษ พร้อมเป็นส่วนหนึ่งในเรื่องราวของคุณ"
                    />
                </div>
            </div>
        </section>
        
        <section className="py-20 bg-[#FEFBFB]">
            <div className="container mx-auto px-6">
                 <h2 className="text-3xl font-bold text-center sowina-font-serif mb-12 text-[#A67B68]">แกลเลอรีแห่งแรงบันดาลใจ</h2>
                 <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">ตัวอย่างผลงานจากเรื่องราวของลูกค้าท่านอื่น</p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {INSPIRATION_GALLERY.map((item, index) => (
                         <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                             <img src={item.image} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
                             <div className="p-6">
                                 <h3 className="font-bold text-xl sowina-font-serif mb-2">{item.title}</h3>
                                 <p className="text-gray-600 sowina-font-sans">{item.description}</p>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                 <h2 className="text-3xl font-bold sowina-font-serif mb-4">เริ่มต้นการเดินทางของคุณได้ง่ายๆ</h2>
                 <p className="text-gray-600 max-w-2xl mx-auto mb-8">ไม่ว่าคุณจะมีไอเดียที่ชัดเจน หรือแค่มีความรู้สึกบางอย่างที่อยากถ่ายทอด เราพร้อมที่จะรับฟังและร่วมสร้างสรรค์ไปกับคุณ</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10 text-left">
                    <div className="flex items-start space-x-3">
                        <div className="text-[#A67B68] pt-1">{ICONS.seed}</div>
                        <p><strong>สร้างสรรค์จากดอกไม้ที่มีความหมายพิเศษ</strong> (เช่น ดอกไม้จากช่อปริญญา, ช่อแต่งงาน)</p>
                    </div>
                     <div className="flex items-start space-x-3">
                        <div className="text-[#A67B68] pt-1">{ICONS.star}</div>
                        <p><strong>ออกแบบตามสีนำโชค</strong> หรือดอกไม้ประจำราศีเกิด</p>
                    </div>
                     <div className="flex items-start space-x-3">
                        <div className="text-[#A67B68] pt-1">{ICONS.gift}</div>
                        <p><strong>ของขวัญสำหรับคนพิเศษ</strong>ในโอกาสสำคัญ (วันเกิด, วันครบรอบ)</p>
                    </div>
                     <div className="flex items-start space-x-3">
                        <div className="text-[#A67B68] pt-1">{ICONS.heart}</div>
                        <p><strong>เครื่องประดับสำหรับทีม</strong> (เพื่อนเจ้าสาว, ของขวัญองค์กร)</p>
                    </div>
                </div>

                 <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert('กำลังนำคุณไปยัง LINE Official Account เพื่อพูดคุยกับดีไซเนอร์...'); }}
                    className="inline-block bg-[#A67B68] text-white px-10 py-4 rounded-full hover:bg-opacity-90 transition-all text-lg font-semibold transform hover:scale-105"
                >
                   ปรึกษาดีไซเนอร์ของเรา (ไม่มีค่าใช้จ่าย)
                </a>
            </div>
        </section>
    </div>
  );
};

export default CustomDesignPage;
