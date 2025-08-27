
import React from 'react';
import { ShieldCheckIcon } from './icons';

const Privacy: React.FC = () => {
    return (
        <section id="privacy" className="py-20 bg-brand-cream">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="text-brand-gold flex-shrink-0">
                    <ShieldCheckIcon className="w-24 h-24 md:w-32 md:h-32" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-serif font-bold text-brand-brown-dark mb-4">Sự riêng tư của bạn là ưu tiên hàng đầu</h2>
                    <p className="text-xl text-brand-text leading-relaxed">
                        Chúng tôi hiểu rằng niềm tin là nền tảng của mọi mối quan hệ. Vì vậy, chúng tôi áp dụng các công nghệ bảo mật tiên tiến nhất để mã hóa và bảo vệ mọi thông tin cá nhân bạn chia sẻ. Hồ sơ của bạn chỉ hiển thị với những thành viên đã được xác thực, đảm bảo một không gian riêng tư và an toàn tuyệt đối.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
