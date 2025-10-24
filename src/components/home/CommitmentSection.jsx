import React from 'react';
import { motion } from 'framer-motion';

export default function CommitmentSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-[#2DD881]/10 rounded-full mb-4">
                <span className="text-[#2DD881] font-semibold text-sm">OUR COMMITMENT</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Commitment to Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At JCL Pro Services LLC, every project deserves total dedication. We provide personalized service, an experienced team, and tailored solutions to meet each client's unique needs.
              </p>
              
              <div className="bg-[#2DD881] text-white rounded-2xl p-8 shadow-xl">
                <p className="text-2xl font-bold">
                  Your project, our priority.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/912de6adf_OurCommitment.png"
              alt="Our Commitment"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#2DD881]/10 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#2DD881]">✓</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}