'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MessageSquareText, X } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // 👇 Replace this number with your actual one (without "+" for WhatsApp)
  const phoneNumber = '254740129444'; 

  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const callLink = `tel:+${phoneNumber}`;
  const smsLink = `sms:+${phoneNumber}`;

  return (
    <>
      {/* 🟢 Floating movable contact button */}
      <motion.button
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3}
        whileTap={{ scale: 0.9 }}
        className="fixed z-50 bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </motion.button>

      {/* 🔵 Side contact menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-2xl z-40 flex flex-col p-6 space-y-6 border-l border-gray-200"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-blue-600">Contact Us</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={callLink}
                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>

              <a
                href={smsLink}
                className="flex items-center gap-3 bg-gray-700 hover:bg-gray-800 text-white px-4 py-3 rounded-lg shadow-md transition-all"
              >
                <MessageSquareText className="w-5 h-5" />
                <span>Send SMS</span>
              </a>
            </div>

            <div className="mt-auto text-sm text-gray-500">
              &copy; 2025 Taifa Letu Education
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
