import { getHomePageData } from "@/api/home";
import { Button } from "@/components/ui/button";
import { paths } from "@/paths";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { PricingCard } from "./pricing-card";

export const PricingSection = async () => {
  const { data } = await getHomePageData();
  const pricing = data.pricing || [];

  return (
    <div className="max-w-6xl w-full">
      <h1 className="text-4xl text-center font-bebas pb-5">Pricing</h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-20 max-lg:gap-10">
        {pricing.map((p) => (
          <PricingCard
            key={p.title}
            title={p.title}
            description={p.description}
            price={p.price}
            priceDescription={p.priceDescription || ""}
            notes={["Size does not dictate time", "Custom design"]}
            imageSrc={p.imageUrl}
            popular={p.popular}
          />
        ))}
      </div>
      <div className="flex w-full justify-center pt-5">
        <Button
          asChild
          variant={"default"}
          className="text-xl font-avenir font-bold"
        >
          <Link href={paths.bookings}>
            Book Now <ChevronRight size={24} />
          </Link>
        </Button>
      </div>
    </div>
  );
};
