"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { paths } from "@/paths";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";

export function LandingCarousel({
  reviews,
}: {
  reviews: {
    age: string;
    review: string;
    helpedWith: string;
  }[];
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [count, setCount] = React.useState(0);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="max-md:max-w-[300px] lg:max-w-6xl m-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex flex-col space-y-3 p-1 text-center">
                <Typography variant="small">{review.review}</Typography>
                <Typography variant="muted">
                  - {review.helpedWith}, {review.age}
                </Typography>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
      <div className="max-lg:grid max-lg:grid-cols-5 max-lg:gap-5 lg:flex lg:flex-row lg:space-x-5 w-full justify-center items-center pt-5">
        {Array.from({ length: count }).map((_, index) => (
          <Badge
            key={index}
            className={`h-2 w-8 ${
              index === current - 1 ? "bg-zinc-800" : "bg-zinc-400"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
      <div className="flex w-full justify-center pt-5">
        <Button
          asChild
          variant={"default"}
        >
          <Link href={paths.bookings}>
            Make a booking <ChevronRight className="w-4 h-4 self-center" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
