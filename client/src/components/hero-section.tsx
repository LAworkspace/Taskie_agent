import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Rocket, Brain } from "lucide-react";
import { SiGmail, SiNotion, SiSlack, SiWhatsapp } from "react-icons/si";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden gradient-bg flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--electric-blue)]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-violet)]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-[var(--neon-teal)]/20 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[var(--electric-blue)] to-[var(--neon-violet)] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your AI assistant for seamless automation
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connect. Automate. Breathe.
          </motion.p>
        </motion.div>

        {/* AI Orb with Orbiting Apps */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="orbit-container">
            {/* Central AI Orb */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-violet)] rounded-full flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(0, 212, 255, 0.3)",
                    "0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.4)",
                    "0 0 20px rgba(0, 212, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Brain className="text-2xl text-white w-8 h-8" />
              </motion.div>
            </motion.div>
            
            {/* Orbiting App Icons */}
            <motion.div 
              className="orbit-item"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center border border-red-500/30 -translate-x-6 -translate-y-6">
                <SiGmail className="text-red-500 w-5 h-5" />
              </div>
            </motion.div>
            <motion.div 
              className="orbit-item"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: -2.5 }}
            >
              <div className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center border border-slate-400/30 -translate-x-6 -translate-y-6">
                <SiNotion className="text-slate-400 w-5 h-5" />
              </div>
            </motion.div>
            <motion.div 
              className="orbit-item"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: -5 }}
            >
              <div className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center border border-purple-500/30 -translate-x-6 -translate-y-6">
                <SiSlack className="text-purple-500 w-5 h-5" />
              </div>
            </motion.div>
            <motion.div 
              className="orbit-item"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: -7.5 }}
            >
              <div className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center border border-green-500/30 -translate-x-6 -translate-y-6">
                <SiWhatsapp className="text-green-500 w-5 h-5" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            className="bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-teal)] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[var(--electric-blue)]/25 transition-all transform hover:scale-105 glow-hover"
            size="lg"
          >
            <Rocket className="mr-2 w-5 h-5" />
            Start Automating
          </Button>
          <Button 
            variant="outline"
            className="glass-morphism px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all border border-white/20 bg-transparent"
            size="lg"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
