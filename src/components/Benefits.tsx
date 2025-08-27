
import React from 'react';
import { ShieldCheckIcon, UserGroupIcon, CursorArrowRaysIcon, LockClosedIcon } from './icons';

const benefits = [
    {
        icon: <UserGroupIcon />,
        title: "Văn minh & Tôn trọng",
        description: "Xây dựng một cộng đồng chia sẻ lịch sự, nơi mọi thành viên đều được tôn trọng."
    },
    {
        icon: <CursorArrowRaysIcon />,
        title: "Dễ dàng sử dụng",
        description: "Giao diện được thiết kế tối giản, thân thiện, dành riêng cho người lớn tuổi."
    },
    {
        icon: <LockClosedIcon />,
        title: "Riêng tư tuyệt đối",
        description: "Cam kết tôn trọng và bảo vệ không gian riêng tư của mỗi thành viên."
    },
    {
        icon: <ShieldCheckIcon />,
        title: "Bảo mật hàng đầu",
        description: "Thông tin cá nhân của bạn được mã hóa và bảo vệ an toàn tuyệt đối."
    }
];

const Benefits: React.FC = () => {
    return (
        <section id="benefits" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown-dark mb-4">Tại sao chọn Tuổi Vàng Son?</h2>
                <p className="text-xl text-brand-text max-w-3xl mx-auto mb-16">Chúng tôi mang đến một không gian kết nối an toàn, thấu hiểu và đáng tin cậy.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-brand-gold text-white rounded-full p-5 mb-6 inline-block">
                                {benefit.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-semibold text-brand-brown-dark mb-3">{benefit.title}</h3>
                            <p className="text-lg text-brand-text">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
