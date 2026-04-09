"use client";
export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 40px",
        backgroundColor: "var(--color-secondary)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="contact-grid"
        >
          {/* Left: image */}
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Peaceful therapy environment in Santa Monica"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Accent block */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "160px",
                height: "160px",
                backgroundColor: "var(--color-accent)",
                opacity: 0.2,
                zIndex: 0,
              }}
            />
          </div>

          {/* Right: form/info */}
          <div>
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
              Begin Your Journey
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                fontWeight: 300,
                color: "var(--color-primary-dark)",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              Ready to Take the
              <br />
              <em style={{ fontStyle: "italic" }}>First Step?</em>
            </h2>
            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "var(--color-accent)",
                marginBottom: "28px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "var(--color-text-muted)",
                lineHeight: 1.85,
                marginBottom: "40px",
              }}
            >
              Reaching out is the hardest part. Whether you&apos;re ready to schedule
              or simply want to learn more, I&apos;m here to answer your questions
              without pressure. You deserve support that truly fits.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              {[
                {
                  label: "Location",
                  value: "123rd Street 45 W, Santa Monica, CA 90401",
                },
                {
                  label: "Availability",
                  value: "In-Person (Santa Monica) & Telehealth (California)",
                },
                {
                  label: "Specialties",
                  value: "Anxiety · Trauma · PTSD · Burnout · Perfectionism",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-accent)",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-text-light)",
                        marginBottom: "4px",
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:hello@drmayareynolds.com"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
                padding: "16px 40px",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                transition: "background-color 0.3s",
                marginRight: "16px",
                marginBottom: "12px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-primary-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-primary)";
              }}
            >
              Send a Message
            </a>
            <a
              href="tel:+13105550100"
              style={{
                backgroundColor: "transparent",
                color: "var(--color-primary)",
                padding: "15px 40px",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                border: "1.5px solid var(--color-primary)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-primary)";
                (e.currentTarget as HTMLAnchorElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-primary)";
              }}
            >
              Call for Consultation
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
