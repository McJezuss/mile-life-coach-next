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
  children: string | string[];
  variant?: TypographyVariant;
}

export const Typography: FC<TypographyProps> = ({ children, variant }) => {
  const globalClasses = "text-zinc-900 dark:text-white";

  switch (variant) {
    case "h1":
      return (
        <h1
          className={
            "font-glacial scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" +
            globalClasses
          }
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={
            "font-glacial scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0" +
            globalClasses
          }
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={
            "font-glacial scroll-m-20 text-2xl font-semibold tracking-tight" +
            globalClasses
          }
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={
            "font-glacial scroll-m-20 text-xl font-semibold tracking-tight" +
            globalClasses
          }
        >
          {children}
        </h4>
      );
    case "p":
      return (
        <p
          className={
            "font-fraunces text-xl leading-7 [&:not(:first-child)]:mt-6" +
            globalClasses
          }
        >
          {children}
        </p>
      );
    case "large":
      return (
        <div className={"font-fraunces text-2xl font-semibold" + globalClasses}>
          {children}
        </div>
      );
    case "small":
      return (
        <small
          className={
            "font-fraunces text-base font-medium leading-none" + globalClasses
          }
        >
          {children}
        </small>
      );
    case "muted":
      return (
        <p
          className={"font-fraunces text-base text-zinc-400 dark:text-zinc-500"}
        >
          {children}
        </p>
      );
    default:
      return (
        <p
          className={
            "font-fraunces text-xl leading-7 [&:not(:first-child)]:mt-6" +
            globalClasses
          }
        >
          {children}
        </p>
      );
  }
};
