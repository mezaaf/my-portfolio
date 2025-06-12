"use client";

import React, { useEffect, useState } from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  BriefcaseBusiness,
  FolderGit2,
  Home,
  Mail,
  Moon,
  PencilRuler,
  Sun,
  User2,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function FloatingDock() {
  const floatingData = [
    {
      title: "Home",
      icon: <Home />,
      href: "#home",
    },
    {
      title: "About",
      icon: <User2 />,
      href: "#about",
    },
    {
      title: "Resume",
      icon: <BriefcaseBusiness />,
      href: "#resume",
    },
    {
      title: "Skill",
      icon: <PencilRuler />,
      href: "#skill",
    },
    {
      title: "Projects",
      icon: <FolderGit2 />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <Mail />,
      href: "#contact",
    },
    {
      title: "Theme",
      icon: "",
      href: "",
    },
  ];

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Dock
      iconMagnification={60}
      iconDistance={100}
      direction="bottom"
      className="fixed bottom-0 m-0 mb-2 self-center p-2"
    >
      {floatingData.map((item) => (
        <DockIcon
          key={item.title}
          className="m-0 items-center justify-center bg-black/10 p-0 dark:bg-white/10"
        >
          {item.title !== "Theme" ? (
            <Tooltip>
              <TooltipTrigger
                onClick={() => router.push(item.href)}
                className="cursor-pointer"
              >
                {item.icon}
              </TooltipTrigger>
              <TooltipContent className="mb-5">
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <>
              {theme === "dark" ? (
                <Tooltip>
                  <TooltipTrigger
                    onClick={() => setTheme("light")}
                    className="cursor-pointer"
                  >
                    <Sun />
                  </TooltipTrigger>
                  <TooltipContent className="mb-5">
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Tooltip>
                  <TooltipTrigger
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer"
                  >
                    <Moon />
                  </TooltipTrigger>
                  <TooltipContent className="mb-5">
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </>
          )}
        </DockIcon>
      ))}
    </Dock>
  );
}
