"use client";

import Link from "next/link";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SortTypes } from "@/types/sort-types";
import { usePathname } from "next/navigation";

export function HeaderNav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path.split("?")[0];

  const blogSearchParams = new URLSearchParams();
  blogSearchParams.set("sort", SortTypes.Date);

  const qotdSearchParams = new URLSearchParams();
  qotdSearchParams.set("tags", "inspirational,famous-quotes");
  qotdSearchParams.set("limit", "1");

  const navs = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: `/blog`,
      label: "Blog",
    },
    {
      href: "/talks",
      label: "Talks",
    },
    {
      href: "/gallery",
      label: "Gallery",
    },
    {
      href: "/about",
      label: "About",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        {navs.map((nav) => (
          <NavigationMenuItem key={nav.href}>
            <Link href={nav.href} className={cn(isActive(nav.href) && " text-mycolor font-bold")}>
              {nav.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
