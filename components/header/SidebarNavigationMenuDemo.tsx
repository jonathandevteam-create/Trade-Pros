import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SheetDemo, AccordionDemo } from "@/components/index.js";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "./Navbar";
import { useRouter } from "next/navigation";

export function SidebarNavigationMenuDemo() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <SheetDemo
      title="MENU"
      description="Artisan Renovations"
      side="left"
      contentClassName=" overflow-y-auto "
      trigger={
        <Button type="button" size="icon" variant="ghost" className="lg:hidden cursor-pointer text-white hover:bg-[#222] hover:text-white">
          <Menu />
        </Button>
      }
    >
      {(onClose) => (
        <nav className="navbar">
          <ul className="mt-[20px]">
            {navLinks.map((item) => {
              const activeLink = (item.href === "/" && pathname === "/") || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.title} className="list-none">
                  <a
                    // href={item.href}
                    className={`font-baskervville cursor-pointer block py-2 px-4 hover:bg-gray-100 ${activeLink ? "text-success" : ""}`}
                    onClick={() => {
                      onClose();
                      setTimeout(() => router.push(item.href), 100);
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </SheetDemo>
  );
}
