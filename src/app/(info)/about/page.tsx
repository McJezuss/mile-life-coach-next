import { Button } from "@/components/ui/button";
import { paths } from "@/paths";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Person, WithContext } from "schema-dts";
import Me from "@/../public/images/me.jpg";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "About Me | Stöckel Tattoos",
  description:
    "Meet Bianca Stöckel, a premier tattoo artist in Pretoria East, South Africa, specializing in illustrative surrealism and realism with a unique twist of pepper shading and blackwork. Ready to elevate your tattoo experience? Contact Bianca today for a journey tailored to your story.",
};

export default function About() {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bianca Stöckel",
    jobTitle: "Tattoo Artist",
    knowsLanguage: ["English", "Afrikaans"],
    telephone: "+27 79 878 2205",
    email: "bianca.stockel@gmail.com",
    url: `${process.env.WEBSITE_URL}${paths.about}`,
    image: `${process.env.WEBSITE_URL}/images/me.webp`,
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
    <div className="flex flex-col justify-center items-center max-w-6xl m-auto max-lg:h-full lg:pt-20 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid grid-cols-1 justify-center gap-20">
        <Image
          src={Me}
          alt="Milé Klaasee"
          priority
          className={`rounded-lg m-auto max-lg:max-w-[350px] md:max-w-[500px] max-w-[600px]`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px): 0vw, (max-width: 1200px) 30vw"
        />

        <div className="flex flex-col text-center font-fraunces text-lg tracking-tight space-y-5">
          <Typography variant="h1">Milé Klaasee</Typography>
          <Typography>
            I&#39;m Mile&#39; Klaasee, a 24-year-old with a passion for learning
            and helping others. Over the past five years, I&#39;ve had the
            opportunity to explore various roles and experiences, which have
            shaped me into the person I am today.
          </Typography>
          <Typography>
            My educational journey began at the University of Pretoria, where I
            pursued a Bachelor of Arts in Psychology and graduated in 2021.
            Eager to deepen my knowledge and expertise, I went on to complete a
            Psychology Honours program at SACAP in 2022.
          </Typography>

          <Typography>
            Along the way, I also took part in several specialized courses to
            expand my skillset. A CPD Workshop on Trauma-sensitive Mindfulness
            for the Treatment of Post- Traumatic Stress Disorder (PTSD) allowed
            me to better comprehend the importance of mindfulness in trauma
            therapy. Additionally, I enrolled in a Death, Grief, and Healing
            Course to gain insights into helping individuals navigate through
            the grieving process. To promote overall well-being, I also
            completed a Positive Psychology: Work-Life Balance Course.
          </Typography>

          <Typography>
            During my journey of self-discovery and learning, I engaged in a
            range of work experiences. As a private tutor, I nurtured young
            minds and fostered a love for knowledge. Serving as a waitress and
            hostess in a bustling restaurant taught me valuable lessons in
            communication, teamwork, and adaptability. Volunteering, however,
            touched my heart the most, as it allowed me to give back to the
            community and make a positive impact on the lives of those in need.
          </Typography>
          <Typography>
            One aspect of my journey that I am particularly proud of is becoming
            a qualified Traumatic Incident Reduction Facilitator. This
            certification enables me to assist individuals in releasing
            emotional burdens related to past traumatic incidents. My mission is
            to provide a safe and supportive environment for people to heal and
            move forward in their lives.
          </Typography>
          <Typography>
            Embarking on a Life Coaching course at the esteemed University of
            Cape Town has been an enlightening and transformative journey for
            me. Life coaching serves as a powerful catalyst for personal and
            professional growth. For clients, it signifies a supportive
            partnership with a skilled coach who helps them navigate life&#39;s
            challenges, set meaningful goals, and unleash their untapped
            potential. Life coaching is not just about problem-solving; it is a
            holistic approach that fosters self-discovery, resilience, and the
            development of effective strategies to achieve desired outcomes. As
            I delve into this rewarding field, I am excited about the prospect
            of guiding individuals toward a more fulfilling and purpose-driven
            life.
          </Typography>

          <Typography>
            Lastly, through leading and hosting Art Workshops in Cape Town, I am
            dedicated to empower individuals to discover their inner strength,
            and embark on a journey of self-discovery and healing through the
            art of expression.
          </Typography>
          <Typography>
            As I continue to grow personally and professionally, I am driven by
            a desire to contribute meaningfully to the well-being of others.
            Whether it&#39;s through my academic pursuits, diverse work
            experiences, or my role as a trauma facilitator, I am committed to
            making a difference in the lives of those I encounter.
          </Typography>
          <Typography>
            Thank you for joining me on this journey, and I look forward to
            connecting with many of you to create a brighter and more empathetic
            world together.
          </Typography>

          <Button
            asChild
            variant={"default"}
          >
            <Link
              href={paths.bookings}
              className="flex items-center space-x-2 w-96 m-auto"
            >
              <Typography>Contact Me</Typography>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
