export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-24">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* LEFT */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#134E4A] mb-6">
            Dr. Maya Reynolds
          </h3>

          <p className="text-gray-700 mb-4">
            123th Street 45 W <br />
            Santa Monica, CA 90401
          </p>

          <p className="text-gray-700 underline cursor-pointer">
            email@example.com
          </p>

          <p className="text-gray-700 underline cursor-pointer mt-2">
            (555) 555-5555
          </p>
        </div>

        {/* HOURS */}
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-[#134E4A] mb-6">
            Hours
          </h4>

          <p className="text-gray-700">
            Monday – Friday <br />
            10am – 6pm
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-[#134E4A] mb-6">
            Find
          </h4>

          <div className="flex justify-center md:justify-start gap-6 flex-wrap">
  <a href="/" className="underline hover:text-[#0F766E] transition">
    Home
  </a>
  <a href="/" className="underline hover:text-[#0F766E] transition">
    Contact
  </a>
  <a href="/" className="underline hover:text-[#0F766E] transition">
    Blog
  </a>
</div>
        </div>

      </div>

      {/* LEGAL ROW */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-6 text-sm text-gray-700">
          <a href="#" className="underline hover:text-[#0F766E] transition">
            Privacy & Cookies Policy
          </a>
          <a href="#" className="underline hover:text-[#0F766E] transition">
            Good Faith Estimate
          </a>
          <a href="#" className="underline hover:text-[#0F766E] transition">
            Website Terms & Conditions
          </a>
          <a href="#" className="underline hover:text-[#0F766E] transition">
            Disclaimer
          </a>
        </div>
      </div>

      {/* CREDITS */}
      <div className="text-center text-gray-700 text-sm pb-2">
        Website Template Credits:{" "}
        <span className="underline cursor-pointer hover:text-[#0F766E] transition">
          Grow My Therapy
        </span>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-700 text-sm pb-8">
        All Rights Reserved © 2026 Dr. Maya Reynolds Therapy, LLC.
      </div>

    </footer>
  );
}
