import {
  BookmarkIcon,
  BookmarkSlashIcon,
  ChartPieIcon,
  CubeIcon,
  InformationCircleIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  TableCellsIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

type IconProps = {
  name: keyof typeof icons;
  className?: string;
};

const icons = {
  BookmarkIcon,
  BookmarkSlashIcon,
  ChartPieIcon,
  CubeIcon,
  InformationCircleIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  TableCellsIcon,
  XMarkIcon
};

export default function Icon({ name, className }: IconProps) {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent className={className} /> : null;
}
