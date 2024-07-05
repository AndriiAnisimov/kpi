import {
  ArchiveBoxIcon,
  BookmarkIcon,
  BookmarkSlashIcon,
  ChartBarIcon,
  CubeIcon,
  FlagIcon,
  FunnelIcon,
  InformationCircleIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  NewspaperIcon,
  StarIcon,
  TableCellsIcon,
  UserCircleIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

type IconProps = {
  name: keyof typeof icons;
  className?: string;
};

const icons = {
  ArchiveBoxIcon,
  BookmarkIcon,
  BookmarkSlashIcon,
  ChartBarIcon,
  CubeIcon,
  FlagIcon,
  FunnelIcon,
  InformationCircleIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  NewspaperIcon,
  StarIcon,
  TableCellsIcon,
  UserCircleIcon,
  XMarkIcon
};

export default function Icon({ name, className }: IconProps) {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent className={className} /> : null;
}
