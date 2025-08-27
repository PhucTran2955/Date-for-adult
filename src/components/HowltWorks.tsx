
import React from 'react';
import { PencilSquareIcon, MagnifyingGlassIcon, ChatBubbleLeftRightIcon } from './icons';

const steps = [
    {
        icon: <PencilSquareIcon />,
        title: "Tạo hồ sơ của bạn",
        description: "Chia sẻ đôi chút về bản thân và những gì bạn đang tìm kiếm ở một người bạn đồng hành."
    },
    {
        icon: <MagnifyingGlassIcon />,
        title: "Khám phá tâm hồn đồng điệu",
        description: "Duyệt qua các hồ sơ được gợi ý hoặc tìm kiếm theo tiêu chí riêng của bạn."
    },
    {
        icon: <ChatBubbleLeftRightIcon />,
        title: "Bắt đầu trò chuyện",
        description: "Gửi một lời chào chân thành để bắt đầu một câu chuyện mới đầy ý nghĩa."
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-20 bg-brand-cream">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown-dark mb-4">Hành trình bắt đầu thật đơn giản</h2>
                <p className="text-xl text-brand-text max-w-3xl mx-auto mb-16">Chỉ với 3 bước dễ dàng, bạn đã sẵn sàng cho một chương mới.</p>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-brown-light/30 transform -translate-y-1/2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                                <div className="absolute -top-8 bg-brand-brown text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold font-serif">{index + 1}</div>
                                <div className="text-brand-gold mt-12 mb-5">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-semibold text-brand-brown-dark mb-3">{step.title}</h3>
                                <p className="text-lg text-brand-text">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
