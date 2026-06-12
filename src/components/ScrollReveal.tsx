import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observeElements = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      els.forEach((el) => io.observe(el));
    };

    // Initial observation on page load/path change
    observeElements();

    // Watch for dynamic DOM changes (like filters, tab switching, or lazy loading)
    const observer = new MutationObserver(() => {
      observeElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
