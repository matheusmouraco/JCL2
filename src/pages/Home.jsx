
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Globe, CheckCircle, Sparkles, Building2, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import ServicesSection from '../components/home/ServicesSection';
import CommitmentSection from '../components/home/CommitmentSection';
import ValuesSection from '../components/home/ValuesSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_685a34f96bd67df36a416c78/6253b2608_PHOTO-2025-10-13-10-51-56.jpg" 
                alt="JCL Pro Services" 
                className="h-12 w-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-6"
            >
              <a href="#about" className="text-gray-700 hover:text-[#2DD881] transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#2DD881] transition-colors font-medium">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-[#2DD881] transition-colors font-medium">Contact</a>
              <Button className="bg-[#2DD881] hover:bg-[#25C172] text-white px-6">
                <Phone className="w-4 h-4 mr-2" />
                (689) 349-2332
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden"
            >
              <Button size="sm" className="bg-[#2DD881] hover:bg-[#25C172] text-white">
                <Phone className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <ServicesSection />
        <CommitmentSection />
        <ValuesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fbd42edf43dcdb09326dc6/127325e10_2.png" 
                alt="JCL Pro Services" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Building with precision.<br />Delivering with integrity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#2DD881]" />
                  <span>(689) 349-2332</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#2DD881]" />
                  <span>contact@jclproservices.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#2DD881]" />
                  <span>Florida, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#2DD881]" />
                  <span>www.jclproservices.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Post-Construction Cleaning</li>
                <li>Concrete Finish</li>
                <li>Brick Pavers</li>
                <li>Landscaping</li>
                <li>Wallpaper Installation</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 JCL Pro Services LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
