import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { paths } from "@/paths";
import { Metadata } from "next";
import Link from "next/link";
import { HealthAndBeautyBusiness, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Workshops | Milé Klaasee - Life Coach & Trauma Facilitator",
  description:
    "The pressures of modern life, combined with unresolved trauma and daily stress, can create a disconnect between who you are and who you want to be. If you're ready to reclaim your life and reconnect with your true self, this workshop is for you.",
};

export default function Workshops() {
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
    event: {
      "@type": "Event",
      name: "Reconnect the Disconnect - From Chaos to Clarity",
      description:
        "The pressures of modern life, combined with unresolved trauma and daily stress, can create a disconnect between who you are and who you want to be. If you're ready to reclaim your life and reconnect with your true self, this workshop is for you.",
      startDate: "2024-09-14T09:00:00-07:00",
      endDate: "2024-09-14T16:00:00-07:00",
      location: {
        "@type": "Place",
        name: "Letterstedt House",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Newlands on Main",
          addressLocality: "Claremont",
          postalCode: "7700",
          addressRegion: "Western Cape",
          addressCountry: "ZA",
        },
      },
      offers: {
        "@type": "Offer",
        price: "2500",
        priceCurrency: "ZAR",
        availability: "LimitedAvailability",
      },
      performer: {
        "@type": "Person",
        name: "Milé Klaasee",
        jobTitle: "Life Coach & Trauma Facilitator",
        url: `${process.env.WEBSITE_URL}${paths.about}`,
      },
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col justify-center items-center pt-20 max-w-4xl m-auto pb-20">
        <Typography
          variant="h1"
          className="pb-2"
        >
          Reconnect the Disconnect
        </Typography>
        <Typography variant="h2">From Chaos to Mental Clarity</Typography>

        <div className="flex flex-col space-y-8 mt-5">
          <Typography>
            The pressures of modern life, combined with unresolved trauma and
            daily stress, can create a disconnect between who you are and who
            you want to be. If you&apos;re ready to reclaim your life and
            reconnect with your true self, this workshop is for you.
          </Typography>
          <Separator />
          <ul className="list-inside text-left space-y-2">
            <li className="pl-3 text-base font-fraunces">
              <strong className="mr-2">Date:</strong>
              Saturday, 14 September 2024
            </li>
            <li className="pl-3 text-base font-fraunces">
              <strong className="mr-2">Time:</strong>
              9:00 AM - 16:00 PM
            </li>

            <li className="pl-3 text-base font-fraunces">
              <strong className="mr-2">Price:</strong>
              R2,500 pp
            </li>
            <li className="pl-3 text-base font-fraunces">
              <strong className="mr-2">Includes: </strong>
              Lunch, Drinks, Resource Pack, Information Plans & Programs
            </li>
            <li className="pl-3 text-base font-fraunces">
              <a
                href="https://maps.app.goo.gl/ZAaXiHBDd2psQ4XHA"
                target="_blank"
                className="hover:underline hover:cursor-pointer"
              >
                <strong className="mr-2">Location:</strong>
                Letterstedt House, Newlands on Main, Claremont, 7700, Western
                Cape, South Africa
              </a>
            </li>
            <li className="pl-3 text-base font-fraunces">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3308.6266801342185!2d18.462426475713254!3d-33.97643367318573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU4JzM1LjIiUyAxOMKwMjcnNTQuMCJF!5e0!3m2!1sen!2sza!4v1723463351030!5m2!1sen!2sza"
                width="300"
                height="200"
                className="border-0 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </li>
          </ul>

          <Separator />

          <ul className="text-left space-y-2 list-disc mx-3">
            <li className="pl-3 font-fraunces">
              <Typography>
                Are you feeling overwhelmed by the business of everyday life?
              </Typography>
            </li>

            <li className="pl-3 font-fraunces">
              <Typography>
                Do you find yourself constantly playing catch-up, struggling to
                process the emotions and events that shape your reality?
              </Typography>
            </li>

            <li className="pl-3 font-fraunces">
              <Typography>
                Are you looking for effective tools and skills to help build
                your resilience and personal development?
              </Typography>
            </li>

            <li className="pl-3 font-fraunces">
              <Typography>
                Would you like to establish constructive habits, break the cycle
                of negative & self-destructive thought patterns?
              </Typography>
            </li>
          </ul>

          <div className="flex flex-col space-y-3">
            <Typography variant="h3">Workshop Overview</Typography>

            <Typography>
              <strong>Reconnect the Disconnect</strong> is a transformative,
              full-day workshop designed to help you navigate through
              life&apos;s chaos, learn from past trauma, and build a fulfilling,
              purpose-driven life. Led by two qualified professionals—a Trauma
              Incident Reduction (TIR) Facilitator and a ICF Accredited Life
              Coach—this workshop offers a unique blend of trauma education and
              life coaching strategies. Our goal is to guide you from confusion
              and disconnection to clarity, self-awareness, and renewed purpose.
            </Typography>
          </div>

          <div className="flex flex-col space-y-3">
            <Typography variant="h3">
              Morning Session: Understanding Trauma, Emotions & Triggers
            </Typography>
            <ul className="text-left space-y-2 list-disc mx-3">
              <li className="pl-3 font-fraunces">
                <Typography>
                  Grasp what trauma is and its impact on the brain, body, and
                  emotions.
                </Typography>
              </li>

              <li className="pl-3 font-fraunces">
                <Typography>
                  Understand your brain and how it works against you sometimes,
                  despite good intentions.
                </Typography>
              </li>

              <li className="pl-3 font-fraunces">
                <Typography>
                  Recognise how trauma-responses shape daily behavior and
                  self-perception.
                </Typography>
              </li>

              <li className="pl-3 font-fraunces">
                <Typography>
                  Learn and practice techniques for reframing negative
                  experiences and reconnecting with yourself.
                </Typography>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-3">
            <Typography variant="h3">
              Afternoon Session: Life Coaching for Growth
            </Typography>
            <ul className="text-left space-y-2 list-disc mx-3">
              <li className="pl-3 font-fraunces">
                <Typography>
                  Understand the importance of growth and resilience.
                </Typography>
              </li>

              <li className="pl-3 font-fraunces">
                <Typography>
                  Identify personal instances of growth and resilience.
                </Typography>
              </li>

              <li className="pl-3 font-fraunces">
                <Typography>
                  Learn practical tools for resilience-building.
                </Typography>
              </li>

              <li className="pl-3 font-fraunces">
                <Typography>
                  Create a plan to integrate these tools into your daily
                  routine.
                </Typography>
              </li>

              <li className="pl-3 font-fraunces">
                <Typography>
                  Leave feeling empowered and confident in your ability to face
                  future challenges.
                </Typography>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-3">
            <Typography variant="h3">Reserve Your Spot Today!</Typography>

            <ul className="text-left space-y-2 list-disc mx-3">
              <li className="pl-3 font-fraunces">
                <Typography>
                  Spaces are limited to ensure a personalized experience for
                  each participant
                </Typography>
              </li>

              <li className="pl-3 font-fraunces">
                <Typography>
                  Only 6 spots available for this workshop.
                </Typography>
              </li>
            </ul>
            <Button asChild>
              <Link
                className="ml-0"
                href={"https://forms.gle/93mtSozyAbn2ezBh7"}
                target="_blank"
              >
                Book Now
              </Link>
            </Button>
          </div>

          <div className="flex flex-col space-y-3">
            <Typography variant="h3">Contact Information</Typography>

            <div>
              <Typography>
                For questions or more information, please contact us at:
              </Typography>
            </div>
            <ul className="text-left space-y-2 list-disc mx-3">
              <li className="pl-3 font-fraunces">
                <Typography>
                  <a
                    href="mailto:info@EnableDirection.com"
                    className="hover:underline hover:cursor-pointer"
                  >
                    info@enabledirection.com
                  </a>
                </Typography>
              </li>

              <li className="pl-3 font-fraunces">
                <Typography>
                  <a
                    href="tel:+27716525816"
                    className="hover:underline hover:cursor-pointer"
                  >
                    +27 71 652 5816
                  </a>
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
