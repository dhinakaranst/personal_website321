
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  sections: Array<{ id: string; title: string }>;
  currentSection: number;
  onNavigate: (index: number) => void;
}

const Navigation = ({ sections, currentSection, onNavigate }: NavigationProps) => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 p-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="backdrop-blur-md bg-black/40 rounded-full p-3 border border-white/20 shadow-lg"
      >
        <div className="flex space-x-1">
          {sections.map((section, index) => (
            <Button
              key={section.id}
              onClick={() => onNavigate(index)}
              variant={currentSection === index ? "default" : "ghost"}
              size="sm"
              className={`relative transition-all duration-300 ${
                currentSection === index
                  ? "bg-white text-black minimal-glow"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {section.title}
              {currentSection === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-md -z-10"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Button>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navigation;
