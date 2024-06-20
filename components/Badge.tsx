export default function Badge({ title }: { title: string }) {
  return (
    <span className="bg-slate-200 text-xs p-1">{title}</span>
  );
}
