"use client";
export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--color-secondary)",
        padding: "120px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Image column */}
        <div style={{ position: "relative" }} className="about-image-col">
          {/* Main portrait */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <img
              src="/maya-reynolds.png"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
              style={{
                width: "100%",
                height: "560px",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
              }}
            />
          </div>
          {/* Decorative offset block */}
          <div
            style={{
              position: "absolute",
              bottom: "-24px",
              right: "-24px",
              width: "200px",
              height: "200px",
              backgroundColor: "var(--color-primary)",
              zIndex: 1,
            }}
          />
          {/* Credential badge */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "-24px",
              backgroundColor: "white",
              padding: "20px 24px",
              zIndex: 3,
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
              minWidth: "200px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                color: "var(--color-primary)",
                marginBottom: "4px",
              }}
            >
              Dr. Maya Reynolds
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
              }}
            >
              PsyD · Licensed Clinical Psychologist
            </p>
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "var(--color-accent)",
                marginTop: "10px",
              }}
            />
          </div>
        </div>

        {/* Content column */}
        <div className="about-content-col">
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
            About Your Therapist
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              fontWeight: 300,
              color: "var(--color-primary-dark)",
              marginBottom: "8px",
              lineHeight: 1.1,
            }}
          >
            Warm, Grounded &
            <br />
            <em style={{ fontStyle: "italic" }}>Depth-Oriented</em>
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
              fontSize: "0.95rem",
              fontWeight: 300,
              color: "var(--color-text-muted)",
              lineHeight: 1.85,
              marginBottom: "20px",
            }}
          >
            I&apos;m a licensed clinical psychologist based in Santa Monica, California,
            offering therapy for adults who feel overwhelmed by anxiety, stress, or the
            lingering effects of past experiences. Many of the people I work with are
            high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck
            in overthinking, or emotionally on edge.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              fontWeight: 300,
              color: "var(--color-text-muted)",
              lineHeight: 1.85,
              marginBottom: "20px",
            }}
          >
            I take a warm, collaborative, and grounded approach to therapy. Sessions are
            structured enough to feel supportive, while still leaving space for reflection
            and depth. I integrate evidence-based methods such as{" "}
            <strong style={{ color: "var(--color-primary)", fontWeight: 500 }}>
              Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based practices,
            </strong>{" "}
            and body-oriented techniques.
          </p>
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
            My goal is not just symptom relief—it&apos;s helping you develop insight,
            resilience, and a stronger relationship with yourself over time.
          </p>

          {/* Credentials list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
            {[
              "Doctor of Psychology (PsyD) — Licensed in California",
              "Specialized in Anxiety, Trauma, PTSD & Burnout",
              "Trained in EMDR & Cognitive-Behavioral Therapy",
              "In-Person (Santa Monica) & Telehealth (California)",
            ].map((cred) => (
              <div key={cred} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span
                  style={{
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    marginTop: "1px",
                    flexShrink: 0,
                  }}
                >
                  ✦
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {cred}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "white",
              padding: "15px 36px",
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
              transition: "background-color 0.3s",
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
            Work With Dr. Reynolds
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .about-image-col {
            order: 0;
          }
          .about-content-col {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
