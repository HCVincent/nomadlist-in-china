"use client";

import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "../action-tootip";

interface NavigationItemProps {
  name: string;
  url: string;
  icon: string;
}

export const NavigationItem = ({ url, name, icon }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const onClick = () => {
    router.push(`/dashboard/${url}`);
  };

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button
        onClick={onClick}
        className="group relative flex items-center justify-center w-full"
      >
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            lastSegment !== url && "group-hover:h-[20px]",
            lastSegment === url ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            lastSegment === url && "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Image src={icon} fill alt={name} />
        </div>
        <div
          className={cn(
            "text-2xl capitalize",
            lastSegment !== url && "text-primary/20 "
          )}
        >
          {name}
        </div>
      </button>
    </ActionTooltip>
  );
};
