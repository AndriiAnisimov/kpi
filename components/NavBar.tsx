"use client";
import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/shared/Icon";

type IconName =
  "ArchiveBoxIcon" |
  "FunnelIcon" |
  "StarIcon" |
  "UserCircleIcon"

interface LinkItem {
  url: string;
  title?: string;
  icon?: typeof Icon;
  iconName?: IconName;
}

function NavLink({ url, title, icon: IconComponent, iconName }: { url: string, title?: string, icon?: typeof Icon, iconName?: IconName }) {
  return (
    <Link href={url} className="flex items-center rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
      {IconComponent && iconName ? <IconComponent name={iconName} className="w-[24px] h-[24px]" /> : null}
      {title ? title : null}
    </Link>
  );
}

export default function NavBar() {
  const [links, setLinks] = useState<LinkItem[]>([
    { url: "/", title: "Logo" },
    { url: "/featured", title: "Featured" },
    { url: "/trending", title: "Trending" },
    { url: "/another", title: "Another" },
    { url: "/filter", icon: Icon, iconName: "FunnelIcon" },
    { url: "/favorites", icon: Icon, iconName: "StarIcon" },
    { url: "/archived", icon: Icon, iconName: "ArchiveBoxIcon" },
    { url: "/profile", icon: Icon, iconName: "UserCircleIcon" }
  ]);

  return (
    <nav className="flex justify-center">
      {links.map(({ url, title, icon, iconName }) => (
        <NavLink key={url} url={url} title={title} icon={icon} iconName={iconName} />
      ))}
    </nav>
  );
}
