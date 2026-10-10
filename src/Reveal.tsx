import { m, useReducedMotion, Variants } from "framer-motion";
import { Children, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  blur?: boolean;
  className?: string;
  as?: "div" | "section" | "span" | "li";
  stagger?: boolean;
  staggerDelay?: number;
}

export const Reveal = ({
  children,
  delay = 0,
  y = 32,
  x = 0,
  blur = true,
  className,
  as = "div",
  stagger = false,
  staggerDelay = 0.16,
}: RevealProps) => {
  const reduce = useReducedMotion();
  const Comp = m[as] as typeof m.div; // ← was motion[as] as typeof motion.div

  const baseTransition = {
    duration: 1,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
      x,
      filter: blur ? "blur(8px)" : "blur(0px)",
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        ...baseTransition,
        delay,
      },
    },
  };

  const staggerVariants: Variants = {
    hidden: {
      opacity: 0,
      y,
      x,
      filter: blur ? "blur(8px)" : "blur(0px)",
    },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        ...baseTransition,
        delay: delay + index * staggerDelay,
      },
    }),
  };

  if (stagger) {
    return (
      <Comp
        className={className}
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-80px" }}
        variants={variants}
      >
        {Children.map(Children.toArray(children), (child, index) => (
          <m.div // ← was motion.div
            key={index}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerVariants}
            custom={index}
            style={{ display: "block" }}
          >
            {child}
          </m.div> // ← was </motion.div>
        ))}
      </Comp>
    );
  }

  return (
    <Comp
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </Comp>
  );
};
