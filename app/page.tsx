import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";

export const revalidate = 0;

export default async function Home() {
  const attractions = await prisma.attraction.findMany({
    orderBy: { id: "asc" },
    include: { _count: { select: { likes: true } } },
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Attractions
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((attraction) => (
            <Link
              key={attraction.id}
              href={`/attractions/${attraction.id}`}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-zinc-900"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={attraction.coverimage}
                  alt={attraction.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {attraction.name}
                </h2>
                <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {attraction.detail}
                </p>
                <div className="mt-3 flex items-center gap-1 text-sm text-pink-600 dark:text-pink-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{attraction._count.likes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {attractions.length === 0 && (
          <p className="text-center text-zinc-500">No attractions founded.</p>
        )}
      </div>
    </div>
  );
}