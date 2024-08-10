// FAQComponent.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        {
            question: "What types of chemicals do you offer?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis semper sapien. Integer aliquam, purus sit amet fermentum blandit, ex arcu eleifend eros, at fermentum turpis lorem a purus. Aenean vel urna a leo hendrerit ullamcorper. Donec ut orci ex."
        },
        {
            question: "How can I place an order?",
            answer: "To place an order, you can contact us through our website or directly through the provided email and phone number."
        },
        {
            question: "What are your shipping options?",
            answer: "We offer various shipping options depending on your location. Please contact us for detailed information."
        },
        {
            question: "Do you provide Material Safety Data Sheets (MSDS) for your products?",
            answer: "Yes, we provide MSDS for all our products. Please request them when placing your order."
        }
    ];

    return (
        <div className="faq-container">
            <h2>Frequently Asked Question</h2>
            <ul className="faq-list">
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <div className="faq-question" onClick={() => toggle(index)}>
                            {faq.question}
                            <span className="faq-toggle">{open === index ? '-' : '+'}</span>
                        </div>
                        {open === index && <div className="faq-answer">{faq.answer}</div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;
