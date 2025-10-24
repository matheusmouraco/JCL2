import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/fc84499c4_BrickPavers1.png')] bg-cover bg-center opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-[#2DD881]/10 rounded-full"
              >
                <span className="text-[#2DD881] font-semibold text-sm tracking-wide">
                  PROFESSIONAL CONSTRUCTION SERVICES
                </span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Professional Construction &{' '}
                <span className="text-[#2DD881]">Maintenance Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                From post-construction cleaning to high-quality concrete finishes — JCL Pro Services delivers excellence, precision, and durability in every project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#2DD881] hover:bg-[#25C172] text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-[#2DD881]/20 hover:shadow-xl hover:shadow-[#2DD881]/30 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get a Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-xl border-2 border-gray-200 hover:border-[#2DD881] hover:text-[#2DD881] transition-all"
              >
                View Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#2DD881]/20 rounded-3xl blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#2DD881]/10 rounded-3xl blur-3xl" />
              
              {/* Mosaico de imagens */}
              <div className="relative grid grid-cols-2 gap-4">
                {/* Imagem grande à esquerda (Landscaping) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="row-span-2"
                >
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/228867553_AboutUs2.png"
                    alt="Landscaping Project"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                </motion.div>
                
                {/* Imagem superior direita (Brick Pavers) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/cd5ca007e_BrickPavers2.png"
                    alt="Brick Pavers"
                    className="w-full h-48 object-cover rounded-2xl shadow-2xl"
                  />
                </motion.div>
                
                {/* Imagem inferior direita (Concrete Finish) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/7ec6aae5b_ConcreteFinish2.png"
                    alt="Concrete Finish"
                    className="w-full h-48 object-cover rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}