"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept select insurance plans. Please contact us to verify your coverage.",
    },
    {
      question: "What are your session fees?",
      answer:
        "Session fees vary depending on the type of therapy. Reach out for detailed pricing.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes! We offer secure virtual sessions for clients who prefer remote therapy.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply book a free consultation, and we’ll help you determine the best path forward.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 cursor-pointer hover:shadow-md transition"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="font-semibold text-lg flex justify-between">
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </h3>

            {openIndex === index && (
              <p className="text-gray-600 mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
