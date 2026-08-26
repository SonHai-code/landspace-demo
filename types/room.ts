export type Amenity =
  | "WiFi"
  | "Air conditioning"
  | "Smart TV"
  | "Mini bar"
  | "Ocean view"
  | "Private bathroom"
  | "Breakfast included"
  | "Workspace";

export type Room = {
  id: string;
  hotelId: string;
  name: string;
  type: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  bed: string;
  images: string[];
  amenities: Amenity[];
};
