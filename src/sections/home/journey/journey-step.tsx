import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { FC } from "react";

interface JourneyStepProps {
  step: string;
  title: string;
  description: string;
  className?: string;
  circleColor?: string;
}

export const JourneyStep: FC<JourneyStepProps> = ({
  step,
  title,
  description,
  className,
  circleColor,
}) => {
  return (
    <div className={`w-auto h-auto ${className} relative`}>
      {/* circle in top left of square - absolute */}
      <div
        className={`absolute top-0 left-0 w-48 h-48 rounded-full flex justify-center items-center translate-x-2 -translate-y-8 ${circleColor}`}
      />
      <CardHeader className="relative z-10">
        <Typography variant="h3">
          {step}. {title}
        </Typography>
      </CardHeader>
      <CardContent className="relative z-10">
        <Typography>{description}</Typography>
      </CardContent>
    </div>
  );
};
