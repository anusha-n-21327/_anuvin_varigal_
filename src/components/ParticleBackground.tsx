"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { BookOpen, Pen, Droplets } from "lucide-react";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log("Particles container loaded", container);
  }, []);

  const iconMap = {
    book: BookOpen,
    pen: Pen,
    droplets: Droplets,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -2, // Ensure it's behind other content
        },
        background: {
          color: {
            value: "transparent", // Use transparent background as the body already has a gradient
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // White color for the icons
          },
          links: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5, // Slower movement for a gentle float
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20, // Number of floating icons
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "image",
            options: {
              image: [
                {
                  src: "data:image/svg+xml;base64," + btoa(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
                  ),
                  width: 24,
                  height: 24,
                },
                {
                  src: "data:image/svg+xml;base64," + btoa(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l7.5 1.5L18 13z"/></svg>`
                  ),
                  width: 24,
                  height: 24,
                },
                {
                  src: "data:image/svg+xml;base64," + btoa(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets"><path d="M7.6 8.5C6.4 10.2 6 12.2 6 14c0 2.7 2.2 5 5 5s5-2.3 5-5c0-1.8-.4-3.5-1.7-5L12 2L7.6 8.5z"/><path d="M2.6 12.5C1.4 14.2 1 16.2 1 18c0 2.7 2.2 5 5 5s5-2.3 5-5c0-1.8-.4-3.5-1.7-5L7 6L2.6 12.5z"/><path d="M17.6 4.5C16.4 6.2 16 8.2 16 10c0 2.7 2.2 5 5 5s5-2.3 5-5c0-1.8-.4-3.5-1.7-5L22 0L17.6 4.5z"/></svg>`
                  ),
                  width: 24,
                  height: 24,
                },
              ],
            },
          },
          size: {
            value: { min: 20, max: 40 }, // Random size for variety
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;