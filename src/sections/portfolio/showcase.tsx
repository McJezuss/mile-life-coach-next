"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface ShowcaseProps {
  name: string;
  linkText: string;
  linkUrl: string;
  images: string[];
}

export const Showcase: FC<ShowcaseProps> = ({
  name,
  linkText,
  linkUrl,
  images,
}) => {
  const [moreCounter, setMoreCounter] = useState(1);

  return (
    <div>
      <div className="p-2 pl-5 pr-5 flex flex-row justify-between items-center w-full">
        <h1 className="font-bebas text-3xl">{name}</h1>
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-xl font-avenir max-lg:hidden">
            {linkText}:{" "}
          </span>
          <Button
            asChild
            className="rounded-full h-8 w-8 p-0"
          >
            <Link
              href={linkUrl}
              aria-label="Instagram Portfolio Link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-4 max-lg:grid-cols-2 w-full p-5 pb-7 gap-5">
        {images
          .slice(
            0,
            moreCounter * 4 > images.length ? images.length : moreCounter * 4
          )
          .map((image, index) => (
            <Image
              loading={index < 4 ? undefined : "lazy"}
              priority={index < 4}
              key={index}
              src={image}
              alt="Tattoo"
              width={400}
              height={400}
              sizes="(max-width: 768px) 40vw, (max-width: 1024px) 25vw"
              className="object-cover rounded-xl shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 bg-zinc-200 grayscale hover:grayscale-0"
            />
          ))}
      </div>
      <div className="flex w-full justify-center pb-5">
        <Button
          variant={"ghost"}
          className={`text-xl font-avenir font-bold ${
            moreCounter * 4 >= images.length && "hidden"
          }`}
          onClick={() => setMoreCounter(moreCounter + 1)}
        >
          See More{" "}
          <ChevronDown
            className="ml-2"
            size={24}
          />
        </Button>
      </div>
      <Separator />
    </div>
  );
};
