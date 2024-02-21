import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const PricingCardSkeleton = () => {
  return (
    <Card className={`w-full`}>
      <CardContent className="h-full flex flex-col items-center">
        <CardHeader>
          <Skeleton className="w-36 h-10" />
          <Skeleton className="w-36 h-6" />
        </CardHeader>

        <Skeleton className="w-[200ox] h-[200px] mb-5 rounded-full aspect-square" />

        <div className="flex flex-col space-y-2 justify-end">
          <div>
            <Skeleton className="w-36 h-16" />
          </div>
          <Separator />
          <div className="flex flex-col space-y-2">
            <Skeleton className="w-36 h-6" />
            <Skeleton className="w-36 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
