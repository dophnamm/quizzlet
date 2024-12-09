import { useRef, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children?: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const container = containerRef.current;

    container?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [location]);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollToTop;
