import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ProfilePhoto from "@/components/ProfilePhoto";
import VariableProximity from "@/components/VariableProximity";
import { useRef } from "react";

interface HeroSectionProps {
  onNavigate: (index: number) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative pt-24" ref={containerRef}>
      {/* Minimal Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-900/20"></div>
      </div>
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/5"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: Math.random() * 0.3 + 0.1,
              opacity: 0.05 + Math.random() * 0.1,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto z-10 px-4 min-h-[60vh] gap-8 mt-24">
        {/* Left side - empty for balance */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 max-w-md flex items-center justify-center order-2 lg:order-1"
        >
          {/* Empty space for visual balance */}
        </motion.div>

        {/* Center - Main content */}
        <div className="flex-2 text-center max-w-4xl mx-8 flex flex-col justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              <VariableProximity
                label="DHINAKARAN T"
                className="text-white"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={150}
                falloff="exponential"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-400">
              Final-year Computer Science Student & Full Stack Developer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Passionate about creating innovative web solutions and bringing ideas to life through code.
              Specialized in modern web technologies and always eager to learn new skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => onNavigate(1)}
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg minimal-glow transition-all duration-300"
                >
                  Hire Me Now
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => onNavigate(3)}
                  variant="outline"
                  size="lg"
                  className="border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg transition-all duration-300"
                >
                  View Projects
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right side - spacer for balance */}
        <div className="flex-1 max-w-md flex items-center justify-center order-3 lg:order-3">
          {/* Empty space for visual balance on desktop */}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => onNavigate(1)}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
