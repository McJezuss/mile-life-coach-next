import { getPortfolioPageData } from "@/api/portfolio";
import { Showcase } from "./showcase";

export const PortfolioSection = async () => {
  const { data } = await getPortfolioPageData();

  return (
    <>
      {data.sections.map((section, index) => (
        <Showcase
          key={index}
          name={section.name}
          linkText={section.linkText}
          linkUrl={section.linkUrl}
          images={section.images.map((image) => image.imageUrl)}
        />
      ))}
    </>
  );
};
