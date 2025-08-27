
import React from 'react';

interface HeroProps {
    onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <img 
                src="https://picsum.photos/id/1015/1920/1080" 
                alt="Cặp đôi lớn tuổi hạnh phúc trong một khu vườn ấm cúng" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 container mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-4 shadow-text">
                    Tìm bạn đời ở tuổi vàng son từng trải
                </h1>
                <p className="text-2xl md:text-3xl font-sans font-light mb-8 shadow-text">
                    Hãy cùng nhau viết tiếp chương mới.
                </p>
                <button 
                    onClick={onRegisterClick}
                    className="bg-brand-gold text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all text-xl md:text-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Đăng Ký Miễn Phí
                </button>
            </div>
             <style>{`
                .shadow-text {
                    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }
            `}</style>
        </section>
    );
};

export default Hero;
