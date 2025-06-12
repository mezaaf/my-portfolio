"use client";

import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useRef, type ReactNode } from "react";

export const VelocityText = ({ children }: { children: ReactNode }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"],
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section ref={targetRef} className="bg-neutral-50 text-neutral-950">
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left text-5xl leading-[0.85] font-black whitespace-nowrap uppercase md:text-7xl md:leading-[0.85]"
        >
          {children}
        </motion.p>
      </div>
    </section>
  );
};
