import type { LucideIcon } from "lucide-react";

interface IconProps {
  Icon: LucideIcon;
  className?: string;
}

export const Icon = ({ Icon, className }: IconProps) => (
  <Icon className={`w-5 h-5 text-black ${className}`} />
);
