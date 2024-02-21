export interface FeaturedImage {
  _id: string;
  position: number;
  imageUrl: string;
}

export interface Pricing {
  _id: string;
  title: string;
  description: string;
  position: number;
  price: string;
  imageUrl: string;
  popular: boolean;
  priceDescription?: string;
}

export interface HomePage {
  id: string;
  featuredImages: FeaturedImage[];
  pricing: Pricing[];
  updatedAt?: string;
  createdAt?: string;
}