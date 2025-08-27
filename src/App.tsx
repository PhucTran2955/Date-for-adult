
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Mission from './components/Mission';
import Experts from './components/Experts';
import Privacy from './components/Privacy';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="overflow-x-hidden">
            <Header onRegisterClick={openModal} />
            <main>
                <Hero onRegisterClick={openModal} />
                <Benefits />
                <HowItWorks />
                <Testimonials />
                <Mission />
                <Experts />
                <Privacy />
                <FAQ />
                <FinalCTA onRegisterClick={openModal} />
            </main>
            <Footer />
            {isModalOpen && <RegistrationModal onClose={closeModal} />}
        </div>
    );
};

export default App;

