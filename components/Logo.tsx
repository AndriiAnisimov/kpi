import Link from "next/link";
import Image from "next/image";
import logo from "@/public/programmer.svg";

export default function Logo({ url }: { url: string }) {
  return (
    <Link href={url} className="flex items-center rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
      <Image src={logo} alt="Logo" width={50} height={50} />
    </Link>
  );
}
