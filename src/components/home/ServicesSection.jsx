import React from 'react';
import { Sparkles, Hammer, Grid, Leaf, Wallpaper } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Sparkles,
    title: "Post-Construction Cleaning",
    description: "Detailed cleaning services that leave your property spotless after construction or renovation projects.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/b48e3f68f_Post-ConstructionCleaning1.png"
  },
  {
    icon: Hammer,
    title: "Concrete Finish",
    description: "Strong, durable, and polished concrete finishes designed to ensure functionality and long-term performance for driveways, walkways, and backyards.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/9de58aa40_ConcreteFinish1.png"
  },
  {
    icon: Grid,
    title: "Brick Pavers",
    description: "Installation and maintenance of driveways, patios, and outdoor spaces — combining aesthetic appeal with lasting durability.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/513feedf5_BrickPavers1.png"
  },
  {
    icon: Leaf,
    title: "Landscaping",
    description: "Design and maintenance of outdoor environments to enhance curb appeal and property value.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/4edbd55ce_Landscaping1.png"
  },
  {
    icon: Wallpaper,
    title: "Wallpaper Installation",
    description: "Professional application that transforms interior spaces with style, sophistication, and personality.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/56600e714_WallpaperInstallation1.png"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#2DD881]/10 rounded-full mb-4">
            <span className="text-[#2DD881] font-semibold text-sm">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and maintenance solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-[#2DD881] rounded-xl flex items-center justify-center mb-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}