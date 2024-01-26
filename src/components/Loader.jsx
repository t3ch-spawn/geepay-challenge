import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Loader() {
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const queue = new createjs.LoadQueue(false);
    queue.loadFile({
      src: "../assets/arrow-down.svg",
      type: createjs.Types.IMAGE,
    });
    queue.loadFile({
      src: "../assets/calendar.svg",
      type: createjs.Types.IMAGE,
    });
    queue.loadFile({
      src: "../assets/category.svg",
      type: createjs.Types.IMAGE,
    });
    queue.loadFile({
      src: "../assets/cooper.svg",
      type: createjs.Types.IMAGE,
    });
    queue.loadFile({
      src: "../assets/corey.svg",
      type: createjs.Types.IMAGE,
    });
    queue.loadFile({
      src: "../assets/discount-shape.svg",
      type: createjs.Types.IMAGE,
    });
    queue.loadFile({
      src: "../assets/Justin.svg",
      type: createjs.Types.IMAGE,
    });
    queue.loadFile({
      src: "../assets/jaydon.svg",
      type: createjs.Types.IMAGE,
    });
    queue.loadFile({
      src: "../assets/marcus.svg",
      type: createjs.Types.IMAGE,
    });
    queue.loadFile({
      src: "../assets/phillip.svg",
      type: createjs.Types.IMAGE,
    });
    queue.loadFile({
      src: "../assets/graph-lines.png",
      type: createjs.Types.IMAGE,
    });

    queue.on("progress", (e) => {
      const fill = document.querySelector(".loader-fill");
      fill.style.width = `${e.progress * 100}%`;
      setProgressPercent(e.progress * 100);
    });

    // Gsap code
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".graph-bar", { scaleY: 0 });
    gsap.set(".june-shape", { y: "-20px", opacity: 0 });
    queue.on("complete", () => {
      gsap
        .timeline()
        .to(".loading-bar", {
          opacity: 0,
          pointerEvents: "none",
        })
        .to(".loader-overlay", {
          scaleY: 0,
          stagger: 0.5,
          onComplete: () => {
            // Animation for graph section
            gsap.to(
              ".graph-bar",

              {
                scaleY: 1,
                duration: 1,
                ease: "power3.inOut",
              }
            );

            gsap.to(".june-shape", {
              opacity: 1,
              y: 0,
              delay: 0.8,
            });
          },
        });
    });
  }, []);

  return (
    <>
      <div className="loader-overlay fixed top-0 left-0 h-full w-full z-[60] bg-white flex justify-center items-center origin-top">
        {/* Loading progress bar */}
        <div className="absolute left-[50%] translate-x-[-50%] w-full max-w-[280px] flex flex-col items-center gap-4 loading-bar">
          <div className="w-full h-[4px] border-[#34CAA5] border-[1px] ">
            <div className="bg-[#34CAA5] w-[0%] duration-300 h-full loader-fill"></div>
          </div>

          <p className="text-sm">{Math.floor(progressPercent)}%</p>
        </div>
      </div>

      <div className="loader-overlay fixed bg-[#34CAA5] h-full w-full top-0 left-0 z-[50] origin-bottom"></div>
    </>
  );
}
