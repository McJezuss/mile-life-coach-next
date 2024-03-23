import { Logo } from "@/components/logos/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <Separator className="w-full" />
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between max-lg:items-center max-lg:space-y-5 p-5 pb-0 font-avenir tracking-tight">
        {/* Self-improvement email */}
        <div className="flex flex-col space-y-5 w-full lg:w-1/5 lg:ml-10 p-5">
          <Typography variant="h4">
            Self-Improvement Newsletter (Coming Soon!)
          </Typography>
          <Typography variant="muted">
            Subscribe to my newsletter to receive updates on new posts, courses,
            and other self-improvement content.
          </Typography>
          <div className="flex w-full max-w-sm items-center flex-col space-y-2 lg:space-x-2">
            <Input
              type="email"
              placeholder="Email"
              disabled
            />
            <Button
              type="submit"
              disabled
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Logo and social media icons */}
        <div className="flex lg:flex-row-reverse items-center w-full lg:w-1/5 flex-col lg:pr-10">
          <Logo
            variant={"icon-only"}
            priority={false}
            className="max-w-[150px]"
            sizes="(max-width: 768px) 30vw, (max-width: 1200px) 10vw"
          />
          <div className="flex flex-col items-center space-y-2">
            <Button
              asChild
              className="rounded-full h-8 w-8 p-0"
            >
              <Link
                aria-label="Instagram profile link"
                href={"https://www.instagram.com/mileklaasee_coach_/"}
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
      </div>
      {/* Copyright */}
      <div className="flex flex-col items-center justify-center p-5 space-y-2">
        <Separator
          className="lg:hidden"
          orientation="horizontal"
        />
        <span className="text-sm text-center text-zinc-500">
          © {new Date().getUTCFullYear()} Mile Klaasee Life Coach. All rights
          reserved.
        </span>
        <span className="text-sm text-center text-zinc-500">
          Made by Timo Klaasee, with 💛.
        </span>
      </div>
    </footer>
  );
};
