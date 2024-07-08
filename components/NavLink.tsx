"use client";
import Link from "next/link";
import Icon from "@/components/shared/Icon";

type IconName =
  "ArchiveBoxIcon" |
  "FunnelIcon" |
  "StarIcon" |
  "UserCircleIcon"

interface NavLinkProps {
  url: string;
  title?: string;
  icon?: typeof Icon;
  iconName?: IconName;
}

export default function NavLink({ url, title, icon: IconComponent, iconName }: NavLinkProps) {
  return (
    <Link href={url} className="flex items-center rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
      {IconComponent && iconName ? <IconComponent name={iconName} className="w-[24px] h-[24px]" /> : null}
      {title ? title : null}
    </Link>
  );
}
