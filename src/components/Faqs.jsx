"use client"

import { useState } from "react"

const Faqs = () => {
  const faqData = [
    {
      question: "What is the minimum duration of stay?",
      answer:
        "The minimum duration of stay is 3 months. However, we offer flexible options for students and working professionals based on their requirements.",
    },
    {
      question: "Are meals included in the rent?",
      answer:
        "Yes, three meals (breakfast, lunch, and dinner) plus evening snacks are included in the monthly rent. We also accommodate special dietary requirements with prior notice.",
    },
    {
      question: "What is the check-in and check-out time?",
      answer:
        "Check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in or late check-out can be arranged with prior approval, subject to availability.",
    },
    {
      question: "Is there a curfew time?",
      answer:
        "Yes, the hostel gates close at 11:00 PM. Late entry is allowed with prior information to the warden. We maintain this policy for the safety and security of all residents.",
    },
    {
      question: "Can I have guests over?",
      answer:
        "Guests are allowed in common areas during visiting hours (10:00 AM to 8:00 PM). Overnight stays for guests are not permitted without prior approval from management.",
    },
    {
      question: "Is WiFi available?",
      answer:
        "Yes, high-speed WiFi is available throughout the premises at no additional cost. Each resident receives login credentials upon check-in.",
    },
    {
      question: "What about laundry services?",
      answer:
        "We provide laundry services at nominal charges. You can also use the washing machines in the laundry room if you prefer to do your own laundry.",
    },
    {
      question: "How far is the hostel from major IT parks?",
      answer:
        "Our hostel is approximately 15 minutes from Viman Nagar IT hub and about 25 minutes from Magarpatta and Kharadi IT parks. We're also just 10 minutes from the airport.",
    },
    {
      question: "What security measures are in place?",
      answer:
        "We have 24/7 security guards, CCTV surveillance in common areas, and a biometric entry system for residents. Emergency contact numbers are displayed prominently throughout the premises.",
    },
  ]

  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleFaq = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <div className="faqs_wrapper">
      <h2>Frequently Asked Questions</h2>
      <p className="faqs_intro">Find answers to common questions about our hostel and services.</p>

      <div className="faq_list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq_item">
            <div
              className={`faq_question ${expandedIndex === index ? "expanded" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <h3>{faq.question}</h3>
              <span className="toggle_icon">{expandedIndex === index ? "−" : "+"}</span>
            </div>

            <div className={`faq_answer ${expandedIndex === index ? "show" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faqs
