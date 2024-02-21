import { Skeleton } from "@/components/ui/skeleton";

export const LandingCarouselSectionSkeleton = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row space-x-5">
        <Skeleton className="w-[300px] h-[300px] rounded-full aspect-square" />
        <Skeleton className="w-[300px] h-[300px] rounded-full aspect-square max-lg:hidden" />
        <Skeleton className="w-[300px] h-[300px] rounded-full aspect-square max-lg:hidden" />
      </div>
      <div className="flex flex-row space-x-5 w-full justify-center items-center pt-5">
        <Skeleton className="w-8 h-2" />
        <Skeleton className="w-8 h-2" />
        <Skeleton className="w-8 h-2" />
      </div>
      <div className="flex w-full justify-center pt-5">
        <Skeleton className="w-36 h-8" />
      </div>
    </div>
  );
};
