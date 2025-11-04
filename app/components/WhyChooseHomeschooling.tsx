import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhyChooseHomeschooling() {
  return (
    <section className="relative bg-linear-to-br from-gray-50 to-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose <span className="text-blue-500">Homeschooling?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Homeschooling has become a globally recognized and legal alternative
            to traditional schooling, offering families flexibility, safety, and
            personalization.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <strong>Taifa Letu Homeschool and Tuition</strong> provides
            adaptable homeschooling solutions in Nairobi, Kenya, at competitive
            rates — making quality education more accessible than ever.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Certified educators for in-home and online learning</li>
            <li>Flexible schedules tailored to your family</li>
            <li>Globally recognized curricula: CBC, Cambridge, British & IB</li>
            <li>Holiday tuition and enrichment programs</li>
            <li>Student-centered approach promoting confidence and growth</li>
          </ul>

          <div className="pt-6">
            <Button
              asChild
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-base font-medium shadow-md"
            >
              <Link href="/programs">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src="/whyChooseHomeschool.jpg"
            alt="Teacher assisting student in a homeschooling session"
            width={600}
            height={500}
            className="rounded-2xl shadow-xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
