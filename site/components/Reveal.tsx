"use client";
import { useEffect, useRef, type ReactNode, type Ref } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  tag?: "div" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const props = {
    className: `reveal ${className}`,
    style: { transitionDelay: `${delay}ms` },
  };

  if (tag === "article") {
    return (
      <article ref={ref as Ref<HTMLElement>} {...props}>
        {children}
      </article>
    );
  }
  return (
    <div ref={ref as Ref<HTMLDivElement>} {...props}>
      {children}
    </div>
  );
}
