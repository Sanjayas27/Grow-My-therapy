"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do you offer a free consultation before starting therapy?",
    a: "Yes. I offer a brief initial phone consultation so we can discuss what you're looking for, answer any questions about my approach, and see if working together feels like a good fit. There's no obligation—it's simply a chance to connect before committing to a session.",
  },
  {
    q: "What types of clients do you typically work with?",
    a: "I work with adults navigating anxiety, panic, trauma, PTSD, and burnout. Many of my clients are high-achievers—entrepreneurs, creatives, and professionals—who feel functional on the outside while quietly struggling with worry, exhaustion, or the effects of past experiences. I also work with people managing perfectionism, stress from major life transitions, and relationship patterns rooted in early experiences.",
  },
  {
    q: "Do you offer telehealth sessions?",
    a: "Yes. I offer secure telehealth therapy to clients anywhere in California. Online sessions are conducted via a HIPAA-compliant platform and are just as effective as in-person for most concerns. Many clients appreciate the flexibility and convenience of telehealth, especially those with busy professional lives.",
  },
  {
    q: "How long does therapy typically take?",
    a: "The length of therapy varies depending on what you're working on and your goals. Some clients find significant relief in a focused 12–16 week period; others prefer longer-term support as they work through more complex patterns. We'll set goals together and regularly check in on your progress to ensure therapy is moving in the right direction for you.",
  },
  {
    q: "What does a typical therapy session look like?",
    a: "Sessions are 50 minutes and are structured enough to feel focused and productive, while still allowing space for reflection and depth. We might use CBT exercises, mindfulness practices, EMDR processing, or simply explore what's on your mind that week—depending on where you are and what would be most helpful.",
  },
  {
    q: "Do you accept insurance?",
    a: "I am an out-of-network provider. I can provide a monthly Superbill (an itemized receipt) that you can submit to your insurance company for possible reimbursement, depending on your out-of-network benefits. I recommend calling your insurance provider prior to our first session to understand what your plan covers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        padding: "120px 40px",
        backgroundColor: "var(--color-white)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "80px",
          alignItems: "start",
        }}
        className="faq-grid"
      >
        {/* Left */}
        <div style={{ position: "sticky", top: "100px" }} className="faq-left">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "16px",
            }}
          >
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              fontWeight: 300,
              color: "var(--color-primary-dark)",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Frequently
            <br />
            <em style={{ fontStyle: "italic" }}>Asked</em>
          </h2>
          <div
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "var(--color-accent)",
              marginBottom: "32px",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            Have a question that isn&apos;t listed here? Reach out—I&apos;m happy to
            answer before you commit to a session.
          </p>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              textDecoration: "none",
              borderBottom: "1.5px solid var(--color-accent)",
              paddingBottom: "3px",
            }}
          >
            Contact Dr. Reynolds →
          </a>
        </div>

        {/* Right: accordion */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "28px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    color: openIndex === i ? "var(--color-primary)" : "var(--color-text)",
                    lineHeight: 1.3,
                    transition: "color 0.2s",
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.4rem",
                    color: "var(--color-accent)",
                    flexShrink: 0,
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    fontWeight: 300,
                    color: "var(--color-text-muted)",
                    lineHeight: 1.85,
                    paddingBottom: "28px",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .faq-left {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
