import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FC } from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  priceDescription: string;
  notes: string[];
  imageSrc: string;
  popular?: boolean;
}

export const PricingCard: FC<PricingCardProps> = ({
  title,
  description,
  price,
  priceDescription,
  notes,
  imageSrc,
  popular,
}) => {
  return (
    <Card className={`w-full ${popular && "drop-shadow-lg"}`}>
      <CardContent className="text-center font-avenir h-full flex flex-col items-center">
        {popular && (
          <Badge className="absolute -translate-y-4">
            <span className="text-base">Most Popular</span>
          </Badge>
        )}

        <CardHeader>
          <span className="font-bebas text-3xl">{title}</span>
          <span className="text-lg">{description}</span>
        </CardHeader>

        <Image
          src={imageSrc}
          alt="Pricing Image"
          width={200}
          height={200}
          className="rounded-full mb-5 aspect-square object-cover"
        />

        <div className="flex flex-col space-y-2 justify-end h-full">
          <div>
            <span className="text-3xl">{price}</span>
            <span className="text-lg text-slate-500">{priceDescription}</span>
          </div>
          <Separator />
          <div className="text-slate-500">
            {notes.map((note) => (
              <div key={note}>{note}</div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
