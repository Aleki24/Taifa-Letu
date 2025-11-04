'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Video, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('pdfs');

  const tabs = [
    { id: 'pdfs', label: 'Textbooks & PDFs', icon: BookOpen },
    { id: 'videos', label: 'Video Lessons', icon: Video },
    { id: 'links', label: 'Learning Links', icon: Globe },
  ];

  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 to-white py-20 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Learning Resources
        </h1>
        <p className="text-gray-600 text-lg">
          Explore high-quality homeschooling resources — textbooks, videos, and interactive materials.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 rounded-full px-6 py-3 transition-all duration-300 ${
              activeTab === id
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon size={18} />
            {label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeTab === 'pdfs' && (
          <>
            <ResourceCard
              title="Grade 4 Mathematics Workbook"
              description="Aligned with CBC curriculum. Great for home practice."
              image="/pdf1.jpg"
              buttonText="Download PDF"
            />
            <ResourceCard
              title="Science Explorers – Grade 6"
              description="Interactive workbook full of experiments and diagrams."
              image="/pdf2.jpg"
              buttonText="Download PDF"
            />
            <ResourceCard
              title="English Grammar Boost"
              description="Exercises and notes to improve grammar mastery."
              image="/pdf3.jpg"
              buttonText="Download PDF"
            />
          </>
        )}

        {activeTab === 'videos' && (
          <>
            <ResourceCard
              title="Understanding Fractions"
              description="A visual lesson explaining fractions and mixed numbers."
              image="/video1.jpg"
              buttonText="Watch Now"
            />
            <ResourceCard
              title="Science of Sound"
              description="An engaging video lesson about sound waves and vibration."
              image="/video2.jpg"
              buttonText="Watch Now"
            />
            <ResourceCard
              title="Storytelling and Comprehension"
              description="Watch this guided reading and comprehension exercise."
              image="/video3.jpg"
              buttonText="Watch Now"
            />
          </>
        )}

        {activeTab === 'links' && (
          <>
            <ResourceCard
              title="Khan Academy Kids"
              description="Interactive lessons for math, reading, and science."
              image="/link1.jpg"
              buttonText="Visit Site"
              link="https://learn.khanacademy.org"
            />
            <ResourceCard
              title="BBC Bitesize"
              description="Comprehensive study materials and activities for all ages."
              image="/link2.jpg"
              buttonText="Visit Site"
              link="https://bbc.co.uk/bitesize"
            />
            <ResourceCard
              title="National Geographic Kids"
              description="Discover fun facts, quizzes, and videos about our world."
              image="/link3.jpg"
              buttonText="Visit Site"
              link="https://kids.nationalgeographic.com"
            />
          </>
        )}
      </div>
    </section>
  );
}

function ResourceCard({ title, description, image, buttonText, link }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 grow">{description}</p>
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-full">
              {buttonText}
            </Button>
          </Link>
        ) : (
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-full">
            {buttonText}
          </Button>
        )}
      </div>
    </motion.div>
  );
}
