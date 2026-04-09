"use client";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-primary-dark)",
        padding: "72px 40px 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "60px",
            paddingBottom: "60px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                color: "white",
                marginBottom: "16px",
                letterSpacing: "0.02em",
              }}
            >
              Dr. Maya Reynolds
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-accent-light)",
                marginBottom: "20px",
              }}
            >
              PsyD · Licensed Clinical Psychologist
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                marginBottom: "28px",
              }}
            >
              Anxiety, trauma, and burnout therapy for adults in Santa Monica
              and throughout California via telehealth.
            </p>
            <a
              href="#contact"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "white",
                padding: "12px 28px",
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-accent-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-accent)";
              }}
            >
              Book a Session
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "24px",
              }}
            >
              Quick Links
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "About Dr. Reynolds", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Our Office", href: "#office" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.6)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "24px",
              }}
            >
              Specialties
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Anxiety & Panic",
                "Trauma & PTSD",
                "Burnout & Stress",
                "Perfectionism",
                "Life Transitions",
                "High Achievers",
              ].map((item) => (
                <li key={item}>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "24px",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                {
                  label: "Office",
                  value: "123rd Street 45 W\nSanta Monica, CA 90401",
                },
                {
                  label: "Session Types",
                  value: "In-Person & Telehealth\n(California Residents)",
                },
                {
                  label: "Email",
                  value: "hello@drmayareynolds.com",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--color-accent-light)",
                      marginBottom: "6px",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "32px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 300,
            }}
          >
            © {currentYear} Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.25)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            This website is not a crisis resource. If you are in crisis, please call 988 or go to your nearest emergency room.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.3)";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
