"use client";

import { ProgressProvider } from "@bprogress/next/app";

const BProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="4px"
      color="oklch(74.6% 0.16 232.661)"
      options={{ showSpinner: true }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default BProgressProvider;
