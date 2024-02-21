export type PortfolioImage = {
  _id: string;
  image: string;
  imageUrl: string;
  position: number;
}

export type PortfolioSection = {
  _id: string;
  name: string;
  linkText: string;
  linkUrl: string;
  images: PortfolioImage[];
}

export type PortfolioPage = {
  id: string;
  sections: PortfolioSection[];
  createdAt?: string;
  updatedAt?: string;
}