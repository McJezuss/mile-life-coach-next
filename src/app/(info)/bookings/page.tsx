import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { paths } from "@/paths";
import { Metadata } from "next";
import { WithContext, HealthAndBeautyBusiness } from "schema-dts";

export const metadata: Metadata = {
  title: "Bookings | Milé Klaasee - Life Coach & Trauma Facilitator",
  description:
    "Discover transformative growth with our Cape Town-based life coach and trauma facilitator. Specializing in personal development, healing, and mediation, we guide you towards overcoming challenges, healing from trauma, and achieving harmony. Embrace your journey to empowerment and peace.",
};

export default function Bookings() {
  const jsonLd: WithContext<HealthAndBeautyBusiness> = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Milé Klaasee Life Coach & Trauma Facilitator",
    founder: {
      "@type": "Person",
      name: "Milé Klaasee",
      jobTitle: "Life Coach & Trauma Facilitator",
      url: `${process.env.WEBSITE_URL}${paths.about}`,
    },
    telephone: "+27713332987",
    email: "mklaasee1234@gmail.com",
    url: process.env.WEBSITE_URL,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col justify-center items-center pt-20 max-w-4xl m-auto pb-20">
        <Typography variant="h1">
          Ready to transform your life? Let&apos;s begin.
        </Typography>

        <div className="flex flex-col space-y-5 mt-5 text-center">
          <Typography>
            If you are ready to embark on your journey to empowerment and peace,
            I am here to guide you. Whether you are seeking personal
            development, healing, or mediation, I am dedicated to helping you
            overcome challenges and heal from trauma.
          </Typography>
          <Separator />
          <Typography variant="h2">I offer the following services</Typography>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Card className="flex flex-col space-y-3 text-left">
              <CardContent className="pt-3 space-y-3">
                <div>
                  <Typography variant="h3">Life Coaching</Typography>
                  <Separator />
                </div>
                <ul className="list-inside">
                  <div className="flex flex-row space-x-2 items-center">
                    <Typography variant="p">1. Life Coaching</Typography>
                    <Typography variant="muted">(R450/h)</Typography>
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <Typography variant="p">2. Personal Development</Typography>
                    <Typography variant="muted">(R450/h)</Typography>
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <Typography variant="p">3. Trauma Facilitation</Typography>
                    <Typography variant="muted">(R300/h)</Typography>
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <Typography variant="p">4. Mediation</Typography>
                    <Typography variant="muted">(R450/h)</Typography>
                  </div>
                </ul>
              </CardContent>
            </Card>

            <Card className="flex flex-col text-left">
              <CardContent className="pt-3 space-y-3">
                <div>
                  <Typography variant="h3">
                    Art Therapy (Cape Town only)
                  </Typography>
                  <Separator />
                </div>
                <div>
                  <ul className="list-inside">
                    <div className="flex flex-row space-x-2 items-center">
                      <Typography variant="p">1. Art Workshops</Typography>
                      <Typography variant="muted">(~R290/p)</Typography>
                    </div>
                  </ul>
                </div>
                <Typography
                  variant="muted"
                  className="mt-3"
                >
                  This is a passion project I have been working on where I
                  facilitate art therapy workshops for children and adults. I
                  believe that art is a powerful tool for healing and
                  self-expression. If you are interested in attending a
                  workshop, please contact me for more information.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <Separator />
          <Typography variant="h2">Contact me here</Typography>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
            <div className="flex flex-col space-y-2">
              <Typography>Instagram (Preferred)</Typography>
              <a
                href={"https://www.instagram.com/mileklaasee_coach_/"}
                target="_blank"
                className="text-zinc-700 hover:text-zinc-800 cursor-pointer"
              >
                <Typography variant="small">@mileklaasee_coach_</Typography>
              </a>
              <a
                href={"https://www.instagram.com/art.inthe.garden/"}
                target="_blank"
                className="text-zinc-700 hover:text-zinc-800 cursor-pointer"
              >
                <Typography variant="small">@art.inthe.garden</Typography>
              </a>
            </div>
            <div className="flex flex-col space-y-1">
              <Typography>Email Address</Typography>
              <a
                href={"mailto:mklaasee1234@gmail.com"}
                target="_blank"
                className="text-zinc-700 hover:text-zinc-800 cursor-pointer"
              >
                <Typography variant="small">mklaasee1234@gmail.com</Typography>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
