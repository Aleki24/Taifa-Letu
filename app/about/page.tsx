'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Users, HeartHandshake, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white text-gray-800">
      {/* HERO SECTION */}
      <div className="text-center py-20 px-6 sm:px-10 bg-blue-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
        >
          About Taifa Letu Education
        </motion.h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Nurturing confident, creative, and competent learners through personalized homeschooling and tuition.
        </p>
      </div>

      {/* INTRODUCTION SECTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden"
        >
          <Image
            src="/about-image.png"
            alt="Teacher guiding a student during homeschool session"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Taifa Letu Education is a homeschool and tuition center dedicated to providing
            customized learning for every child. Our approach blends modern teaching strategies
            with values-based mentorship, ensuring each learner achieves academic excellence
            while growing emotionally and socially.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We serve both CBC and international curriculums, offering flexible learning pathways
            for diverse student needs — from primary to secondary levels.
          </p>
        </motion.div>
      </div>

      {/* MISSION & VISION */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower learners with quality education that nurtures creativity, critical thinking,
              and character — preparing them for a successful future in a dynamic world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a leading homeschool that inspires excellence, nurtures purpose,
              and transforms learners into global citizens with strong moral values.
            </p>
          </motion.div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-12"
        >
          Why Choose Taifa Letu Education?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: BookOpen,
              title: 'Personalized Learning',
              text: 'Tailored education plans that match each learner’s pace, interests, and goals.',
            },
            {
              icon: Users,
              title: 'Qualified Tutors',
              text: 'Our experienced tutors are passionate educators who inspire curiosity and confidence.',
            },
            {
              icon: HeartHandshake,
              title: 'Strong Values',
              text: 'We emphasize integrity, discipline, and collaboration as core life values.',
            },
            {
              icon: Lightbulb,
              title: 'Innovative Curriculum',
              text: 'A balanced blend of CBC and global standards with interactive teaching methods.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">
                <Icon className="text-blue-500 w-10 h-10" />
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
