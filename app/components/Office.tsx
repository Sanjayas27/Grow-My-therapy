"use client";
export default function Office() {
  return (
    <section
      id="office"
      style={{
        backgroundColor: "var(--color-secondary)",
        padding: "120px 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
            A Calm Space for Healing
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              fontWeight: 300,
              color: "var(--color-primary-dark)",
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            Our Office in{" "}
            <em style={{ fontStyle: "italic" }}>Santa Monica</em>
          </h2>
          <div
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "var(--color-accent)",
              margin: "0 auto 24px",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--color-text-muted)",
              lineHeight: 1.85,
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            My Santa Monica office is a quiet, private space intentionally designed
            to feel calm and grounding the moment you walk in. Natural light, a
            comfortable uncluttered environment, and warm details make it easier to
            settle in—clients often share that the space itself helps them feel more
            at ease before the session even begins.
          </p>
        </div>

        {/* Image gallery */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr 0.8fr",
            gap: "16px",
            marginBottom: "64px",
          }}
          className="office-gallery"
        >
          {/* Main large image — real office photo 1 */}
          <div style={{ overflow: "hidden" }}>
            <img
              src="/office-1.png"
              alt="Dr. Maya Reynolds therapy office — bright, open room with natural light, Santa Monica"
              loading="eager"
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                transition: "transform 0.6s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
              }}
            />
          </div>

          {/* Right column: real office photo 2 fills both slots */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ overflow: "hidden", flex: 1 }}>
              <img
                src="/office-2.png"
                alt="Dr. Maya Reynolds therapy room — comfortable seating, bookshelves, and calm atmosphere"
                loading="eager"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  minHeight: "220px",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
            </div>
            <div style={{ overflow: "hidden", flex: 1 }}>
              <img
                src="/office-1.png"
                alt="Bright windows and cozy seating in the Santa Monica therapy office"
                loading="eager"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                  minHeight: "220px",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
            </div>
          </div>

          {/* Third column: accent block + info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                padding: "32px 28px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: "var(--color-accent-light)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Location
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  color: "white",
                  lineHeight: 1.5,
                  marginBottom: "16px",
                }}
              >
                123rd Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
              <div
                style={{
                  width: "40px",
                  height: "1.5px",
                  backgroundColor: "var(--color-accent)",
                  marginBottom: "16px",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.6,
                }}
              >
                Serving clients throughout California via secure telehealth.
              </p>
            </div>
          </div>
        </div>

        {/* Details row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            backgroundColor: "var(--color-border)",
          }}
          className="office-details"
        >
          {[
            {
              icon: "◎",
              title: "Private & Confidential",
              desc: "Your sessions take place in a soundproofed, fully private setting where you can speak freely.",
            },
            {
              icon: "◎",
              title: "In-Person & Telehealth",
              desc: "See Dr. Reynolds at our Santa Monica office or connect securely from anywhere in California.",
            },
            {
              icon: "◎",
              title: "Thoughtfully Designed",
              desc: "Natural light, warm textures, and a calm atmosphere—every detail chosen to help you settle in.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "white",
                padding: "40px 36px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  color: "var(--color-accent)",
                  marginBottom: "16px",
                }}
              >
                {item.icon}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  color: "var(--color-primary-dark)",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  color: "var(--color-text-muted)",
                  lineHeight: 1.75,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .office-gallery {
            grid-template-columns: 1fr !important;
          }
          .office-details {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
