import Image from "next/image";

type SpecialityCardProps = {
  title: string;
  text: string;
  img: string;
};

export default function SpecialityCard({
  title,
  text,
  img,
}: SpecialityCardProps) {
  return (
    <div className="text-center p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <Image
        src={img}
        alt={title}
        width={130}
        height={130}
        className="rounded-full mx-auto object-cover"
      />

      <h3 className="text-xl font-semibold mt-4">{title}</h3>

      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
}
