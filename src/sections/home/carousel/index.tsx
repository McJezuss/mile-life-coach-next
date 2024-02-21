import { getHomePageData } from "@/api/home";
import { LandingCarousel } from "./carousel";

export const LandingCarouselSection = async () => {
  const { data } = await getHomePageData();
  const featuredImageUrls =
    data.featuredImages?.map((img) => img.imageUrl) || [];

  return <LandingCarousel images={featuredImageUrls} />;
};
