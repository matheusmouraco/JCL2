import React from 'react';
import { CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/12d449122_AboutUs1.png"
                alt="About Project 1"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/f7e3cf668_AboutUs2.png"
                alt="About Project 2"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/49cbcc030_AboutUs3.png"
                alt="About Project 3"
                className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-8"
              />
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/dece3831e_WhyChooseJCL.png"
                alt="About Project 4"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-[#2DD881]/10 rounded-full mb-4">
                <span className="text-[#2DD881] font-semibold text-sm">ABOUT US</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About JCL Pro Services LLC
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At JCL Pro Services LLC, we bring projects to life with quality, commitment, and attention to detail. Our mission is to deliver complete construction and maintenance solutions for homes and businesses across Florida — always focusing on excellence, punctuality, and client satisfaction.
              </p>
            </div>

            <div className="bg-[#2DD881]/5 rounded-2xl p-8 border border-[#2DD881]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2DD881] rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Precision and Excellence in Every Service
                </h3>
              </div>
              <p className="text-gray-600">
                We pride ourselves on delivering exceptional results that exceed expectations, backed by years of expertise and a commitment to quality craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#2DD881] flex-shrink-0" />
                <span className="text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#2DD881] flex-shrink-0" />
                <span className="text-gray-700">Expert Team</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#2DD881] flex-shrink-0" />
                <span className="text-gray-700">On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#2DD881] flex-shrink-0" />
                <span className="text-gray-700">Quality Materials</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}