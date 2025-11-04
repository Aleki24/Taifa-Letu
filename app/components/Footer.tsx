'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-blue-400 text-gray-200">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <Image
              src="/logo.png"
              alt="Taifa Letu Education"
              width={160}
              height={60}
              className="mb-4 rounded-full bg-white p-2"
            />
            <p className="text-sm leading-relaxed mb-5">
              Taifa Letu Education provides research-based, personalized tutoring services both in-person and virtually — nurturing academic excellence and confidence for life.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="hover:text-blue-300 transition-colors">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-blue-300 transition-colors">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-blue-300 transition-colors">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-blue-300 text-sm transition-colors">Home</Link></li>
              <li><Link href="/approach" className="hover:text-blue-300 text-sm transition-colors">Our Approach</Link></li>
              <li><Link href="/parents" className="hover:text-blue-300 text-sm transition-colors">For Parents</Link></li>
              <li><Link href="/special-education" className="hover:text-blue-300 text-sm transition-colors">Special Education</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300 text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><Link href="/curriculum" className="hover:text-blue-300 text-sm transition-colors">Curriculum</Link></li>
              <li><Link href="/values" className="hover:text-blue-300 text-sm transition-colors">Efficacy & Values</Link></li>
              <li><Link href="/social-learning" className="hover:text-blue-300 text-sm transition-colors">Social & Emotional Learning</Link></li>
              <li><Link href="/intellectual" className="hover:text-blue-300 text-sm transition-colors">Intellectual Disabilities</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-300 mt-1" />
                <span className="text-sm">Nairobi, Kenya<br />Westlands Area</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-blue-300" />
                <a href="tel:+254700000000" className="text-sm hover:text-blue-300 transition-colors">+254 740129444</a>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-300" />
                <a href="mailto:info@taifaletukenya.com" className="text-sm hover:text-blue-300 transition-colors">info@taifaletukenya.com</a>
              </li>
            </ul>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md bg-blue-600 border border-blue-700 text-sm placeholder-gray-300 focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Layout Divider */}
      <div className="md:hidden border-t border-blue-400 my-4"></div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-500 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} Taifa Letu Education. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-blue-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-300">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-blue-300">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
