import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)]/10 via-[var(--neon-violet)]/10 to-[var(--neon-teal)]/10"></div>
      
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center px-6 sm:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[var(--electric-blue)] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to Automate Your Workflow?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Join thousands of users who have transformed their productivity with Taskie's AI-powered automation.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-violet)] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-[var(--electric-blue)]/25 transition-all transform hover:scale-105"
            size="lg"
          >
            <Rocket className="mr-2 w-5 h-5" />
            Start Free Trial
          </Button>
          
          <Button 
            variant="outline"
            className="glass-morphism px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all border border-white/20 bg-transparent"
            size="lg"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Schedule Demo
          </Button>
        </motion.div>
        
        <motion.p 
          className="text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.p>
      </motion.div>
    </section>
  );
}
