"use client";

import Image from "next/image";
import { useState } from "react";

export function HotelGallery({
  name,
  images,
}: {
  name: string;
  images: string[];
}) {
  const [selected, setSelected] = useState(images[0]);
  return (
    <div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-[2px] bg-sage">
        <Image
          src={selected}
          alt={`${name} view`}
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="object-cover transition-opacity duration-300"
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setSelected(image)}
            className={`relative aspect-[1.5] overflow-hidden rounded-[2px] ${selected === image ? "ring-2 ring-coral ring-offset-2" : "opacity-60 hover:opacity-100"}`}
          >
            <Image
              src={image}
              alt={`${name} gallery image ${index + 1}`}
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
