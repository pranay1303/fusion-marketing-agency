"use client";

import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export const Navbar = () => {
  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <ResizableNavbar>
      {/* Desktop */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex gap-4">
          {/* Email Button */}
          <a href="mailto:fusionagency@gmail.com">
            <NavbarButton variant="secondary">Email</NavbarButton>
          </a>

          {/* Phone Call Button */}
          <a href="tel:8605957962">
            <NavbarButton variant="primary">Phone Call</NavbarButton>
          </a>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileOpen}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setIsMobileOpen(false)}
              className="text-neutral-600 dark:text-neutral-300 block py-2"
            >
              {item.name}
            </a>
          ))}

          <div className="flex flex-col gap-4 mt-4">
            {/* Email */}
            <a href="mailto:fusionagency@gmail.com" onClick={() => setIsMobileOpen(false)}>
              <NavbarButton variant="secondary">Email</NavbarButton>
            </a>

            {/* Phone Call */}
            <a href="tel:8605957962" onClick={() => setIsMobileOpen(false)}>
              <NavbarButton variant="primary">Phone Call</NavbarButton>
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};
