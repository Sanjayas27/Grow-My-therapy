"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#E9FAF7] shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="font-hero text-2xl font-semibold">
          Dr. Maya Reynolds
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a className="hover:text-teal-600 transition" href="#">Blog</a>
          <a className="hover:text-teal-600 transition" href="#">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-sm font-medium">
          <a className="block hover:text-teal-600" href="#">Blog</a>
          <a className="block hover:text-teal-600" href="#">Contact</a>
        </div>
      )}
    </nav>
  );
}
