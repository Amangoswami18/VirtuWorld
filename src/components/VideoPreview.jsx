import { useRef, useState } from "react";

const VideoPreview = ({ children }) => {
  const [transformStyle, setTransformStyle] = useState({
    transform: "rotateX(0deg) rotateY(0deg) translate(0px, 0px)",
  });

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);
    const translateX = (-x / 10).toFixed(2);
    const translateY = (-y / 10).toFixed(2);

    setTransformStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${translateX}px, ${translateY}px)`,
    });
  };

  const resetTransform = () => {
    setTransformStyle({
      transform: "rotateX(0deg) rotateY(0deg) translate(0px, 0px)",
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      className="absolute z-50 size-full overflow-hidden rounded-lg"
      style={{ perspective: "600px" }}
    >
      <div
        className="origin-center rounded-lg transition-transform duration-300 ease-out"
        style={{
          transformStyle: "preserve-3d",
          ...transformStyle,
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default VideoPreview;
