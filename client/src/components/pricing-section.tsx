import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for individuals getting started with automation",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    features: [
      "5 automated workflows",
      "Basic app integrations",
      "Email support",
      "1GB storage"
    ]
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Ideal for professionals and small teams",
    icon: Crown,
    color: "from-purple-500 to-pink-500", 
    borderColor: "border-purple-500/30",
    popular: true,
    features: [
      "Unlimited workflows",
      "All app integrations",
      "Priority support",
      "10GB storage",
      "Advanced analytics",
      "Custom templates"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with advanced needs",
    icon: Rocket,
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/30",
    features: [
      "Unlimited everything",
      "Custom integrations",
      "Dedicated support",
      "Unlimited storage",
      "Advanced security",
      "SLA guarantee",
      "Custom training"
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 relative" id="pricing">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Start free and scale as you grow. All plans include core automation features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`glass-morphism p-8 rounded-2xl relative transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-purple-500/50' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="text-2xl text-white w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <Check className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all`}
                onClick={() => window.open('https://forms.gle/example', '_blank')}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}