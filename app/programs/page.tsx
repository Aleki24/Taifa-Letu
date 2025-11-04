'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, Star } from 'lucide-react';

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Homeschool Program',
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      description:
        'A flexible, curriculum-based learning program designed for personalized home education that meets CBC and international standards.',
      link: '/programs/homeschool',
    },
    {
      title: 'Tuition Support',
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      description:
        'Expert tutors providing targeted academic help for students in primary and secondary levels, both online and in-person.',
      link: '/programs/tuition',
    },
    {
      title: 'Special Needs Education',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description:
        'Inclusive learning designed to support students with intellectual, emotional, and social development needs.',
      link: '/programs/special-education',
    },
    {
      title: 'Enrichment Classes',
      icon: <Star className="w-8 h-8 text-blue-500" />,
      description:
        'Creative, skill-based learning sessions that nurture talents in art, coding, communication, and leadership.',
      link: '/programs/enrichment',
    },
  ];

  return (
    <main className="bg-linear-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-gray-100 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 sm:px-8 lg:px-12 py-16 lg:py-24 gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-500">Programs</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              At Taifa Letu Education, we offer programs that balance academic rigor with personal growth, designed to empower learners of all abilities.
            </p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3"
            >
              Enroll Now
            </Button>
          </div>

          {/* Hero Image */}
          <div className="flex-1">
            <Image
              src="/about-image.png"
              alt="Teacher guiding student in a homeschooling session"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore Our <span className="text-blue-500">Learning Paths</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-start"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                <Link
                  href={program.link}
                  className="text-blue-500 text-sm font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Learning Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Join Taifa Letu Education and experience personalized, value-driven education that empowers success.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 font-semibold hover:bg-blue-50 rounded-full"
          >
            Enroll Now
          </Button>
        </div>
      </section>
    </main>
  );
}
