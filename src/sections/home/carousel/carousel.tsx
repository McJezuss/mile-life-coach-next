"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { paths } from "@/paths";

export function LandingCarousel({ images }: { images: string[] }) {
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
        className="w-full max-md:max-w-sm lg:max-w-6xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Image
                  priority={index === 0 || index === 1 || index === 2} // preload first 3 images
                  className="rounded-full aspect-square bg-zinc-400"
                  src={image}
                  alt="Illustrative tattoo by Stöckel Tattoos"
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
      <div className="flex flex-row space-x-5 w-full justify-center items-center pt-5">
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
          className="text-xl font-avenir font-bold"
        >
          <Link href={paths.portfolio}>
            View Portfolio <ChevronRight className="w-5 h-5 self-center" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
