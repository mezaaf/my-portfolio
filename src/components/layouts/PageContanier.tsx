"use-client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import Footer from "../fragments/Footer";
import { NavbarDemo } from "../fragments/Navbar";
export const PageContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <NavbarDemo />
      <main
        ref={ref}
        className={cn(
          "flex flex-1 flex-col text-gray-800 dark:text-gray-100",
          className,
        )}
        {...props}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
});

PageContainer.displayName = "PageContainer";
