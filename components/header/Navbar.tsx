"use client";

import React from "react";
import localData from "@/localData";
import { ButtonDemo } from "@/components/index.js";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { SidebarNavigationMenuDemo } from "./SidebarNavigationMenuDemo";
import Link from "next/link";

const { logo } = localData.images;

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/#services" },
  { title: "Process", href: "/#process" },
];


export default function Navbar() {
  return (
    <nav className="navbar absolute w-full bg-dark-2 z-1">
      <div className="container  py-3 flex items-center justify-between ">
        <Link href="/" className="text-white font-senubold text-lg" >
          <img src={logo} alt="" className="max-w-[60px] h-auto " />
        </Link>

        <NavigationMenuDemo />

        <SidebarNavigationMenuDemo />

        {/* <div className="btn-group  gap-2 hidden lg:flex">
          <ButtonDemo variant="outline" text="Button" />
        </div> */}
      </div>
    </nav>
  );
}
