export default function HeaderTwo(props: {
  title?: string;
  subtitle?: string;
  first?: string;
  second?: string;
}) {
  const { first, second, subtitle } = props;
  return (
    <div className="header flex items-start gap-4 md:gap-12 mb-12">
      <div>
        <h2 className="md:text-5xl text-2xl font-bold max-w-xl text-neutral-500">
          <span>{first} </span>
          <span className="text-white "> {second}</span>
        </h2>
        <p className="md:text-xl text-lg mt-4 text-neutral-100 max-w-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
