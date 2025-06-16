import { motion } from "framer-motion";
import { CheckCircle, Plug, Sparkles } from "lucide-react";
import { SiGmail, SiNotion, SiSlack, SiWhatsapp } from "react-icons/si";

const steps = [
  {
    icon: CheckCircle,
    title: "Select Workflow",
    description: "Choose from pre-built automation templates or create custom workflows tailored to your needs.",
    color: "from-[var(--electric-blue)] to-[var(--neon-teal)]",
    textColor: "text-[var(--electric-blue)]",
    delay: 0,
    features: ["Email Summarizer", "Meeting Notes"]
  },
  {
    icon: Plug,
    title: "Connect Apps",
    description: "Seamlessly integrate your favorite productivity apps with secure OAuth connections.",
    color: "from-[var(--neon-violet)] to-[var(--neon-teal)]",
    textColor: "text-[var(--neon-violet)]",
    delay: 1,
    apps: [SiGmail, SiNotion, SiSlack, SiWhatsapp]
  },
  {
    icon: Sparkles,
    title: "Let Taskie Automate",
    description: "Sit back and watch as Taskie handles your repetitive tasks intelligently and efficiently.",
    color: "from-[var(--neon-teal)] to-[var(--neon-green)]",
    textColor: "text-[var(--neon-teal)]",
    delay: 2,
    stats: { tasks: 247, progress: 75 }
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative" id="features">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-violet)] bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Transform your workflow in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--electric-blue)] to-transparent transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-8 rounded-2xl text-center relative z-10 glow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: step.delay
                }}
              >
                <step.icon className="text-2xl text-white w-8 h-8" />
              </motion.div>
              
              <h3 className={`text-2xl font-bold mb-4 ${step.textColor}`}>
                {step.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                {step.description}
              </p>
              
              {/* Step-specific content */}
              {step.features && (
                <div className="p-4 bg-[var(--dark-card)] rounded-lg">
                  <div className="text-sm text-slate-400 mb-2">Popular Templates:</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {step.features.map((feature, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs ${
                          i === 0 
                            ? 'bg-[var(--electric-blue)]/20 text-[var(--electric-blue)]'
                            : 'bg-[var(--neon-violet)]/20 text-[var(--neon-violet)]'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {step.apps && (
                <div className="flex justify-center space-x-4">
                  {step.apps.map((AppIcon, i) => (
                    <motion.div
                      key={i}
                      className={`w-10 h-10 glass-morphism rounded-lg flex items-center justify-center border ${
                        i === 0 ? 'border-red-500/30' :
                        i === 1 ? 'border-slate-400/30' :
                        i === 2 ? 'border-purple-500/30' :
                        'border-green-500/30'
                      }`}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <AppIcon className={`${
                        i === 0 ? 'text-red-500' :
                        i === 1 ? 'text-slate-400' :
                        i === 2 ? 'text-purple-500' :
                        'text-green-500'
                      } w-5 h-5`} />
                    </motion.div>
                  ))}
                </div>
              )}
              
              {step.stats && (
                <div className="p-4 bg-[var(--dark-card)] rounded-lg">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-400">Tasks Automated Today:</span>
                    <span className="text-[var(--neon-green)] font-bold">{step.stats.tasks}</span>
                  </div>
                  <div className="bg-slate-700 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-[var(--neon-teal)] to-[var(--neon-green)] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${step.stats.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
