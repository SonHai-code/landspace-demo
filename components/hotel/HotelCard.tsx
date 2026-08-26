import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Hotel } from "@/types/hotel";

export function HotelCard({
  hotel,
  featured = false,
}: {
  hotel: Hotel;
  featured?: boolean;
}) {
  return (
    <article className={`group ${featured ? "" : ""}`}>
      <Link
        href={`/hotels/${hotel.slug}`}
        className="image-zoom relative block aspect-[4/3] overflow-hidden rounded-[2px] bg-sage"
      >
        <Image
          src={hotel.coverImage}
          alt={hotel.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold tracking-[.12em]">
          {hotel.location.split(",")[0].toUpperCase()}
        </span>
      </Link>
      <div className="pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-muted">{hotel.location}</p>
            <h3 className="display mt-1 text-3xl leading-none">{hotel.name}</h3>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Star size={13} fill="currentColor" className="text-coral" />
            {hotel.rating}
          </div>
        </div>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
          {hotel.description}
        </p>
        <Link
          href={`/hotels/${hotel.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] transition-colors group-hover:text-coral"
        >
          View details <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
