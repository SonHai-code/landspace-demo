import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BedDouble,
  Check,
  MapPin,
  Ruler,
  Users,
} from "lucide-react";
import { getRoom, rooms } from "@/lib/data/rooms";
import { hotels } from "@/lib/data/hotels";
import { RoomGallery } from "@/components/room/RoomGallery";

export function generateStaticParams() {
  return rooms.map((room) => ({ id: room.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const room = getRoom(id);
  return { title: room?.name ?? "Room", description: room?.description };
}
export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = getRoom(id);
  if (!room)
    return (
      <main className="container-shell py-40">
        <h1 className="display text-6xl">Room not found.</h1>
      </main>
    );
  const hotel = hotels.find((item) => item.id === room.hotelId);
  return (
    <main className="container-shell pb-28 pt-36">
      <Link
        href={hotel ? `/hotels/${hotel.slug}` : "/hotels"}
        className="text-xs font-bold uppercase tracking-[.12em] text-muted hover:text-coral"
      >
        ← Back to {hotel?.name ?? "hotel"}
      </Link>
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <RoomGallery name={room.name} images={room.images} />
        <div className="lg:pt-3">
          <p className="eyebrow">{room.type} room</p>
          <h1 className="display mt-3 text-7xl leading-[.85]">{room.name}</h1>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} /> {hotel?.location}
          </p>
          <p className="mt-8 text-base leading-8 text-muted">
            {room.description}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 border-y border-ink/15 py-6">
            <span className="flex items-center gap-3 text-sm">
              <Users size={18} className="text-coral" /> {room.capacity} guests
            </span>
            <span className="flex items-center gap-3 text-sm">
              <Ruler size={18} className="text-coral" /> {room.size} m²
            </span>
            <span className="flex items-center gap-3 text-sm">
              <BedDouble size={18} className="text-coral" /> {room.bed}
            </span>
            <span className="text-sm">
              <strong>${room.price}</strong> / night
            </span>
          </div>
        </div>
      </div>
      <section className="mt-20 grid gap-12 border-t border-ink/15 pt-16 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Included</p>
          <h2 className="display mt-3 text-5xl">
            Everything
            <br />
            <i>you need.</i>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3">
          {room.amenities.map((amenity) => (
            <div key={amenity} className="flex items-center gap-2 text-sm">
              <Check size={16} className="text-coral" /> {amenity}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 flex flex-col justify-between gap-6 bg-ink p-8 text-white sm:flex-row sm:items-center sm:p-12">
        <div>
          <p className="display text-4xl">Interested in this room?</p>
          <p className="mt-2 text-sm text-white/60">
            Contact the hotel for more information.
          </p>
        </div>
        <a
          href="mailto:hello@staywell.place"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[.1em] text-ink"
        >
          Contact hotel <ArrowUpRight size={16} />
        </a>
      </section>
    </main>
  );
}
