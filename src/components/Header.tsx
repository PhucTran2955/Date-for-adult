
import React from 'react';

interface HeaderProps {
    onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
    return (
        <header className="bg-brand-cream/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-serif font-bold text-brand-brown-dark">
                    Tuổi Vàng Son
                </div>
                <nav className="hidden md:flex space-x-8 items-center text-lg text-brand-brown">
                    <a href="#benefits" className="hover:text-brand-gold transition-colors">Lợi ích</a>
                    <a href="#how-it-works" className="hover:text-brand-gold transition-colors">Cách hoạt động</a>
                    <a href="#testimonials" className="hover:text-brand-gold transition-colors">Câu chuyện</a>
                    <a href="#faq" className="hover:text-brand-gold transition-colors">FAQ</a>
                </nav>
                <button 
                    onClick={onRegisterClick}
                    className="bg-brand-gold text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    Đăng Ký Miễn Phí
                </button>
            </div>
        </header>
    );
};

export default Header;
