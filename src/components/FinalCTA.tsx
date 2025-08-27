
import React from 'react';

interface FinalCTAProps {
    onRegisterClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onRegisterClick }) => {
    return (
        <section className="py-24 bg-brand-cream">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown-dark mb-4">Sẵn sàng để bắt đầu hành trình mới?</h2>
                <p className="text-xl text-brand-text max-w-3xl mx-auto mb-10">Những câu chuyện thú vị và những tâm hồn đồng điệu đang chờ đợi bạn. Đừng chần chừ, hãy tham gia cộng đồng của chúng tôi ngay hôm nay.</p>
                <button
                    onClick={onRegisterClick}
                    className="bg-brand-gold text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all text-xl md:text-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Đăng Ký Miễn Phí Ngay
                </button>
            </div>
        </section>
    );
};

export default FinalCTA;
