import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SiGmail, SiNotion, SiSlack, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

const integrations = [
  {
    name: "Gmail",
    category: "Email Management",
    icon: SiGmail,
    color: "text-red-500",
    bgColor: "bg-red-500/20",
    borderColor: "border-red-500/30",
    hoverBg: "group-hover:bg-red-500/30",
    description: "Auto-categorize emails, generate smart replies, and create follow-up reminders.",
    features: [
      "Smart Email Sorting",
      "Auto-Response Generation", 
      "Priority Inbox Management"
    ]
  },
  {
    name: "Notion",
    category: "Knowledge Base",
    icon: SiNotion,
    color: "text-slate-400",
    bgColor: "bg-slate-400/20",
    borderColor: "border-slate-400/30",
    hoverBg: "group-hover:bg-slate-400/30",
    description: "Sync meeting notes, create automated templates, and manage project databases.",
    features: [
      "Meeting Notes Sync",
      "Template Generation",
      "Database Automation"
    ]
  },
  {
    name: "Slack",
    category: "Team Communication",
    icon: SiSlack,
    color: "text-purple-500",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
    hoverBg: "group-hover:bg-purple-500/30",
    description: "Schedule messages, create automated status updates, and summarize channel activity.",
    features: [
      "Message Scheduling",
      "Status Automation",
      "Channel Summaries"
    ]
  },
  {
    name: "WhatsApp",
    category: "Messaging",
    icon: SiWhatsapp,
    color: "text-green-500",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30",
    hoverBg: "group-hover:bg-green-500/30",
    description: "Auto-reply to messages, schedule broadcasts, and organize group chats efficiently.",
    features: [
      "Smart Auto-Replies",
      "Broadcast Scheduling",
      "Group Management"
    ]
  }
];

const stats = [
  { value: "50+", label: "Integrations", color: "text-[var(--electric-blue)]" },
  { value: "10M+", label: "Tasks Automated", color: "text-[var(--neon-violet)]" },
  { value: "99.9%", label: "Uptime", color: "text-[var(--neon-teal)]" },
  { value: "4.9/5", label: "User Rating", color: "text-[var(--neon-green)]" }
];

export default function AppIntegrations() {
  const [activeView, setActiveView] = useState("apps");

  return (
    <section className="py-24 relative" id="integrations">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--neon-violet)] to-[var(--neon-teal)] bg-clip-text text-transparent">
            App Integrations
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Connect with your favorite tools and supercharge your productivity
          </p>
          
          {/* Toggle View */}
          <div className="flex justify-center">
            <div className="glass-morphism rounded-full p-1 flex">
              <Button
                variant={activeView === "apps" ? "default" : "ghost"}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeView === "apps"
                    ? "bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-violet)] text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                onClick={() => setActiveView("apps")}
              >
                By App
              </Button>
              <Button
                variant={activeView === "usecase" ? "default" : "ghost"}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeView === "usecase"
                    ? "bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-violet)] text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                onClick={() => setActiveView("usecase")}
              >
                By Use Case
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              className="glass-morphism p-6 rounded-2xl glow-hover transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${integration.bgColor} rounded-xl flex items-center justify-center mr-4 transition-colors ${integration.hoverBg}`}>
                  <integration.icon className={`${integration.color} text-xl w-6 h-6`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                  <p className="text-sm text-slate-400">{integration.category}</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm mb-4">
                {integration.description}
              </p>
              
              <div className="space-y-2">
                {integration.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-xs text-slate-400">
                    <CheckCircle className="text-[var(--neon-green)] mr-2 w-3 h-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className={`text-3xl font-bold mb-2 ${stat.color}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
