"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

import { navLinks } from "./Navbar";

export function NavigationMenuDemo() {
  const pathname = usePathname();

  return (
    <NavigationMenu className={`hidden lg:flex navigation-menu`} delayDuration={0}>
      <NavigationMenuList>
        {navLinks.map(({ href, title }, index) => {
          const activeLink = (href === "/" && pathname === "/") || (href !== "/" && pathname.startsWith(href));
          return (
            <NavigationMenuItem key={index}>
              <Link href={href}>
                <div
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'font-baskervville text-xs font-medium tracking-wide uppercase text-white hover:text-primary bg-transparent hover:bg-transparent  transition duration-300',
                    // activeLink ? "text-gray-500 focus:text-gray-500 hover:text-gray-500" : ""
                  )}
                >
                  {title}
                </div>
              </Link>
            </NavigationMenuItem>
          );
        })}

   
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, href = "", ...props }, ref) => {
    const pathname = usePathname();

    const activeLink = (href === "/" && pathname === "/") || (href !== "/" && pathname.startsWith(href));

    return (
      <li>
        <Link ref={ref} href={href} {...props}>
          <div
            className={cn(
              "group select-none space-y-1 cursor-pointer rounded-md p-3 leading-none transition-colors",
              className,
              // activeLink ? "text-primary focus:text-primary" : ""
            )}
          >
            <div
              className={` text-sm leading-none ${
                children
                  ? "font-medium text-gray-800 group-hover:text-primary"
                  : "font-normal text-gray-600 group-hover:text-primary"
              }`}
            >
              {title}
            </div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary">{children}</p>
            )}
          </div>
        </Link>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
