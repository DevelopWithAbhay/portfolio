// src/components/InfiniteImageReel.jsx
import { useRef, useState } from "react";
import { useEffect } from "react";

const desktopImages = [
  "/shopify-images/mira-d-1.webp",
  "/shopify-images/mira-d-2.webp",
  "/shopify-images/mira-d-3.webp",
  "/shopify-images/mira-d-4.webp",
  "/shopify-images/fly-d-1.webp",
  "/shopify-images/fly-d-2.webp",
  "/shopify-images/fly-d-3.webp",
  "/shopify-images/fly-d-4.webp",
  "/shopify-images/ano-d-1.webp",
  "/shopify-images/ano-d-2.webp",
  "/shopify-images/ano-d-3.webp",
  "/shopify-images/ano-d-4.webp",
  "/shopify-images/neid-d-1.webp",
  "/shopify-images/neid-d-2.webp",
  "/shopify-images/neid-d-3.webp",
  "/shopify-images/neid-d-4.webp",
  "/shopify-images/oro-d-1.webp",
  "/shopify-images/oro-d-2.webp",
  "/shopify-images/oro-d-3.webp",
  "/shopify-images/oro-d-4.webp"
];

const mobileImages = [
  "/shopify-images/mira-m-1.webp",
  "/shopify-images/mira-m-2.webp",
  "/shopify-images/mira-m-3.webp",
  "/shopify-images/mira-m-4.webp",
  "/shopify-images/fly-m-1.webp",
  "/shopify-images/fly-m-2.webp",
  "/shopify-images/fly-m-3.webp",
  "/shopify-images/fly-m-4.webp",
  "/shopify-images/ano-m-3.webp",
  "/shopify-images/ano-m-1.webp",
  "/shopify-images/ano-m-4.webp",
  "/shopify-images/ano-m-2.webp",
  "/shopify-images/neid-m-1.webp",
  "/shopify-images/neid-m-2.webp",
  "/shopify-images/neid-m-3.webp",
  "/shopify-images/neid-m-4.webp",
  "/shopify-images/oro-m-1.webp",
  "/shopify-images/oro-m-2.webp",
  "/shopify-images/oro-m-3.webp",
  "/shopify-images/oro-m-4.webp"
];


export default function InfiniteImageReel() {
  const startX = useRef(0);
  const startWidth = useRef(0);

const [viewportWidth, setViewportWidth] = useState(
  typeof window !== "undefined" ? window.innerWidth : 1024
);

useEffect(() => {
  const handleResize = () => setViewportWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const isMobileViewport = viewportWidth <= 640; // Tailwind sm


  const MIN_REEL = isMobileViewport ? 32 : 190;

  const MAX_REEL = typeof window !== "undefined" ? window.innerWidth : 1200;
  const MIN_DESC = 32;

  const [reelWidth, setReelWidth] = useState(280);
  

  const isMobileView = reelWidth <= 650;


const activeImages = isMobileView ? mobileImages : desktopImages;


  const onPointerDown = (e) => {
    startX.current = e.clientX;
    startWidth.current = reelWidth;

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
  };

  const onPointerMove = (e) => {
    const delta = e.clientX - startX.current;
    const next = startWidth.current + delta;

    const clamped = Math.min(
      MAX_REEL,
      Math.max(MIN_REEL, next)
    );

    setReelWidth(clamped);
  };

  const onPointerUp = () => {
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
  };

  const isExpanded = reelWidth > window.innerWidth * 0.85;

  const reelScrollRef = useRef(null);
const rafRef = useRef(null);
const pauseRef = useRef(false);
const resumeTimeout = useRef(null);


const SCROLL_SPEED = 3; // px per frame


const startAutoScroll = () => {
  if (rafRef.current) return;

  const step = () => {
    if (!pauseRef.current && reelScrollRef.current) {
      const el = reelScrollRef.current;
      el.scrollTop += SCROLL_SPEED;

      // infinite loop
      if (el.scrollTop >= el.scrollHeight / 2) {
        el.scrollTop = 0;
      }
    }
    rafRef.current = requestAnimationFrame(step);
  };

  rafRef.current = requestAnimationFrame(step);
};

const pauseAutoScroll = () => {
  pauseRef.current = true;
  clearTimeout(resumeTimeout.current);
};

const resumeAutoScrollWithDelay = () => {
  clearTimeout(resumeTimeout.current);
  resumeTimeout.current = setTimeout(() => {
    pauseRef.current = false;
  }, 800); // resume after idle
};

useEffect(() => {
  startAutoScroll();
  return () => cancelAnimationFrame(rafRef.current);
}, []);

  return (
    <div className="w-full sm:w-4/5 mx-auto h-[600px] flex overflow-hidden border rounded-xl shadow-lg">
      
      {/* REEL */}
      <div
        style={{ width: reelWidth }}
        className="relative transition-[width] duration-300 ease-out bg-white"
      >
    <div
  ref={reelScrollRef}
  className="h-full overflow-y-scroll scrollbar-hide"
  onWheel={() => {
    pauseAutoScroll();
    resumeAutoScrollWithDelay();
  }}
  onTouchStart={pauseAutoScroll}
  onTouchEnd={resumeAutoScrollWithDelay}
  onMouseEnter={pauseAutoScroll}
  onMouseLeave={resumeAutoScrollWithDelay}
>
  {[...activeImages, ...activeImages].map((src, i) => (
    <img
      key={`${src}-${i}`}
      src={src}
      alt=""
      className="w-full  rounded-lg object-cover"
    />
  ))}
</div>



        {/* Drag Handle */}
        <div
          onPointerDown={onPointerDown}
          className="absolute top-1/2 right-0 -translate-y-1/2 z-30
                     w-4 h-20 bg-black/40 backdrop-blur
                     cursor-col-resize touch-none
                     flex items-center justify-center"
        >
          <div className="w-1 h-10 bg-white/70 rounded-full" />
        </div>
      </div>

      {/* DESCRIPTION */}
      <div
        style={{
          width: `calc(100% - ${reelWidth}px)`,
          minWidth: MIN_DESC,
        }}
        className={`transition-all duration-300 ease-out
                    bg-[#1a1a1a] overflow-y-auto
                    ${isExpanded ? "opacity-60" : "opacity-100"}`}
      >
        <div
          className={`h-full p-6 transition-opacity duration-200
                     ${isExpanded ? "opacity-0" : "opacity-100"}`}
        >
          <h2 className="text-3xl text-center color-[#4e4e4e] font-semibold mb-2 text-white">{isMobileView?"Mobile View":"Desktop View"}</h2>
         <p className="text-gray-300 text-xl text-center mt-4">
  Interactive preview of a responsive Shopify storefront.
</p>

<div className="mt-6 text-center text-gray-400 text-xl space-y-1">
  <p>↔ Drag to resize</p>
  <p>⇅ Scroll to explore</p>
</div>

<p className="mt-6 mb-2 text-center text-ml text-gray-500">
  {isMobileView
    ? "Currently showing mobile UI."
    : "Currently showing desktop UI."}
</p>

<hr></hr>
<div className="mt-6">
  <p className="text-gray-300 text-sm text-center mb-6">
    End-to-end Shopify & web development services tailored for growth.
  </p>

  <ul className="space-y-4 t sm:text-xl  text-gray-300">
    <li className="flex gap-3">
      <span className="text-white">•</span>
      <span>
        <strong className="text-white">Theme Setup</strong> — Shopify theme installation, configuration, and store launch readiness.
      </span>
    </li>

    <li className="flex gap-3">
      <span className="text-white">•</span>
      <span>
        <strong className="text-white">Theme Customization</strong> — Custom sections, UI enhancements, and brand-aligned design.
      </span>
    </li>

    <li className="flex gap-3">
      <span className="text-white">•</span>
      <span>
        <strong className="text-white">Performance Optimization</strong> — Speed improvements, Lighthouse optimization, and clean code.
      </span>
    </li>

    <li className="flex gap-3">
      <span className="text-white">•</span>
      <span>
        <strong className="text-white">API Integration</strong> — Third-party services, custom APIs, and automation workflows.
      </span>
    </li>

    <li className="flex gap-3">
      <span className="text-white">•</span>
      <span>
        <strong className="text-white">From Scratch to Launch</strong> — Complete website development from idea to production.
      </span>
    </li>
  </ul>

  <p className="mt-6 text-center text-sm text-gray-500">
    Built for scalability, performance, and long-term maintainability.
  </p>
</div>

        </div>
      </div>

      {/* <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style> */}
    </div>
  );
}
