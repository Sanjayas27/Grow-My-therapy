import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica, CA",
  description: "Licensed clinical psychologist in Santa Monica, CA specializing in anxiety, trauma, PTSD, and burnout. In-person and telehealth therapy for adults in California.",
  keywords: "therapist Santa Monica, anxiety therapist Los Angeles, trauma therapy California, EMDR therapist Santa Monica, licensed psychologist CA, CBT therapy anxiety",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
