"use client";
const services = [
  {
    number: "01",
    title: "Anxiety & Panic Therapy",
    description:
      "Persistent worry, racing thoughts, and physical tension can make everyday life feel exhausting. Using evidence-based CBT and mindfulness techniques, I help you understand the root of your anxiety and develop practical tools to break the cycle of overthinking and dread—so you can live with greater ease and confidence.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Calm mountain landscape representing peace and clarity",
    tag: "CBT · Mindfulness",
  },
  {
    number: "02",
    title: "Trauma & PTSD Treatment",
    description:
      "Whether you're navigating the aftermath of a single incident or the effects of complex, long-standing experiences, trauma work is at the heart of my practice. I use EMDR alongside body-oriented approaches to help you process painful memories safely—moving toward regulation, resilience, and a renewed sense of safety.",
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
    alt: "Gentle forest path representing a healing journey",
    tag: "EMDR · Somatic",
  },
  {
    number: "03",
    title: "Burnout & Professional Stress",
    description:
      "Many high-achieving professionals and creatives arrive feeling accomplished yet utterly disconnected from themselves. Therapy becomes a space to slow down, untangle the pressures you carry, and rebuild a more sustainable relationship with your work and identity—before burnout takes a deeper toll.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
    alt: "Person finding calm in a serene environment",
    tag: "Burnout · Perfectionism",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 40px",
        backgroundColor: "var(--color-white)",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "80px" }}>
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
          Areas of Specialty
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "var(--color-primary-dark)",
            marginBottom: "20px",
            maxWidth: "520px",
          }}
        >
          Therapy Tailored to
          <em style={{ fontStyle: "italic" }}> Your Needs</em>
        </h2>
        <div
          style={{ width: "60px", height: "2px", backgroundColor: "var(--color-accent)" }}
        />
      </div>

      {/* Services list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
        {services.map((service, i) => (
          <div
            key={service.number}
            style={{
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
            className="service-row"
          >
            {/* Image */}
            <div
              style={{
                order: i % 2 === 0 ? 0 : 1,
                position: "relative",
                overflow: "hidden",
              }}
              className="service-image"
            >
              <img
                src={service.image}
                alt={service.alt}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                }}
              />
              {/* Tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                  padding: "6px 14px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {service.tag}
              </div>
            </div>

            {/* Content */}
            <div style={{ order: i % 2 === 0 ? 1 : 0 }} className="service-content">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "4rem",
                  fontWeight: 300,
                  color: "var(--color-border)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {service.number}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                  fontWeight: 400,
                  color: "var(--color-primary-dark)",
                  marginBottom: "20px",
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  color: "var(--color-text-muted)",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                {service.description}
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
                  transition: "color 0.2s",
                }}
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 1fr !important;
          }
          .service-image {
            order: 0 !important;
          }
          .service-content {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
