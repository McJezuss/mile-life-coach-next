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
        <Typography variant="h2">
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
          <Typography variant="h3">I offer the following services</Typography>
          <div className="grid grid-cols-1 gap-5">
            <Card className="flex flex-col space-y-3 text-left">
              <CardContent className="pt-3 space-y-3">
                <div>
                  <Typography variant="h3">
                    Life Coaching & Trauma Counselling
                  </Typography>
                  <Separator />
                </div>
                <ul className="list-inside">
                  <li className="flex flex-col space-y-2 py-1">
                    <div className="flex flex-row space-x-2 items-center">
                      <Typography variant="p">1. Life Coaching</Typography>
                      <Typography variant="muted">(R450/h)</Typography>
                    </div>
                    <li className="pl-3 text-base font-fraunces">
                      <strong>Individual Life Coaching Sessions: </strong>
                      Tailored one-on-one sessions where I work closely with you
                      to set and achieve personal goals, overcome obstacles, and
                      improve your life.
                    </li>
                    <li className="pl-3 text-base font-fraunces">
                      <strong>Goal Setting and Accountability: </strong>
                      Help you clarify your goals, create actionable plans, and
                      hold you accountable for progress through regular
                      check-ins.
                    </li>
                    <li className="pl-3 text-base font-fraunces">
                      <strong>
                        Stress Management and Resilience Building:{" "}
                      </strong>
                      Focus on equipping you with the tools and mindset needed
                      to navigate life&apos;s challenges more effectively,
                      leading to greater emotional well-being and overall
                      satisfaction.
                    </li>
                    <li className="pl-3 text-base font-fraunces">
                      <strong>Confidence and Self-Esteem Building: </strong>
                      You can experience improved self-image, increased
                      assertiveness in pursuing their aspirations, and greater
                      resilience in facing challenges.
                    </li>
                    <li className="pl-3 text-base font-fraunces">
                      <strong>Relationship Coaching: </strong>
                      Support you to improve relationships, whether personal or
                      professional, address communication issues, conflict
                      resolution, or enhance intimacy.
                    </li>
                    <li className="pl-3 text-base font-fraunces">
                      <strong>Career Coaching: </strong>
                      Assist you in navigating career transitions, improve job
                      satisfaction, enhance professional skills, or achieve
                      specific career-related goals.
                    </li>
                  </li>
                  <div className="flex flex-col space-y-2 pt-5">
                    <div className="flex flex-row space-x-2 items-center">
                      <Typography variant="p">2. Trauma Counselling</Typography>
                    </div>
                    <li className="pl-3 text-base font-fraunces">
                      <strong>Individual Therapy Sessions (R350/h): </strong>
                      One-on-one counseling tailored to your specific trauma and
                      needs.
                    </li>
                    <li className="pl-3 text-base font-fraunces">
                      <strong>Group Therapy (R700/h): </strong>
                      Providing a supportive environment where clients with
                      similar experiences can share and learn from each other.
                    </li>
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
