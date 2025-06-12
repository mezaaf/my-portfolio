import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type SectionContainerProps = {
  padded?: boolean;
  containerClassName?: string;
  minFullscreen?: boolean;
  id?: string;
};

export const SectionContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & SectionContainerProps
>(
  (
    {
      minFullscreen,
      className,
      children,
      padded,
      containerClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "flex h-full flex-col",
          containerClassName,
          minFullscreen && "min-h-[calc(100vh-144px)]",
          className,
          padded ? "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" : "w-full",
          props.id && `#${props.id}`,
        )}
        {...props}
      >
        {children}
      </section>
    );
  },
);

SectionContainer.displayName = "SectionContainer";
