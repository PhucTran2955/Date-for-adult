
import React from 'react';

const testimonials = [
    {
        quote: "Tôi đã nghĩ mình sẽ sống một mình đến cuối đời. Nhờ Tuổi Vàng Son, tôi đã tìm thấy tri kỷ của mình. Mỗi ngày giờ đây đều là một món quà.",
        author: "Bà Ngọc Lan & Ông Minh Tuấn",
        image: "https://picsum.photos/id/1027/200/200"
    },
    {
        quote: "Chúng tôi không chỉ tìm thấy tình yêu, mà còn là một người bạn để chia sẻ mọi vui buồn tuổi xế chiều. Cảm ơn vì đã kết nối chúng tôi.",
        author: "Bà Thu Cúc & Ông Quốc Bảo",
        image: "https://picsum.photos/id/10/200/200"
    },
    {
        quote: "Môi trường ở đây rất văn minh và lịch sự. Tôi cảm thấy an toàn khi trò chuyện và kết bạn. Một trải nghiệm thật tuyệt vời.",
        author: "Bà Kim Chi",
        image: "https://picsum.photos/id/22/200/200"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown-dark text-center mb-16">Những câu chuyện hạnh phúc</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-brand-cream p-8 rounded-lg shadow-md flex flex-col items-center text-center">
                            <img src={testimonial.image} alt={testimonial.author} className="w-24 h-24 rounded-full mb-6 border-4 border-brand-gold object-cover"/>
                            <p className="text-lg text-brand-text italic mb-6 flex-grow">"{testimonial.quote}"</p>
                            <span className="font-serif font-semibold text-brand-brown text-xl">- {testimonial.author}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
