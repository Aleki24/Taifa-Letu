'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <section className="bg-linear-to-br from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20 px-6 sm:px-10 bg-blue-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Have questions about homeschooling, tuition, or enrollment?  
          We’d love to hear from you!
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 text-lg">
              Send Message
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Reach out to our support team for assistance or information
              about our homeschool programs, tuition plans, or curriculum options.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-500" size={22} />
              <span className="text-gray-800">Nairobi, Kenya</span>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="text-blue-500" size={22} />
              <span className="text-gray-800">+254 740129444</span>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="text-blue-500" size={22} />
              <span className="text-gray-800">info@taifaletueducation.com</span>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.859277730198!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e9d9e2b3ab%3A0xadc7f9787a2a86c5!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1687714520875!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-[300px]"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
