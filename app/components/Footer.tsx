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
    <footer className="bg-blue-950 text-gray-200 py-12 mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Column 1: About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Taifa Letu Education</h3>
          <p className="text-gray-300 leading-relaxed mb-5">
            Empowering young minds through holistic learning — blending Cambridge
            and CBC curriculums to prepare students for a bright, innovative future.
          </p>
          <div className="flex space-x-5 text-2xl">
            <Link href="https://facebook.com" className="hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link href="https://twitter.com" className="hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="https://instagram.com" className="hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-yellow-400 transition">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-yellow-400 transition">Programs</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Programs</h4>
          <ul className="space-y-3">
            <li><Link href="/kindergarten" className="hover:text-yellow-400 transition">Kindergarten</Link></li>
            <li><Link href="/primary" className="hover:text-yellow-400 transition">Primary</Link></li>
            <li><Link href="/secondary" className="hover:text-yellow-400 transition">Secondary</Link></li>
            <li><Link href="/homeschooling" className="hover:text-yellow-400 transition">Homeschooling</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact + Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-400 mt-1" />
              <span>Nairobi, Kenya<br />Westlands Area</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-yellow-400" />
              <a href="tel:+254740129444" className="hover:text-yellow-400 transition">+254 740 129 444</a>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400" />
              <a href="mailto:info@taifaletu.ac.ke" className="hover:text-yellow-400 transition">
                info@taifaletu.ac.ke
              </a>
            </li>
          </ul>

          {/* Newsletter Subscription */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md bg-blue-900 border border-blue-800 text-sm placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-semibold rounded-md text-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Taifa Letu Education. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-3">
          <Link href="/privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-yellow-400 transition">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-yellow-400 transition">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
