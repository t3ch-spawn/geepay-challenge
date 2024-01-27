import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

export default function Loader() {
  const [progressPercent, setProgressPercent] = useState(0);
  const hasLoaded = useRef(null);
  const [loadedState, setLoadedState] = useState(false);
  const { rive, RiveComponent } = useRive({
    src: "/loader.riv",
    stateMachines: "gpay-loader",
    autoplay: true,
    onStateChange: (e) => {
      console.log(e);

      if (e.data[0] == "finished") {
        setTimeout(() => {
          gsap
            .timeline()
            .to(".rive-component", {
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

                // Animation for the stats section
                gsap.fromTo(
                  ".path",
                  {
                    strokeDashoffset: 320,
                  },
                  {
                    scrollTrigger: {
                      trigger: ".allStats_container",
                      start: "top 50%",
                    },
                    strokeDashoffset: 0,
                    duration: 1,
                  }
                );

                // Animation for orders section
                gsap.to(".order-item", {
                  scrollTrigger: {
                    trigger: ".orders_container",
                    start: "top 85%",
                  },
                  y: "0px",
                  opacity: 1,
                  duration: 1,
                  ease: "power3.inOut",
                });

                // Animation for platforms section
                gsap.to(".platform-bar", {
                  scrollTrigger: {
                    trigger: ".platforms_container",
                    start: "top 85%",
                  },
                  scaleX: 1,
                  duration: 1,
                  ease: "power3.inOut",
                });
              },
            });
        }, 1300);
      }
    },
  });

  hasLoaded.current = useStateMachineInput(rive, "gpay-loader", "hasLoaded");

  useEffect(() => {
    const queue = new createjs.LoadQueue(false);
    queue.loadFile({ id: 1, src: "../assets/public/loader.riv" });
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
      console.log(e);
      const fill = document.querySelector(".loader-fill");
      if (hasLoaded.current) {
        hasLoaded.current.value = false;
      }
      fill.style.width = `${e.progress * 100}%`;
      setProgressPercent(e.progress * 100);
    });

    // Gsap code
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".graph-bar", { scaleY: 0 });
    gsap.set(".june-shape", { y: "-20px", opacity: 0 });
    gsap.set(".order-item", { y: "100px", opacity: 0 });
    gsap.set(".platform-bar", { scaleX: 0 });
    queue.on("complete", () => {
      hasLoaded.current.value = true;
      setLoadedState(true);
    });
  }, []);

  return (
    <>
      <div className="loader-overlay fixed top-0 left-0 h-full w-full z-[60] bg-white flex justify-center items-center origin-top">
        <RiveComponent className="rive-component w-full max-w-[200px] mx-auto h-full" />
        {/* Loading progress bar */}
        <div
          className={`absolute top-[80%] left-[50%] translate-x-[-50%] w-full max-w-[280px] flex flex-col items-center gap-4`}
        >
          <div
            className={`${
              loadedState ? "active" : ""
            } w-full h-[4px] border-[#34CAA5] border-[1px] loading-bar`}
          >
            <div className="bg-[#34CAA5] w-[0%] duration-300 h-full loader-fill"></div>
          </div>

          <p
            className={`${
              loadedState ? "opacity-0" : "opacity-1"
            } duration-200 text-sm`}
          >
            {Math.floor(progressPercent)}%
          </p>
        </div>
      </div>

      <div className="loader-overlay fixed bg-[#34CAA5] h-full w-full top-0 left-0 z-[50] origin-bottom"></div>
    </>
  );
}
