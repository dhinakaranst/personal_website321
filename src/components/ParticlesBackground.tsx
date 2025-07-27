
import { useCallback } from 'react';
import { Particles } from '@tsparticles/react';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: unknown) => {
    console.log('Particles loaded', container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed inset-0 -z-20"
      options={{
        background: {
          color: {
            value: "transparent"
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: { enable: true }
          },
          modes: {
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: ["#ffffff", "#f5f5f5", "#e5e5e5"]
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 0.5,
            straight: false
          },
          number: {
            density: {
              enable: true
            },
            value: 50
          },
          opacity: {
            value: 0.2
          },
          shape: {
            type: "circle"
          },
          size: {
            value: {
              min: 1,
              max: 3
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;
