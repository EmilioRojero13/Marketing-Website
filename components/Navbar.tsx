"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, MouseEvent, useRef, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
  section?: string;
//   dropdown?: DropdownItem[];
}

interface NavLinkProps {
  item: NavItem;
  onClick?: () => void;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", section: "hero" },
  { label: "Services", href: "/services", section: "services" 
    // dropdown: servicesList,
  },
  { label: "References", href: "/references", section: "references" },
  { label: "About Us", href: "/#about", section: "about" },
];

const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NavLink: React.FC<NavLinkProps> = ({ item, onClick }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    if (isHome && item.section) {
      e.preventDefault();
      scrollToSection(item.section);
      if (onClick) onClick();
    }
  };

  const isActive =
    (item.href === "/" && pathname === "/") ||
    (item.href !== "/" && pathname.startsWith(item.href));

  return (
    <Link
      href={isHome && item.section ? `/#${item.section}` : item.href}
      className={`px-3 py-1.5 rounded-full transition-colors text-sm ${
        isActive
          ? "bg-emerald-100/70 text-emerald-800"
          : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
      }`}
      onClick={handleClick}
    >
      {item.label}
    </Link>
  );
};

const DesktopNavbar = () => {
    return (
        <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
                return <NavLink key={item.label} item={item} />;
            })}
            <button className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors rounded-full px-6 py-2 text-sm cursor-pointer shadow-sm">
                Book a call
            </button>
        </div>
    );
}

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full  z-50 flex justify-center pt-4">
        <div className="bg-white/70 backdrop-blur-md border border-emerald-600 rounded-full px-6 py-3 w-full mx-4 md:w-auto shadow-sm">
          <DesktopNavbar />
          {/* <MobileNavbar /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;