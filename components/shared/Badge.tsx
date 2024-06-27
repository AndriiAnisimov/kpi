export default function Badge({ title }: { title: string | null }) {
  return (
    <span className="bg-slate-100 text-xs p-1">{title}</span>
  );
}
