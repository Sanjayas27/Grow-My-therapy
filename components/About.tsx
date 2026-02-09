import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div>
          <Image
            src="/therapist.png"
            alt="Therapist"
            width={500}
            height={500}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-5xl font-bold tracking-tight leading-tight">  
            Meet Dr. Maya Reynolds
          </h2>
              <p className="text-2xl font-bold tracking-tight leading-tight py-3">
           Licensed Clinical Psychologist(PsyD)
          </p>
          <p className="text-gray-600 mb-4 py-3">
            Dr. Maya Reynolds is a compassionate, licensed therapist dedicated to helping individuals navigate anxiety, trauma, and life transitions.
          </p>

          <p className="text-gray-600 mb-6">
            Her approach combines evidence-based techniques with genuine human connection, creating a safe space where healing and growth can happen.
          </p>

            <button className="mt-8 border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-full cursor-pointer hover:bg-teal-700 hover:text-white transition duration-300">
 Know me
</button>

        </div>

      </div>
    </section>
  );
}
