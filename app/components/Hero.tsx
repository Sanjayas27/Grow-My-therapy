"use client";
export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1800&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "brightness(0.55)",
        }}
      />

      {/* Overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(45,65,53,0.7) 0%, rgba(45,65,53,0.3) 60%, transparent 100%)",
        }}
      />

      {/* Content — paddingTop accounts for the 72px fixed navbar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 40px 0",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "640px" }}>
          {/* Eyebrow */}
          <p
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-accent-light)",
              marginBottom: "20px",
            }}
          >
            Licensed Clinical Psychologist · Santa Monica, CA
          </p>

          {/* H1 */}
          <h1
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.05,
              marginBottom: "28px",
            }}
          >
            Anxiety & Trauma
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>
              Therapy
            </em>{" "}
            in Santa Monica
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-up delay-300"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.75,
              marginBottom: "44px",
              maxWidth: "520px",
            }}
          >
            Specialized therapy for adults navigating anxiety, panic, trauma, and burnout.
            If you feel functional on the outside while quietly struggling within,
            you&apos;ve found the right place.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up delay-400"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="#contact"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "white",
                padding: "16px 40px",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "inline-block",
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
              Schedule a Consultation
            </a>
            <a
              href="#about"
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "15px 40px",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.7)",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "transparent";
              }}
            >
              Learn More
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="animate-fade-up delay-500"
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "56px",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "10+", label: "Years Experience" },
              { num: "CBT & EMDR", label: "Evidence-Based" },
              { num: "In-Person", label: "& Telehealth" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    color: "var(--color-accent-light)",
                    marginBottom: "2px",
                  }}
                >
                  {stat.num}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.7,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            backgroundColor: "rgba(255,255,255,0.5)",
            animation: "fadeIn 1.5s ease infinite alternate",
          }}
        />
      </div>
    </section>
  );
}
