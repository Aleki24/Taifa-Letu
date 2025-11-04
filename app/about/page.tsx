// app/about/page.tsx
import Image from "next/image";

export const metadata = {
  title: "About Us | Taifa Letu Homeschool and Tuition",
  description:
    "Learn more about Taifa Letu Homeschool and Tuition — providing flexible, high-quality homeschooling and tuition options in Nairobi, Kenya.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* About Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About Taifa Letu Homeschool and Tuition
            </h1>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Taifa Letu Homeschool and Tuition provides adaptable, high-quality
              homeschooling solutions in Nairobi, Kenya. We aim to make quality
              education accessible and personalized — whether at home or online.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our certified educators teach multiple globally recognized
              curricula, including the Kenyan Competency-Based Curriculum (CBC),
              Cambridge International, British, and International Baccalaureate
              (IB). Students can graduate with qualifications like Cambridge
              IGCSE, A-Levels, or IB Diplomas, positioning them for success both
              locally and abroad.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We also offer specialized holiday tuition to strengthen skills and
              help students reach their full potential.
            </p>
          </div>

          <div className="relative w-full h-96">
            <Image
              src="/about-image.png"
              alt="Teacher guiding student in a homeschooling session"
              fill
              className="object-cover rounded-2xl shadow-md"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why Choose Taifa Letu Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Why Choose Taifa Letu Homeschool and Tuition
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {/* 1 */}
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Exceptional Education
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our balanced, holistic Cambridge, British, and Kenyan CBC
                curricula — combined with dedicated educators — prepare your
                child for success in a modern STEM-driven world. We challenge,
                inspire, and nurture every learner to reach their full
                potential.
              </p>
            </div>

            {/* 2 */}
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Blended Learning Approach
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We combine online and physical learning experiences to offer
                flexibility and ensure uninterrupted education. Students thrive
                both academically and socially through a well-balanced approach.
              </p>
            </div>

            {/* 3 */}
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Applied Learning Program
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our applied learning program equips learners with real-world
                skills and experiences. We empower students to think critically,
                solve problems, and build lifelong learning habits.
              </p>
            </div>

            {/* 4 */}
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Supportive & Inclusive Community
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our inclusive environment values diversity and celebrates
                individual achievements. Staff, students, and parents work
                together to create a welcoming, encouraging learning culture.
              </p>
            </div>

            {/* 5 */}
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Socialization
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Students engage in both in-person and virtual activities — from
                sports, music, and art workshops to clubs and competitions —
                nurturing essential social and teamwork skills.
              </p>
            </div>

            {/* 6 */}
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Commitment to Success
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We collaborate closely with parents and guardians to ensure
                every child achieves their academic and personal goals — backed
                by our world-class online learning systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
