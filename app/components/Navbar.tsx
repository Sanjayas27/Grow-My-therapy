"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Office", href: "#office" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const linkColor = scrolled ? "var(--color-text)" : "rgba(255,255,255,0.9)";

  return (
    <>
      <style>{`
        .nav-desktop { display: none; }
        .nav-hamburger { display: flex; }
        @media (min-width: 768px) {
          .nav-desktop { display: flex; }
          .nav-hamburger { display: none; }
        }
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: var(--color-accent) !important; }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 40px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s ease",
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            color: scrolled ? "var(--color-primary)" : "white",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "color 0.3s",
          }}
        >
          Dr. Maya Reynolds
        </a>

        {/* Desktop nav links */}
        <ul
          className="nav-desktop"
          style={{
            gap: "36px",
            listStyle: "none",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: linkColor,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "white",
                padding: "10px 24px",
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background-color 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-accent-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-accent)";
              }}
            >
              Book a Session
            </a>
          </li>
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: scrolled ? "var(--color-primary)" : "white",
                transition: "all 0.3s",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            zIndex: 99,
            backgroundColor: "white",
            padding: "24px 40px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-text)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundColor: "var(--color-accent)",
              color: "white",
              padding: "12px 24px",
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Book a Session
          </a>
        </div>
      )}
    </>
  );
}
