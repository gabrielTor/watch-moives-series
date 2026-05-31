interface Props {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: Readonly<Props>) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <span className="w-1 h-7 bg-liteBlue rounded-full block flex-shrink-0" />
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-gray-500 text-sm mt-1 pl-4">{subtitle}</p>
      )}
    </div>
  );
}
