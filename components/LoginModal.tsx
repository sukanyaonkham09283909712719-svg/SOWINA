import React, { useState } from 'react';
import { ICONS } from '../constants';

interface LoginModalProps {
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically have validation and an API call
        // For this simulation, we'll just call the onLogin prop
        onLogin();
    };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 sowina-font-sans" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <div className="p-8">
            <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-center sowina-font-serif text-gray-800">เข้าสู่ระบบ</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
                    {ICONS.close}
                </button>
            </div>
          
            <form onSubmit={handleLogin} className="mt-6 space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมล</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C08081] focus:ring focus:ring-[#D3B1B1] focus:ring-opacity-50 p-2.5"
                        required
                    />
                </div>
                 <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C08081] focus:ring focus:ring-[#D3B1B1] focus:ring-opacity-50 p-2.5"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <a href="#" className="text-sm text-[#C08081] hover:underline">ลืมรหัสผ่าน?</a>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center bg-[#C08081] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-lg font-semibold"
                    >
                        เข้าสู่ระบบ
                    </button>
                </div>
            </form>

             <p className="mt-6 text-center text-sm text-gray-500">
                ยังไม่มีบัญชี? <a href="#" className="font-medium text-[#C08081] hover:underline">สมัครสมาชิก</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
