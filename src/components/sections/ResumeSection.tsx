import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye, Trophy, Code, Users } from "lucide-react";

interface ResumeSectionProps {
  onNavigate: (index: number) => void;
}

const ResumeSection = ({ onNavigate }: ResumeSectionProps) => {
  const handleDownload = () => {
    try {
      const resumeUrl = "https://drive.google.com/uc?export=download&id=1Nw3zcQuu0xu2yff1hS-sHUOpjT8gGXKY";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Dhinakaran_Resume.pdf";
      link.click();
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Failed to download resume. Please try again.");
    }
  };

  const handlePreview = () => {
    window.open("https://drive.google.com/file/d/1F765-PlveBHYKzouI2HSKQFXwOFvsQjz/view?usp=sharing", "_blank");
  };

  return (
    <div className="min-h-screen py-20 px-6 relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-slate-800/30 via-blue-900/30 to-slate-900/30"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            Resume
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Final-year Computer Science student (K.S.Rangasamy College of Technology, 2022-2026, CGPA: 7.9/10). Strong in algorithms, systems, and backend. Experienced in scalable full-stack apps, containers, and open-source. Eager to solve real-world engineering problems at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-800/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Resume</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Download my detailed resume to learn more about my professional experience,
              technical skills, and achievements in software development.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={handleDownload}
                className="bg-gradient-to-r from-slate-700 to-blue-800 hover:from-slate-600 hover:to-blue-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button
                onClick={handlePreview}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Education & Highlights</h2>
            </div>
            <ul className="space-y-4 text-gray-300 text-left">
              <li><b>Education:</b> K.S.Rangasamy College of Technology, B.E in Computer Science and Engineering (2022-2026), CGPA: 7.9/10</li>
              <li><b>Certifications:</b> Infosys Springboard – Node.js + Express Certification; Accenture Go for Gold Contest – iAspire Gold Level, January 2025</li>
              <li><b>Open Source:</b> 12+ PRs to Kestra, Spiderly, Open Nest Africa (UI, bugfixes, merged PRs)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
