// app/resources/page.tsx
// import { prisma } from '@/lib/prisma';

import { getUsers } from "@/actions/user-actions";



export default async function ResourcesPage() {
  const resources = await getUsers();
  console.log(resources);

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Learning Resources
        </h1>
        <p className="text-gray-600 text-lg">
          Explore high-quality homeschooling resources — textbooks, videos, and interactive materials.
        </p>
      </div>

     
    </main>
  );
}

