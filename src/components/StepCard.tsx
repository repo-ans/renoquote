export function StepCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="relative h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-900/5 transition-all duration-300 hover:shadow-md hover:ring-accent-500/30">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
        {index}
      </div>
      <h3 className="mb-2 text-2xl font-semibold text-navy-900 sm:text-[32px]">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-slate-500">
        {description}
      </p>
    </div>
  );
}
