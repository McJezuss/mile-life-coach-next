import HorizontalFullLogo from "@/../public/logos/logo-horizontal-full.jpg";
import HorizontalLogo from "@/../public/logos/logo-horizontal.jpg";
import VerticalLogo from "@/../public/logos/logo-vertical.png";
import IconLogo from "@/../public/logos/logo-og.png";
import Image from "next/image";
import { FC } from "react";

interface LogoProps {
  variant: "vertical" | "horizontal" | "horizontal-full" | "icon-only";
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const Logo: FC<LogoProps> = ({
  variant,
  className,
  priority = true,
  sizes,
}) => {
  return (
    <Image
      src={
        variant === "vertical"
          ? VerticalLogo
          : variant === "horizontal"
          ? HorizontalLogo
          : variant === "icon-only"
          ? IconLogo
          : HorizontalFullLogo
      }
      alt="Stockel Tattoos Logo"
      className={className}
      priority={priority}
      sizes={sizes}
      placeholder="blur"
    />
  );
};
