import React, { useState } from 'react';
import { Page } from '../types';
import { ICONS } from '../constants';

interface ConsultationPageProps {
    onNavigate: (page: Page) => void;
}

const ConsultationPage: React.FC<ConsultationPageProps> = ({ onNavigate }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        story: '',
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate an API call
        setTimeout(() => {
            console.log('Form Submitted:', formState);
            setFormStatus('success');
        }, 1500);
    };

    if (formStatus === 'success') {
        return (
            <div className="container mx-auto px-6 py-20 text-center fade-in flex flex-col items-center justify-center min-h-[60vh]">
                <div className="w-24 h-24 flex items-center justify-center bg-green-100 rounded-full mb-6">
                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h1 className="text-3xl font-bold sowina-font-serif mb-4 text-[#C08081]">ส่งข้อมูลเรียบร้อยแล้ว!</h1>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                    ขอบคุณที่แบ่งปันเรื่องราวของคุณกับเรา ทีมงานดีไซเนอร์ของ SOWINA จะติดต่อกลับไปหาคุณผ่านทางอีเมลภายใน 24-48 ชั่วโมงเพื่อเริ่มต้นการเดินทางสร้างสรรค์ชิ้นงานของคุณค่ะ
                </p>
                <button
                    onClick={() => onNavigate('Home')}
                    className="bg-[#C08081] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-lg font-semibold"
                >
                    กลับสู่หน้าแรก
                </button>
            </div>
        );
    }


    return (
        <div className="fade-in">
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl sowina-font-serif mb-4 text-[#C08081]">เริ่มต้นบทสนทนา</h1>
                        <p className="text-lg text-gray-600">
                            เราตื่นเต้นที่จะได้ฟังเรื่องราวของคุณ! กรุณากรอกแบบฟอร์มด้านล่างเพื่อเริ่มต้นการออกแบบเครื่องประดับชิ้นพิเศษของคุณกับดีไซเนอร์ของเรา
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto mt-12 bg-white p-8 md:p-10 rounded-xl shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล*</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C08081] focus:ring focus:ring-[#D3B1B1] focus:ring-opacity-50 p-2.5"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">อีเมล*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formState.email}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C08081] focus:ring focus:ring-[#D3B1B1] focus:ring-opacity-50 p-2.5"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formState.phone}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C08081] focus:ring focus:ring-[#D3B1B1] focus:ring-opacity-50 p-2.5"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-1">
                                    เล่าเรื่องราว / ไอเดียของคุณ*
                                </label>
                                <textarea
                                    name="story"
                                    id="story"
                                    required
                                    rows={6}
                                    value={formState.story}
                                    onChange={handleInputChange}
                                    placeholder="เช่น อยากทำสร้อยจากดอกไม้ในช่อรับปริญญา, อยากได้แหวนตามสีนำโชค, มองหาของขวัญวันครบรอบ..."
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C08081] focus:ring focus:ring-[#D3B1B1] focus:ring-opacity-50 p-2.5"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full flex justify-center bg-[#C08081] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed text-lg font-semibold"
                                >
                                    {formStatus === 'submitting' ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        'ส่งเรื่องราวของคุณ'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConsultationPage;