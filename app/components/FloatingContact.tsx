'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MessageSquareText, X } from 'lucide-react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Replace this number with your actual one (without "+" for WhatsApp)
  const phoneNumber = '254740129444';

  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const callLink = `tel:+${phoneNumber}`;
  const smsLink = `sms:+${phoneNumber}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        {/* Floating trigger button */}
        <PopoverTrigger asChild>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg focus:outline-none transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
          </motion.button>
        </PopoverTrigger>

        {/* Popover content */}
        <PopoverContent
          align="end"
          sideOffset={10}
          className="w-64 p-4 bg-white shadow-xl border border-gray-200 rounded-2xl"
        >
          <h2 className="text-lg font-bold text-blue-700 mb-4">Contact Us</h2>

          <div className="flex flex-col gap-3">
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-start gap-3"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </Button>

            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-start gap-3"
            >
              <a href={callLink}>
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </Button>

            <Button
              asChild
              className="bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-start gap-3"
            >
              <a href={smsLink}>
                <MessageSquareText className="w-5 h-5" />
                <span>Send SMS</span>
              </a>
            </Button>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            &copy; 2025 Taifa Letu Education
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
