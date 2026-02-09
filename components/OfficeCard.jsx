"use client";
import Image from "next/image";
import { useState } from "react";

export default function OfficeCard(props) {
  const { img, alt, text } = props;
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl h-[280px] sm:h-[350px] cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {/* IMAGE */}
      <Image
        src={img}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-500 md:hover:scale-105 md:hover:blur-sm"
      />

      {/* OVERLAY */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          bg-black/40 px-6 text-center text-white
          transition duration-300
          opacity-0 md:hover:opacity-100
          ${open ? "opacity-100" : ""}
        `}
      >
        <p className="text-sm sm:text-base leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
