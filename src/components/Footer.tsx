
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-brand-brown-dark text-brand-cream/70">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Tuổi Vàng Son</h3>
                        <p className="max-w-md">Kết nối những trái tim từng trải, xây dựng một cộng đồng hạnh phúc và ý nghĩa.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white mb-4">Về chúng tôi</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Sứ mệnh</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Đội ngũ</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white mb-4">Hỗ trợ & Pháp lý</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Trung tâm hỗ trợ</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Điều khoản dịch vụ</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Chính sách bảo mật</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-brand-cream/20 mt-12 pt-8 text-center text-brand-cream/50">
                    <p>&copy; {currentYear} Tuổi Vàng Son. Mọi quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
