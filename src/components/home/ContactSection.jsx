import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#2DD881]/10 rounded-full mb-4">
            <span className="text-[#2DD881] font-semibold text-sm">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something Exceptional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch today to discuss your project or request a personalized quote. Our team is ready to deliver the quality and reliability your property deserves.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#2DD881]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-[#2DD881]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2 text-lg">Phone</div>
                  <a href="tel:6893492332" className="text-gray-600 hover:text-[#2DD881] transition-colors text-xl">
                    (689) 349-2332
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#2DD881]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-[#2DD881]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2 text-lg">Email</div>
                  <a href="mailto:contact@jclproservices.com" className="text-gray-600 hover:text-[#2DD881] transition-colors break-all">
                    contact@jclproservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#2DD881]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-[#2DD881]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2 text-lg">Location</div>
                  <div className="text-gray-600 text-xl">Florida, USA</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#2DD881]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-7 h-7 text-[#2DD881]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2 text-lg">Website</div>
                  <a href="https://www.jclproservices.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2DD881] transition-colors">
                    www.jclproservices.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="lg"
                className="bg-[#2DD881] hover:bg-[#25C172] text-white text-lg px-12 py-6 rounded-xl shadow-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                Request Your Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}