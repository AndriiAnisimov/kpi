export default function BadgeItem({ title }: { title: string | null }) {
  return (
    <span className="bg-slate-100 border-2 rounded border-slate-200 text-xs mx-1 px-2 py-1">{title}</span>
  );
}
