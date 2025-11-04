import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Globe, Sparkles } from "lucide-react";
import HeroSection from "../homeHero/page";
import WhyChooseHomeschooling from "../components/WhyChooseHomeschooling";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <HeroSection />
      {/* ABOUT SECTION */}
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative bg-linear-to-br from-gray-100 to-white hidden sm:block">
            <Image
              src="/about-image.png"
              alt="Teacher guiding student in a homeschooling session"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-none shadow-none"
              priority
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              A New Way of Learning for Every Child
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our homeschooling program blends structure, creativity, and
              flexibility to help children thrive academically and emotionally.
              Whether online or in-person, we deliver personalized learning
              experiences that meet each learner’s pace and style.
            </p>
            <Link href="/about" passHref>
              <Button
                size="lg"
                className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-8 py-6"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <WhyChooseHomeschooling />

      {/* PROGRAMS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Programs Tailored for Every Learner
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Homeschool Program",
                img: "/program-homeschool.jpg",
                desc: "Structured yet flexible learning from the comfort of home, guided by qualified educators.",
                link: "/homeschool",
              },
              {
                title: "Tuition Classes",
                img: "/program-tuition.jpg",
                desc: "Expert-led one-on-one or group tuition in key subjects like Math, Science, and Languages.",
                link: "/tuition",
              },
              {
                title: "Enrichment Programs",
                img: "/program-enrichment.jpg",
                desc: "Beyond academics — we offer art, coding, and language clubs to expand every child’s curiosity.",
                link: "/enrichment",
              },
            ].map((program, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-2xl overflow-hidden"
              >
                {/* <Image
                  src={program.img}
                  alt={program.title}
                  width={400}
                  height={250}
                  className="object-cover w-full"
                /> */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.desc}</p>
                  <Link href={program.link}>
                    <Button
                      variant="outline"
                      className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Why Families Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <GraduationCap className="mx-auto text-blue-400" size={50} />
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Qualified Tutors
              </h3>
              <p className="text-gray-600">
                Our experienced educators use proven teaching strategies to
                build lasting understanding.
              </p>
            </div>

            <div>
              <Globe className="mx-auto text-blue-400" size={50} />
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Flexible Learning
              </h3>
              <p className="text-gray-600">
                Learn online or in-person — at your own pace and according to
                your family&apos;s schedule.
              </p>
            </div>

            <div>
              <Sparkles className="mx-auto text-blue-400" size={50} />
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Holistic Growth
              </h3>
              <p className="text-gray-600">
                Our approach nurtures confidence, creativity, and lifelong
                curiosity in every learner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            What Parents Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                quote:
                  "My daughter has blossomed since joining the homeschool program. She loves learning again!",
              },
              {
                name: "James O.",
                quote:
                  "The tutors are patient, engaging, and truly care about each student’s growth.",
              },
              {
                name: "Lina K.",
                quote:
                  "Flexible schedules made homeschooling possible for our busy family — we’re grateful!",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
                <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
                <p className="font-semibold text-gray-800">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
