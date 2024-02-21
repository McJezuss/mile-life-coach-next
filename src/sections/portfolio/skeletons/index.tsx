import { ShowcaseSkeleton } from "./showcase";

export const PortfolioSectionSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <ShowcaseSkeleton key={index} />
      ))}
    </>
  );
};
