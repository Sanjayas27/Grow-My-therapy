export default function Info() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="font-hero font-bold leading-tight text-3xl sm:text-4xl md:text-5xl text-white">
            Have a Healthy Mind
          </h2>

          <p className="font-sub text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto md:mx-0">
            Life can be challenging—especially when you’re trying to balance
            your personal and professional life.
          </p>

          <p className="font-sub text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto md:mx-0">
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive, while still
            leaving space for reflection and depth. I integrate evidence-based
            methods such as cognitive-behavioral therapy (CBT), EMDR,
            mindfulness-based practices, and body-oriented techniques to help
            clients understand both the emotional and physiological sides of
            what they’re experiencing.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[280px] sm:h-[380px] md:h-[480px]">
          <img
            src="/image/m3.jpg"
            alt="Calm therapy workspace"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
