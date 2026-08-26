import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { getHotel, hotels } from "@/lib/data/hotels";
import { getRoomsForHotel } from "@/lib/data/rooms";
import { HotelGallery } from "@/components/hotel/HotelGallery";
import { RoomCard } from "@/components/room/RoomCard";

export function generateStaticParams() {
  return hotels.map((hotel) => ({ slug: hotel.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hotel = getHotel(slug);
  return { title: hotel?.name ?? "Hotel", description: hotel?.description };
}
export default async function HotelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hotel = getHotel(slug);
  if (!hotel)
    return (
      <main className="container-shell py-40">
        <h1 className="display text-6xl">Hotel not found.</h1>
      </main>
    );
  const rooms = getRoomsForHotel(hotel.id);
  return (
    <main className="container-shell pb-28 pt-36">
      <Link
        href="/hotels"
        className="text-xs font-bold uppercase tracking-[.12em] text-muted hover:text-coral"
      >
        ← Back to all stays
      </Link>
      <div className="mt-10 flex flex-col justify-between gap-8 border-b border-ink/15 pb-10 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">{hotel.location}</p>
          <h1 className="display mt-3 text-7xl leading-[.85] sm:text-8xl">
            {hotel.name}
          </h1>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} /> {hotel.location}
            <span className="mx-2">·</span>
            <Star size={14} fill="currentColor" className="text-coral" />{" "}
            {hotel.rating} ({hotel.reviewCount} reviews)
          </div>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted">
          {hotel.description}
        </p>
      </div>
      <div className="mt-10">
        <HotelGallery name={hotel.name} images={hotel.images} />
      </div>
      <section className="grid gap-12 border-b border-ink/15 py-20 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">The feeling</p>
          <h2 className="display mt-4 text-5xl leading-none">
            A little more
            <br />
            <i>like yourself.</i>
          </h2>
        </div>
        <div>
          <p className="text-base leading-8 text-muted">
            {hotel.longDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {hotel.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-sage px-4 py-2 text-xs"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Stay the night</p>
            <h2 className="display mt-3 text-6xl leading-none">
              Available rooms
            </h2>
          </div>
          <span className="hidden text-sm text-muted sm:block">
            {rooms.length} rooms
          </span>
        </div>
        <div className="mt-12 grid gap-x-7 gap-y-14 md:grid-cols-2">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
      <div className="mt-24 flex flex-col justify-between gap-6 bg-sage p-8 sm:flex-row sm:items-center sm:p-12">
        <div>
          <p className="display text-4xl">Curious about staying here?</p>
          <p className="mt-2 text-sm text-muted">
            The hotel team would love to hear from you.
          </p>
        </div>
        <a
          href="mailto:hello@staywell.place"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[.1em] text-white"
        >
          Contact hotel <ArrowUpRight size={16} />
        </a>
      </div>
    </main>
  );
}
