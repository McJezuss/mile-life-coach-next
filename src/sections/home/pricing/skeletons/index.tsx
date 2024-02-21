import { Skeleton } from "@/components/ui/skeleton";
import { PricingCardSkeleton } from "./pricing-card";

export const PricingSectionSkeleton = () => {
  return (
    <div className="max-w-6xl w-full">
      <h1 className="text-4xl text-center font-bebas pb-5">Pricing</h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-20 max-lg:gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <PricingCardSkeleton key={i} />
        ))}
      </div>
      <div className="flex w-full justify-center pt-5">
        <Skeleton className="w-36 h-8" />
      </div>
    </div>
  );
};
