"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function RoomGallery({
  name,
  images,
}: {
  name: string;
  images: string[];
}) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((current) => (current + 1) % images.length);
  const previous = () =>
    setIndex((current) => (current - 1 + images.length) % images.length);
  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-sage">
        <Image
          src={images[index]}
          alt={`${name} view ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            aria-label="Previous image"
            onClick={previous}
            className="rounded-full bg-white p-2"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            aria-label="Next image"
            onClick={next}
            className="rounded-full bg-white p-2"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((image, imageIndex) => (
          <button
            key={image}
            onClick={() => setIndex(imageIndex)}
            className={`relative aspect-[1.5] overflow-hidden rounded-[2px] ${index === imageIndex ? "ring-2 ring-coral ring-offset-2" : "opacity-60 hover:opacity-100"}`}
          >
            <Image
              src={image}
              alt={`${name} thumbnail ${imageIndex + 1}`}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
