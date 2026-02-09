import OfficeCard from "./OfficeCard";

export default function Office() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">

      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-hero font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
          A Calm Space for Healing
        </h2>

        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Step into a warm and welcoming environment designed to help you feel
          comfortable, supported, and at ease from the moment you arrive.
          Located at 123th Street 45 W, Santa Monica, CA 90401.
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <OfficeCard
          img="/office1.jpeg"
          alt="Therapy office interior"
          text="My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment."
        />

        <OfficeCard
          img="/office2.jpeg"
          alt="Counseling room"
          text="Clients often share that the space itself helps them feel more at ease when they arrive."
        />
      </div>

    </section>
  );
}
