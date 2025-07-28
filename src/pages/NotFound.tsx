import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import FuzzyText from "@/components/FuzzyText";
import ParticlesBackground from "@/components/ParticlesBackground";

const NotFound = () => {
  const location = useLocation();
  const [hoverIntensity, setHoverIntensity] = useState(0.3);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen gradient-background overflow-hidden flex items-center justify-center">
      <ParticlesBackground />
      
      {/* Minimal background */}
      <div className="fixed inset-0 gradient-blur -z-10" />
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-gray-800/30 via-gray-700/20 to-gray-800/30"></div>
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/5"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              scale: Math.random() * 0.3 + 0.1,
              opacity: 0.05 + Math.random() * 0.1,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* 404 Text with FuzzyText */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center items-center"
          onMouseEnter={() => setHoverIntensity(0.8)}
          onMouseLeave={() => setHoverIntensity(0.3)}
        >
          <FuzzyText 
            baseIntensity={0.2} 
            hoverIntensity={hoverIntensity} 
            enableHover={true}
            fontSize="clamp(4rem, 15vw, 12rem)"
            fontWeight={900}
            color="#ffffff"
          >
            404
          </FuzzyText>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 subtle-text-glow text-white">
            Page Not Found
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the digital void.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            But don't worry, let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg minimal-glow transition-all duration-300"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>

        {/* Error Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl max-w-md mx-auto"
        >
          <h3 className="text-white font-semibold mb-2">Error Details</h3>
          <p className="text-gray-400 text-sm">
            Requested URL: <span className="text-white font-mono">{location.pathname}</span>
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Error Code: <span className="text-red-400 font-mono">404</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
