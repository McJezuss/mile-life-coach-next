import { Logo } from "@/components/logos/logo";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { paths } from "@/paths";
import { JourneyStep } from "@/sections/home/journey/journey-step";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { TattooParlor, WithContext } from "schema-dts";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | Milé Klaasee - Life Coach & Trauma Facilitator",
    description:
      "Discover transformative growth with our Cape Town-based life coach and trauma facilitator. Specializing in personal development, healing, and mediation, we guide you towards overcoming challenges, healing from trauma, and achieving harmony. Embrace your journey to empowerment and peace.",
    metadataBase: new URL(process.env.S3_ENDPOINT || ""),
  };
};

export default function Home() {
  // Schema org
  // TODO
  const jsonLd: WithContext<TattooParlor> = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: "Stöckel Tattoos",
    image: `${process.env.WEBSITE_URL}/logos/logo-og.png`,
    priceRange: "R650 - R3600",
    employee: {
      "@type": "Person",
      name: "Bianca Stöckel",
      jobTitle: "Tattoo Artist",
      url: `${process.env.WEBSITE_URL}${paths.about}`,
    },
    telephone: "+27798782205",
    email: "bianca.stockel@gmail.com",
    url: process.env.WEBSITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "645 Klipbank St",
      addressLocality: "Pretoria",
      addressRegion: "Gauteng",
      postalCode: "0153",
      addressCountry: "ZA",
    },
    sameAs: [
      "https://www.instagram.com/stockel.tattoos/",
      "https://www.facebook.com/humblebtattoos/",
      "https://www.tiktok.com/@stockel.tattoos",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col space-y-40 justify-center items-center p-5 pb-20">
        {/* Landing */}
        <Logo
          variant={"vertical"}
          className="max-w-[1000px] max-md:max-w-[400px] md:max-w-[600px] pt-28"
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 50vw"
        />

        {/* What is life coaching */}
        <div className="flex flex-col space-y-5 w-full max-w-6xl text-center">
          <Typography variant="h2">What is life coaching?</Typography>
          <Typography>
            Life coaching is a form of personal development that focuses on
            helping individuals achieve their goals and aspirations. It involves
            a client-centered approach where I work with you to identify your
            strengths, values, and challenges, enabling you to make positive
            changes and reach your full potential.
          </Typography>

          <Typography>
            As a life coach, I offer a safe, non-judgmental space where you can
            explore your thoughts and emotions, gain clarity, and develop
            strategies to overcome obstacles. I provide support, guidance, and
            accountability, empowering you to take control of your life and
            create lasting change.
          </Typography>

          <div className="flex w-full justify-center pt-3">
            <Button
              asChild
              variant={"ghost"}
              className="text-xl font-glacial font-bold"
            >
              <Link href={paths.about}>
                Find out more about me{" "}
                <ChevronRight className="w-5 h-5 self-center" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col space-y-10 w-full max-w-6xl text-center items-center">
          <Typography variant="h2">Our journey</Typography>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <JourneyStep
              step="01"
              title="Understanding your needs"
              description="We have a discussion around 3 aspects - your relationship with yourself, your relationship with others, and your relationship with the world. We then decide together on what we will focus on."
              circleColor="bg-ash-gray/30"
            />

            <JourneyStep
              step="02"
              title="Narrative & self-observation"
              description="I will present you with a narrative/metaphor relating to your ideal self, and we will work together to achieve this. Following that, I will offer you a self-obeservation assist to assist us in understanding some of your behavioral and thought patterns."
              circleColor="bg-wenge/30"
            />

            <JourneyStep
              step="03"
              title="Follow-up sessions & accountability"
              description="I am your accountability partner throughout this journey. We will use these sessions to discuss what came up in your self-observation and track the progress (mindset shifts)."
              circleColor="bg-pale-dogwood/30"
            />

            <JourneyStep
              step="04"
              title="Practices & implementation of tools"
              description="When you become aware of patterns and mindset shifts, we will move on to practices. A practice is a practical tool you need to implement in your daily life, eg. noticing when you feel a certain emotion."
              circleColor="bg-sunglow/30"
            />

            <JourneyStep
              step="05"
              title="Exercises to improve self-observation"
              description="To further improve your self-observation and development, we will also implement exercises. An exercise is a once-off activity you need to do eg. watch a TED talk."
              circleColor="bg-ash-gray/30"
            />

            <JourneyStep
              step="06"
              title="Summarisation & future challenges"
              description="Sessions aren't limited and can go over the allocated time. At the end, we summarise what you have learned and the skills/tools you have acquired to take on future challenges."
              circleColor="bg-pale-dogwood/30"
            />
          </div>

          <Button>
            Read more about my approach{" "}
            <ChevronRight className="w-5 h-5 self-center" />
          </Button>
        </div>
      </div>
    </>
  );
}
