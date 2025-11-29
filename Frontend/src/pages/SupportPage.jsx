import React, { useState } from 'react';
import '../styles/support.css'; // **UPDATED PATH** (Looks for src/styles/support.css from src/pages)

// Using simple SVG placeholders for icons to maintain clean vanilla JS/React
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.4 19.4 0 0 1-3.32-2.18 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.74a17.1 17.1 0 0 0 .96 4.75a2 2 0 0 1-.41 1.73l-1.4 1.4a15.46 15.46 0 0 0 7.37 7.37l1.4-1.4a2 2 0 0 1 1.73-.41a17.1 17.1 0 0 0 4.75 .96a2 2 0 0 1 1.74 2Z"/></svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
const LocationPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const ChevronDown = ({ isOpen }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={`chevron ${isOpen ? 'open' : ''}`}
    >
        <polyline points="6 9 12 15 18 9"/>
    </svg>
);

const faqData = [
    { id: 1, question: "What is Safesphere?", answer: "Safesphere is a platform dedicated to educating people about Gender Based Violence, offering resources, reporting tools, and support services.", category: "General" },
    { id: 2, question: "Is the platform free?", answer: "Yes, Safesphere is completely free to use. Our mission is to provide accessible support and education to everyone.", category: "General" },
    { id: 3, question: "Is my information really anonymous?", answer: "We take privacy and anonymity extremely seriously. All reporting options clearly detail the level of anonymity provided. Refer to our Privacy policy for full details.", category: "Privacy" },
    { id: 4, question: "What if I'm in immediate danger?", answer: "If you are in immediate danger, please use the 'Emergency' button in the navigation bar or call 1-800-SAFE-NOW immediately.", category: "Safety" },
    { id: 5, question: "How do I submit an anonymous report?", answer: "Navigate to the 'Report' section and follow the instructions for submitting a fully anonymous report. We do not require any personal identification for this option.", category: "Report" },
    { id: 6, question: "Can I track my report?", answer: "Yes, if you choose the non-anonymous or partially anonymous reporting option, you will be given a unique ID to track your report's status in the 'My Reports' section.", category: "Technical" },
    { id: 7, question: "How is my data protected?", answer: "We use industry-standard encryption and follow strict data protection protocols. Your data is never shared without explicit consent.", category: "Privacy" },
    { id: 8, question: "Can I delete my account and data?", answer: "Yes, you have full control over your data. You can delete your account and all associated data through your profile settings.", category: "Technical" },
];

const categories = ["All Questions", "General", "Technical", "Safety", "Privacy"];


const FAQItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="faq-item" onClick={onClick}>
            <div className="faq-question">
                {item.question}
                <ChevronDown isOpen={isOpen} />
            </div>
            <div className={`faq-answer ${isOpen ? 'show' : ''}`}>
                <p>{item.answer}</p>
            </div>
        </div>
    );
};


const SupportPage = () => {
    const [activeTab, setActiveTab] = useState("All Questions");
    const [openFAQ, setOpenFAQ] = useState(null);

    const filteredFAQs = activeTab === "All Questions"
        ? faqData
        : faqData.filter(faq => faq.category === activeTab);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="support-page-container">
            <header className="page-header">
                <h1>Help & Support</h1>
                <p>Find answers to common questions or reach out to our support team</p>
            </header>

            <section className="contact-section">
                <div className="contact-box">
                    <PhoneIcon />
                    <h2>Call Us</h2>
                    <p>Available 24/7</p>
                    <button className="contact-button text-button">1-800-SAFE-NOW</button>
                </div>
                <div className="contact-box">
                    <EmailIcon />
                    <h2>Email Us</h2>
                    <p>Response within 24h</p>
                    <button className="contact-button text-button">support@safesphere.org</button>
                </div>
                <div className="contact-box">
                    <ChatIcon />
                    <h2>Chat Support</h2>
                    <p>Live chat available</p>
                    <button className="contact-button primary-button">Start Chat</button>
                </div>
            </section>

            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>

                <div className="faq-tabs">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`faq-tab ${activeTab === category ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(category);
                                setOpenFAQ(null); // Close any open FAQ when changing tabs
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="faq-list">
                    {filteredFAQs.map(item => (
                        <FAQItem
                            key={item.id}
                            item={item}
                            isOpen={openFAQ === item.id}
                            onClick={() => toggleFAQ(item.id)}
                        />
                    ))}
                </div>
            </section>

            <section className="contact-cta">
                <div className="cta-content">
                    <LocationPinIcon />
                    <div>
                        <h3>Can't find what you're looking for?</h3>
                        <p>Our support team is here to help. We respond to all inquiries within 24 hours and provide resources specific to your situation.</p>
                    </div>
                </div>
                <button className="primary-button large-button">Contact Support Team</button>
            </section>

            <div className="back-home-link">
                <a href="/">← Back Home</a>
            </div>
        </div>
    );
};

export default SupportPage;