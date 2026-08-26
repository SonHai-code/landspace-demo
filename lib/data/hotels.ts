import { Hotel } from "@/types/hotel";

const image = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const hotels: Hotel[] = [
  {
    id: "hotel-1",
    slug: "the-luma-house",
    name: "The Luma House",
    location: "Kyoto, Japan",
    description:
      "A quiet modern retreat where natural materials meet old Kyoto craft.",
    longDescription:
      "Tucked between a moss garden and the narrow lanes of Higashiyama, The Luma House is a small, considered stay for slow mornings and long walks. Each space pairs tactile materials with a view into the life of the city.",
    rating: 4.9,
    reviewCount: 128,
    coverImage: image("photo-1540959733332-eab4deabeeaf"),
    images: [
      image("photo-1540959733332-eab4deabeeaf"),
      image("photo-1511818966892-d7d671e672a2"),
      image("photo-1493976040374-85c8e12f0c0e"),
    ],
    rooms: ["room-1", "room-2"],
    highlights: ["Garden courtyard", "Tea ceremony", "Bicycle hire"],
  },
  {
    id: "hotel-2",
    slug: "salt-and-stone",
    name: "Salt & Stone",
    location: "Uluwatu, Bali",
    description: "A sun-washed coastal hideaway with sea air in every room.",
    longDescription:
      "Salt & Stone sits lightly on the cliffside, with open-air living, hand-finished stone and a horizon that seems to go on forever. Come for the quiet, stay for the golden hour.",
    rating: 4.8,
    reviewCount: 96,
    coverImage: image("photo-1539367628448-4bc5c9d171c8"),
    images: [
      image("photo-1539367628448-4bc5c9d171c8"),
      image("photo-1505881502353-a1986add3762"),
      image("photo-1540541338287-41700207dee6"),
    ],
    rooms: ["room-3", "room-4"],
    highlights: ["Clifftop pool", "Sunset deck", "Daily yoga"],
  },
  {
    id: "hotel-3",
    slug: "casa-marea",
    name: "Casa Marea",
    location: "Paros, Greece",
    description:
      "A whitewashed island home shaped by light, sea and simple pleasures.",
    longDescription:
      "Casa Marea is a collection of calm, whitewashed rooms around a garden courtyard. The Aegean is always close, whether you are in the plunge pool or at breakfast under the olive trees.",
    rating: 4.7,
    reviewCount: 74,
    coverImage: image("photo-1570077188670-e3a8d69ac5ff"),
    images: [
      image("photo-1570077188670-e3a8d69ac5ff"),
      image("photo-1533105079780-92b9be482077"),
      image("photo-1602002418082-a4443e081dd1"),
    ],
    rooms: ["room-5", "room-6"],
    highlights: ["Island breakfast", "Olive grove", "Beach shuttle"],
  },
  {
    id: "hotel-4",
    slug: "northline-lodge",
    name: "Northline Lodge",
    location: "Hokkaido, Japan",
    description: "A warm timber lodge at the edge of the forest and the snow.",
    longDescription:
      "Northline Lodge is a gentle basecamp for the wild north. Return from the mountain to a wood-fired sauna, a hot bowl of soup and a room made for deep sleep.",
    rating: 4.8,
    reviewCount: 61,
    coverImage: image("photo-1517825738774-7de9363a0067"),
    images: [
      image("photo-1517825738774-7de9363a0067"),
      image("photo-1480796927426-f609979314bd"),
      image("photo-1493780474015-ba834fd0ce2f"),
    ],
    rooms: ["room-7", "room-8"],
    highlights: ["Forest sauna", "Ski storage", "Fireplace lounge"],
  },
  {
    id: "hotel-5",
    slug: "the-grove-marrakech",
    name: "The Grove Marrakech",
    location: "Marrakech, Morocco",
    description: "A leafy riad of terracotta, shadow and the scent of citrus.",
    longDescription:
      "Behind a simple ochre door, The Grove opens into a world of tiled courtyards and orange trees. Days move between the hammam, the pool and the rooftop at dusk.",
    rating: 4.9,
    reviewCount: 112,
    coverImage: image("photo-1539650116574-75c0c6d73f6e"),
    images: [
      image("photo-1539650116574-75c0c6d73f6e"),
      image("photo-1548013146-72479768bada"),
      image("photo-1520250497591-112f2f40a3f4"),
    ],
    rooms: ["room-9", "room-10"],
    highlights: ["Rooftop dining", "Hammam", "Medina guide"],
  },
  {
    id: "hotel-6",
    slug: "stella-maris",
    name: "Stella Maris",
    location: "Amalfi, Italy",
    description:
      "A cinematic coastal hotel perched above the blue Tyrrhenian Sea.",
    longDescription:
      "Stella Maris is an intimate hideaway carved into the Amalfi cliffs. Wake to the sea, take the stairs down to the cove and let the day unfold at its own pace.",
    rating: 4.8,
    reviewCount: 88,
    coverImage: image("photo-1530789253388-582c481c54b0"),
    images: [
      image("photo-1530789253388-582c481c54b0"),
      image("photo-1533105079780-92b9be482077"),
      image("photo-1507525428034-b723cf961d3e"),
    ],
    rooms: ["room-11", "room-12"],
    highlights: ["Private cove", "Lemon garden", "Boat trips"],
  },
];

export function getHotel(slug: string) {
  return hotels.find((hotel) => hotel.slug === slug);
}
