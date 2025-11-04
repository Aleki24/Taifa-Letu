import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, School, Pencil, Globe, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-gray-50 to-white overflow-hidden pt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
            <div className="absolute -top-10 -left-5 opacity-20">
              <GraduationCap size={80} className="text-gray-400" />
            </div>

            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Personalized{" "}
                <span className="text-blue-500">Homeschooling</span>
                <br />& Quality{" "}
                <span className="italic font-serif text-gray-800">Tuition</span>
                <br />
                for Every Learner
              </h1>
            </div>

            <p className="text-xl text-gray-600 font-light max-w-xl">
              Empowering students to reach their full potential through
              flexible, research-based homeschooling and personalized tuition —
              whether online or in-person.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-8 py-6 text-base font-normal"
              >
                <Link href="/parents">Explore Homeschool Options</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-gray-800 hover:bg-gray-900 text-white border-gray-800 rounded-full px-8 py-6 text-base font-normal"
              >
                <Link href="/tutors">Find a Qualified Tutor</Link>
              </Button>
            </div>

            {/* Decorative School Icon */}
            <div className="absolute -bottom-20 left-1/4 opacity-30">
              <div className="relative">
                <School size={100} className="text-gray-400" />
                <div className="absolute -top-2 -right-2 bg-gray-800 rounded-full p-2">
                  <GraduationCap size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative bg-linear-to-br from-gray-100 to-white">
            <Image
              src="/hero-image.jpg"
              alt="Parent helping child with homework"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-none shadow-none"
              priority
            />

            {/* Optional subtle overlay for soft blending */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />

            {/* Decorative icons (optional) */}
            <div className="absolute -top-10 right-20 opacity-40 animate-bounce-slow">
              <Pencil size={60} className="text-yellow-500 rotate-12" />
            </div>
            <div className="absolute top-32 -right-5 opacity-40">
              <Globe size={70} className="text-blue-400" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-40">
              <Sparkles size={50} className="text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
