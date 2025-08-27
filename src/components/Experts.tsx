
import React from 'react';

const experts = [
    {
        name: "Chuyên gia tâm lý An Nhiên",
        title: "Tư vấn viên tình cảm",
        image: "https://picsum.photos/id/342/300/300",
        bio: "Với hơn 20 năm kinh nghiệm, TS. An Nhiên đồng hành và gỡ rối những khúc mắc tình cảm, giúp các thành viên tự tin hơn trên hành trình tìm kiếm hạnh phúc."
    },
    {
        name: "Đội ngũ Hỗ trợ Tận tâm",
        title: "Hỗ trợ viên 24/7",
        image: "https://picsum.photos/id/1074/300/300",
        bio: "Đội ngũ của chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc, đảm bảo trải nghiệm của bạn luôn suôn sẻ và an toàn."
    }
];

const Experts: React.FC = () => {
    return (
        <section id="experts" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown-dark text-center mb-16">Đồng hành cùng bạn là các chuyên gia</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {experts.map((expert, index) => (
                        <div key={index} className="bg-brand-cream rounded-lg shadow-md p-6 text-center">
                            <img src={expert.image} alt={expert.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white object-cover shadow-lg"/>
                            <h3 className="text-2xl font-serif font-semibold text-brand-brown-dark">{expert.name}</h3>
                            <p className="text-brand-brown-light font-semibold mb-4">{expert.title}</p>
                            <p className="text-lg text-brand-text">{expert.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experts;
