import React from 'react';
import { Briefcase, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description: "We have successfully completed projects for Canadian government agencies and large-scale developments."
  },
  {
    icon: Users,
    title: "Specialized Team",
    description: "Our trained professionals are committed to safety, quality, and precision in every task."
  },
  {
    icon: Award,
    title: "Certified & Durable Materials",
    description: "We use high-performance products that meet certification standards and are engineered for Florida's demanding climate."
  },
  {
    icon: Clock,
    title: "Reliability & Transparency",
    description: "We ensure on-time delivery and clear communication from start to finish."
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#2DD881]/10 rounded-full mb-4">
            <span className="text-[#2DD881] font-semibold text-sm">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose JCL Pro Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by homeowners and businesses across Florida for our commitment to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2DD881]/30 group"
            >
              <div className="w-16 h-16 bg-[#2DD881]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2DD881] transition-colors">
                <reason.icon className="w-8 h-8 text-[#2DD881] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}