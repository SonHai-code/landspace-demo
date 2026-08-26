"use client";

import { useState } from "react";
import { hotels } from "@/lib/data/hotels";
import { HotelCard } from "@/components/hotel/HotelCard";
import { SearchInput } from "@/components/common/SearchInput";
import { EmptyState } from "@/components/common/EmptyState";

export default function HotelsPage() {
  const [query, setQuery] = useState("");
  const filtered = hotels.filter((hotel) =>
    `${hotel.name} ${hotel.location}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <main className="container-shell pb-28 pt-36">
      <div className="max-w-2xl">
        <p className="eyebrow">The collection</p>
        <h1 className="display mt-4 text-7xl leading-[.85] sm:text-8xl">
          Find your
          <br />
          <i>place.</i>
        </h1>
        <p className="mt-7 max-w-lg text-base leading-7 text-muted">
          A handpicked collection of beautiful hotels, quiet hideaways and
          memorable rooms around the world.
        </p>
      </div>
      <div className="mt-16 max-w-xl">
        <SearchInput value={query} onChange={setQuery} />
      </div>
      {filtered.length ? (
        <div className="mt-16 grid gap-x-7 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <div className="mt-10">
          <EmptyState />
        </div>
      )}
    </main>
  );
}
