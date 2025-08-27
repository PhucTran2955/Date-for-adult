
import React, { useState, FormEvent, useCallback, useEffect } from 'react';

interface RegistrationModalProps {
    onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        gender: '',
        birthYear: '',
        hometown: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log("Form Data Submitted:", formData);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    const handleCloseOnEscape = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleCloseOnEscape);
        return () => {
            document.removeEventListener('keydown', handleCloseOnEscape);
        };
    }, [handleCloseOnEscape]);


    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-2xl p-8 md:p-12 w-full max-w-lg relative transform transition-all duration-300 ease-out scale-95 animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                {isSubmitted ? (
                    <div className="text-center">
                        <h2 className="text-3xl font-serif font-bold text-brand-brown-dark mb-4">Đăng ký thành công!</h2>
                        <p className="text-lg text-brand-text mb-6">Chào mừng bạn đến với Tuổi Vàng Son! Chúng tôi đã gửi một email xác nhận đến địa chỉ của bạn. Hãy kiểm tra hộp thư và bắt đầu hành trình của mình.</p>
                        <button 
                            onClick={onClose}
                            className="w-full bg-brand-gold text-white font-bold py-4 px-6 rounded-full text-xl hover:bg-opacity-90 transition-all shadow-md"
                        >
                            Tuyệt vời!
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-3xl font-serif font-bold text-brand-brown-dark mb-2 text-center">Tạo tài khoản miễn phí</h2>
                        <p className="text-center text-brand-text text-lg mb-8">Bắt đầu hành trình tìm kiếm hạnh phúc của bạn.</p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-lg font-medium text-brand-text mb-1">Họ và tên</label>
                                <input type="text" id="fullName" name="fullName" required onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-brand-gold focus:border-brand-gold"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-brand-text mb-1">Email</label>
                                <input type="email" id="email" name="email" required onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-brand-gold focus:border-brand-gold"/>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="gender" className="block text-lg font-medium text-brand-text mb-1">Giới tính</label>
                                    <select id="gender" name="gender" required onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-brand-gold focus:border-brand-gold bg-white">
                                        <option value="">Chọn giới tính</option>
                                        <option value="male">Nam</option>
                                        <option value="female">Nữ</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="birthYear" className="block text-lg font-medium text-brand-text mb-1">Năm sinh</label>
                                    <input type="number" id="birthYear" name="birthYear" required min="1920" max="1974" onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-brand-gold focus:border-brand-gold"/>
                                </div>
                            </div>
                             <div>
                                <label htmlFor="hometown" className="block text-lg font-medium text-brand-text mb-1">Quê quán</label>
                                <input type="text" id="hometown" name="hometown" required onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-brand-gold focus:border-brand-gold"/>
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-gold text-white font-bold py-4 px-6 rounded-full text-xl hover:bg-opacity-90 transition-all shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Đang xử lý...' : 'Đăng Ký Miễn Phí'}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default RegistrationModal;
