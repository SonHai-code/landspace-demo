import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { hotels } from "@/lib/data/hotels";
import { HotelCard } from "@/components/hotel/HotelCard";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#a9b9ac] pb-16 pt-32 text-white sm:min-h-[800px]">
        <Image
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2200&q=90"
          alt="A sunlit hotel pool surrounded by palms"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,37,32,.3),rgba(28,37,32,.1)_35%,rgba(28,37,32,.7))]" />
        <div className="container-shell relative">
          <p className="eyebrow text-white/80">A collection of good places</p>
          <h1 className="display mt-5 max-w-3xl text-7xl leading-[.86] sm:text-[9rem]">
            Go somewhere
            <br />
            <i>worth going.</i>
          </h1>
          <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link
              href="/hotels"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[.12em] text-ink transition-transform hover:-translate-y-1"
            >
              Explore hotels <ArrowUpRight size={16} />
            </Link>
            <p className="max-w-xs text-sm leading-5 text-white/75">
              Thoughtful stays for curious travelers, from slow mornings to late
              check-ins.
            </p>
          </div>
        </div>
        <ArrowDownRight
          className="absolute bottom-16 right-8 hidden sm:block"
          size={42}
          strokeWidth={1}
        />
      </section>
      <section className="container-shell py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Stay awhile"
            title="Places with a point of view."
            description="We look for hotels that feel rooted in their surroundings, generous in spirit and easy to remember."
          />
          <Link
            href="/hotels"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em]"
          >
            View all stays{" "}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
        <div className="mt-14 grid gap-x-7 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {hotels.slice(0, 6).map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} featured />
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div className="container-shell grid items-center gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow text-coral">Your next chapter</p>
            <h2 className="display mt-4 text-6xl leading-[.9] sm:text-8xl">
              Make room
              <br />
              <i>for wonder.</i>
            </h2>
          </div>
          <div>
            <p className="max-w-md text-lg leading-8 text-white/70">
              From a cabin in the snow to a riad in the medina, find a stay that
              changes the pace of your days.
            </p>
            <Link
              href="/hotels"
              className="mt-8 inline-flex items-center gap-3 border-b border-white/50 pb-3 text-xs font-bold uppercase tracking-[.12em]"
            >
              Find your next stay <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
