"use client";
export default function IntroBand() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-primary)",
        padding: "64px 40px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "white",
            lineHeight: 1.5,
            marginBottom: "24px",
          }}
        >
          &ldquo;Therapy works best when you feel respected, understood, and
          actively involved in your healing.&rdquo;
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent-light)",
          }}
        >
          — Dr. Maya Reynolds, PsyD
        </p>
      </div>
    </section>
  );
}
