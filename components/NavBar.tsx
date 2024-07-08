"use client";
import { useState } from "react";

import Icon from "@/components/shared/Icon";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";

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

export default function NavBar({ isErrorPage = false }: { isErrorPage?: boolean}) {
  const [links, setLinks] = useState<LinkItem[]>([
    { url: "/" },
    { url: "/featured", title: "Featured" },
    { url: "/trending", title: "Trending" },
    { url: "/another", title: "Another" },
    { url: "/filter", icon: Icon, iconName: "FunnelIcon" },
    { url: "/favorites", icon: Icon, iconName: "StarIcon" },
    { url: "/archived", icon: Icon, iconName: "ArchiveBoxIcon" },
    { url: "/profile", icon: Icon, iconName: "UserCircleIcon" }
  ]);

  const logoLink = links[0];
  const textLinks = links.slice(1, 4);
  const iconLinks = links.slice(4);

  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-4 py-2">
      <Logo url={logoLink.url} />

      <div className="flex items-center">
        {!isErrorPage && textLinks.map(({ url, title }) => (
          <NavLink key={url} url={url} title={title} />
        ))}
      </div>

      <div className="flex items-center">
        {iconLinks.map(({ url, icon, iconName }) => (
          <NavLink key={url} url={url} icon={icon} iconName={iconName} />
        ))}
      </div>
    </nav>
  );
}
