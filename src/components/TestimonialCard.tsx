import Image, { StaticImageData } from "next/image";

export default function TestimonialCard(props: {
  testimonial: string;
  author: string;
  role: string;
  image: StaticImageData;
}) {
  const { testimonial, author, role, image } = props;
  return (
    <div className="my-16 px-6 max-w-2xl flex flex-col items-center text-center mx-auto">
      <Image
        src={image}
        alt={author}
        width={50}
        height={50}
        className="rounded-full mb-4 "
      />
      <p className="italic mb-4 text-xl">&quot;{testimonial}&quot;</p>
      <h4 className="text-lg">{author}</h4>
      <p className="text-lg text-gray-500">{role}</p>
    </div>
  );
}
