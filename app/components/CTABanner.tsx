"use client";
export default function CTABanner() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-accent)",
        padding: "80px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)",
        }}
      />
      <div style={{ position: "relative", maxWidth: "680px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "16px",
          }}
        >
          Santa Monica · Los Angeles · All of California
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 300,
            color: "white",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          You Don&apos;t Have to Keep{" "}
          <em style={{ fontStyle: "italic" }}>Pushing Through Alone</em>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.75,
            marginBottom: "40px",
          }}
        >
          Therapy with Dr. Reynolds is a space to slow down, reconnect, and build
          more sustainable ways of living and working. Reach out today—no pressure,
          just a conversation.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              backgroundColor: "white",
              color: "var(--color-accent)",
              padding: "16px 40px",
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "var(--color-secondary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "white";
            }}
          >
            Schedule a Free Consultation
          </a>
          <a
            href="#services"
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
              border: "1.5px solid rgba(255,255,255,0.6)",
              display: "inline-block",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "white";
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.6)";
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "transparent";
            }}
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
