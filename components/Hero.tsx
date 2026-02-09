import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="font-hero font-bold leading-tight text-3xl sm:text-4xl md:text-6xl">
            Rediscover the Happiness Within You
          </h1>

          <p className="font-sub mt-6 text-gray-700 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Compassionate, evidence-based therapy with Dr. Maya Reynolds to help
            you navigate anxiety, relationships, and personal growth.
          </p>

          <button className="mt-8 inline-block border-2 border-teal-700 text-teal-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-teal-700 hover:text-white transition duration-300">
            Book a Free Consultation
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[600px]">
          <Image
            src="/image/m2.jpg"
            alt="Dr. Maya Reynolds therapy session"
            fill
            className="object-cover rounded-t-[80px] md:rounded-t-[120px]"
            priority
          />
        </div>

      </div>
    </section>
  );
}
