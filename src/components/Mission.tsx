
import React from 'react';

const Mission: React.FC = () => {
    return (
        <section id="mission" className="py-20 bg-brand-brown-dark text-white">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold mb-6 text-brand-gold">Sứ Mệnh & Cam Kết Của Chúng Tôi</h2>
                    <div className="space-y-8 text-xl leading-relaxed font-sans">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Sứ mệnh</h3>
                            <p className="opacity-90">"Kết nối những trái tim từng trải, xây dựng một cộng đồng nơi mỗi câu chuyện đều được lắng nghe, trân trọng và là khởi đầu cho một chương mới hạnh phúc."</p>
                        </div>
                         <div className="border-t border-brand-gold/30 w-1/4 mx-auto my-8"></div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Cam kết</h3>
                            <p className="opacity-90">"Chúng tôi cam kết tạo ra một không gian an toàn, chân thành và đầy đồng cảm, nơi sự riêng tư được đặt lên hàng đầu và mọi kết nối đều dựa trên sự tôn trọng sâu sắc."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
