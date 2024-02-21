import { paths } from "@/paths";
import Link from "next/link";
import { MobileDrawer } from "./mobile-drawer";
import { RouteItem } from "./route-item";
import { Logo } from "@/components/logos/logo";
import { Sprout } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="sticky bg-isabelline top-0 px-4 py-4 flex justify-between items-center backdrop-filter backdrop-blur-md bg-opacity-80 z-50">
      <Link href={paths.home}>
        <Logo
          variant={"horizontal"}
          className="max-w-[200px]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw"
        />
      </Link>

      <MobileDrawer />

      <div className="hidden w-full lg:block lg:w-auto">
        <ul className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto flex lg:items-center lg:w-auto lg:space-x-10">
          <RouteItem
            title={"Home"}
            href={paths.home}
          />
          <Sprout className="w-5 h-5 text-ash-gray" />
          <RouteItem
            title={"About"}
            href={paths.about}
          />
          <Sprout className="w-5 h-5 text-ash-gray" />
          <RouteItem
            title={"Bookings"}
            href={paths.bookings}
          />
          <Sprout className="w-5 h-5 text-ash-gray" />
          <RouteItem
            title={"Blog"}
            href={paths.blog.index}
          />
        </ul>
      </div>
    </nav>
  );
};
