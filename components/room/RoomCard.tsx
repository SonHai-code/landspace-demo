import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Ruler, Users } from "lucide-react";
import { Room } from "@/types/room";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group border-t border-ink/15 pt-5">
      <Link
        href={`/rooms/${room.id}`}
        className="image-zoom relative block aspect-[1.35] overflow-hidden rounded-[2px] bg-sage"
      >
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </Link>
      <div className="pt-5">
        <p className="text-xs text-muted">{room.type}</p>
        <h3 className="display mt-1 text-3xl leading-none">{room.name}</h3>
        <div className="mt-4 flex gap-5 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <Users size={14} /> {room.capacity} guests
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler size={14} /> {room.size} m²
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm">
            From <strong>${room.price}</strong>{" "}
            <span className="text-muted">/ night</span>
          </p>
          <Link
            href={`/rooms/${room.id}`}
            aria-label={`View ${room.name}`}
            className="rounded-full border border-ink/20 p-2 transition-colors group-hover:bg-ink group-hover:text-white"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
