import SpecialityCard from "./SpecialityCard";

export default function Specialties() {
  const specialties = [
    {
      title: "Anxiety Therapy",
      text: "Learn practical strategies to manage anxiety and regain control of your life.",
      img: "/anxiety.jpg",
    },
    {
      title: "Trauma Healing",
      text: "Process difficult experiences in a safe, supportive environment.",
      img: "/trauma.jpg",
    },
    {
      title: "Relationship Counseling",
      text: "Strengthen communication and build healthier connections.",
      img: "/relationship.jpg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h2 className="font-hero font-bold text-center text-2xl sm:text-3xl md:text-4xl mb-10">
        Areas of Speciality
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {specialties.map((item, index) => (
          <SpecialityCard
            key={index}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
}
