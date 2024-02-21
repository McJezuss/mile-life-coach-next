import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const ShowcaseSkeleton = () => {
  return (
    <div>
      <div className="p-2 pl-5 pr-5 flex flex-row justify-between items-center w-full">
        <Skeleton className="w-24 h-8" />
        <div className="flex flex-row space-x-2 items-center">
          <Skeleton className="w-36 h-8" />
          <Skeleton className="w-8 h-8" />
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-4 max-lg:grid-cols-2 w-full p-5 pb-7 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            className="w-[400px] h-[400px] rounded-xl shadow-lg"
          />
        ))}
      </div>
      <div className="flex w-full justify-center pb-5">
        <Skeleton className="w-36 h-16" />
      </div>
      <Separator />
    </div>
  );
};
