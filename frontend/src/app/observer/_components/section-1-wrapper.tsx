"use client";
import { useEffect } from "react";

export default function Section1Wrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-100px" } // default = root: null, threshold: 0
    );

    document.querySelectorAll("div[data-animation='fade-in']").forEach((el) => observer.observe(el));
  }, []);

  return <>{children}</>;
}
