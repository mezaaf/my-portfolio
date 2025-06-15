"use client";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { IconMailCode, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Resume",
      link: "#resume",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="z-99 flex items-center gap-4">
            <IconMailCode
              className="cursor-pointer stroke-sky-400"
              onClick={() => router.push("#contact")}
            />
            {theme === "dark" ? (
              <IconSun
                className="cursor-pointer stroke-sky-400"
                onClick={() => setTheme("light")}
              />
            ) : (
              <IconMoon
                className="cursor-pointer stroke-sky-400"
                onClick={() => setTheme("dark")}
              />
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="z-99 flex items-center gap-4">
              <IconMailCode
                className="cursor-pointer stroke-sky-400"
                onClick={() => {
                  router.push("#contact");
                  setIsMobileMenuOpen(false);
                }}
              />
              {theme === "dark" ? (
                <IconSun
                  className="cursor-pointer stroke-sky-400"
                  onClick={() => {
                    setTheme("light");
                    setIsMobileMenuOpen(false);
                  }}
                />
              ) : (
                <IconMoon
                  className="cursor-pointer stroke-sky-400"
                  onClick={() => {
                    setTheme("dark");
                    setIsMobileMenuOpen(false);
                  }}
                />
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
