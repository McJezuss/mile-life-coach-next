import { cn } from "@/lib/utils";
import { FC } from "react";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "large"
  | "small"
  | "muted";

interface TypographyProps {
  children:
    | string
    | string[]
    | JSX.Element
    | JSX.Element[]
    | (string | JSX.Element)[];
  variant?: TypographyVariant;
  className?: string;
}

export const Typography: FC<TypographyProps> = ({
  children,
  variant,
  className,
}) => {
  const globalClasses = cn("text-zinc-900 dark:text-white", className);

  switch (variant) {
    case "h1":
      return (
        <h1
          className={cn(
            "font-glacial scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl",
            globalClasses
          )}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn(
            "font-glacial scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0",
            globalClasses
          )}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(
            "font-glacial scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight",
            globalClasses
          )}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={cn(
            "font-glacial scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight",
            globalClasses
          )}
        >
          {children}
        </h4>
      );
    case "p":
      return (
        <p
          className={cn(
            "font-fraunces text-lg lg:text-xl leading-7 [&:not(:first-child)]:mt-6",
            globalClasses
          )}
        >
          {children}
        </p>
      );
    case "large":
      return (
        <div
          className={cn(
            "font-fraunces text-xl lg:text-2xl font-semibold",
            globalClasses
          )}
        >
          {children}
        </div>
      );
    case "small":
      return (
        <small
          className={cn(
            "font-fraunces text-sm lg:text-base font-medium leading-none",
            globalClasses
          )}
        >
          {children}
        </small>
      );
    case "muted":
      return (
        <p
          className={cn(
            "font-fraunces text-sm lg:text-base text-zinc-500 dark:text-zinc-500",
            globalClasses
          )}
        >
          {children}
        </p>
      );
    default:
      return <Typography variant="p">{children}</Typography>;
  }
};
