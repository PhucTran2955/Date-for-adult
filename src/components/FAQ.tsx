
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-brand-brown-light/20">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-6"
            >
                <h3 className="text-xl md:text-2xl font-semibold font-serif text-brand-brown-dark">{question}</h3>
                <ChevronDownIcon className={`w-8 h-8 text-brand-brown-light transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-lg text-brand-text pb-6 pr-8">{answer}</p>
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "Việc đăng ký tài khoản có tốn phí không?",
        answer: "Hoàn toàn không. Việc đăng ký, tạo hồ sơ và tìm kiếm các thành viên khác là hoàn toàn miễn phí. Chúng tôi chỉ cung cấp các gói thành viên cao cấp với một số tính năng nâng cao tùy chọn."
    },
    {
        question: "Làm thế nào để đảm bảo thông tin của tôi được an toàn?",
        answer: "Chúng tôi sử dụng mã hóa SSL và các biện pháp bảo mật nghiêm ngặt để bảo vệ dữ liệu của bạn. Đội ngũ của chúng tôi cũng kiểm duyệt hồ sơ thủ công để loại bỏ các tài khoản giả mạo, tạo một môi trường an toàn."
    },
    {
        question: "Tôi không rành về công nghệ, tôi có dùng được không?",
        answer: "Chắc chắn rồi. Giao diện của Tuổi Vàng Son được thiết kế đặc biệt cho người lớn tuổi: đơn giản, chữ to, rõ ràng và dễ điều hướng. Chúng tôi cũng có đội ngũ hỗ trợ sẵn sàng giúp đỡ bạn qua điện thoại hoặc email."
    },
    {
        question: "Tôi có thể tìm kiếm người ở gần khu vực của mình không?",
        answer: "Có. Công cụ tìm kiếm của chúng tôi cho phép bạn lọc các thành viên theo vị trí địa lý, độ tuổi, sở thích và nhiều tiêu chí khác để giúp bạn dễ dàng tìm thấy người phù hợp nhất."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown-dark text-center mb-16">Câu hỏi thường gặp</h2>
                <div className="max-w-4xl mx-auto">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
