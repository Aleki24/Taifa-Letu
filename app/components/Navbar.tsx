'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        scrolled ? 'bg-gray-100 shadow-md h-16' : 'bg-transparent h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 transition-all duration-300">
          <Image
            src="/logo.png"
            alt="Taifa Letu Education"
            width={scrolled ? 40 : 50}
            height={scrolled ? 40 : 50}
            className="rounded-full transition-all duration-300"
          />
          <span
            className={`font-bold transition-all duration-300 ${
              scrolled ? 'text-sm text-gray-800' : 'text-lg text-gray-900'
            }`}
          >
            Taifa Letu Homeschool and Tuition
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-blue-500'
                  : 'text-gray-900 hover:text-blue-500'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Button
            size="sm"
            className={`rounded-full px-5 py-2 transition-all duration-300 ${
              scrolled
                ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm'
                : 'bg-blue-400 hover:bg-blue-500 text-white'
            }`}
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none transition-colors"
          >
            {menuOpen ? (
              <X className={`${scrolled ? 'text-gray-700' : 'text-gray-900'}`} size={28} />
            ) : (
              <Menu className={`${scrolled ? 'text-gray-700' : 'text-gray-900'}`} size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-gray-100 shadow-md transition-all duration-300`}
        >
          <div className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-blue-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <Button
              onClick={() => setMenuOpen(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
