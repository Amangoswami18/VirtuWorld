import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
        else setIsVisible(false);
      },
      {
        rootMargin: "0px 0px -30% 0px", // Trigger a bit before fully visible
        threshold: 0.1,
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Split title into lines and words preserving <br /> tags
  const lines = title.split("<br />");

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, wordIndex) => {
            // Each word fades and slides up with staggered delay
            const delay = wordIndex * 100; // ms delay

            return (
              <span
                key={wordIndex}
                className={clsx(
                  "inline-block opacity-0 transform translate-y-4 transition-all duration-700 ease-out",
                  {
                    "opacity-100 translate-y-0": isVisible,
                  }
                )}
                style={{
                  transitionDelay: `${delay}ms`,
                }}
                dangerouslySetInnerHTML={{ __html: word }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
