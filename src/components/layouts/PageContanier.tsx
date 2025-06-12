"use-client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { FloatingDock } from "../fragments/FloatingDock";
export const PageContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <main
        ref={ref}
        className={cn("flex flex-1 flex-col", className)}
        {...props}
      >
        {children}
      </main>
      <FloatingDock />
    </div>
  );
});

PageContainer.displayName = "PageContainer";
