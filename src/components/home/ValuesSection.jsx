import React from 'react';
import { Gem, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Gem,
    title: "Aesthetic Durability",
    description: "Beautiful designs that stand the test of time"
  },
  {
    icon: Target,
    title: "Excellence in Execution",
    description: "Precision and perfection in every detail"
  },
  {
    icon: Heart,
    title: "Commitment to the Client",
    description: "Your satisfaction is our ultimate goal"
  }
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#2DD881]/10 rounded-full mb-4">
            <span className="text-[#2DD881] font-semibold text-sm">OUR VALUES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What Drives Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-[#2DD881]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2DD881] transition-colors">
                <value.icon className="w-10 h-10 text-[#2DD881] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}