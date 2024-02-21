import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { paths } from "@/paths";
import { Metadata } from "next";
import { WithContext, HealthAndBeautyBusiness } from "schema-dts";

export const metadata: Metadata = {
  title: "Bookings | Milé Klaasee - Life Coach & Trauma Facilitator",
  description:
    "Embark on your tattoo journey with Bianca Stöckel. Whether it's your first tattoo or an addition to your collection, our Bookings Page makes it easy to start the conversation. Share your ideas, preferences, and inspiration directly with Bianca via WhatsApp for a personalized consultation. Note: Appointments are required, ensuring each client receives dedicated attention and care. Ready to transform your vision into ink? Let's begin.",
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

        <div className="flex flex-col space-y-5 mt-5">
          <Typography>
            If you are ready to embark on your journey to empowerment and peace,
            I am here to guide you. Whether you are seeking personal
            development, healing, or mediation, I am dedicated to helping you
            overcome challenges and heal from trauma.
          </Typography>
          <Separator />
          <Typography>I offer the following services:</Typography>
          <ul className="list-inside">
            <Typography variant="p">1. Life Coaching</Typography>
            <Typography variant="p">2. Personal Development</Typography>
            <Typography variant="p">3. Trauma Facilitation</Typography>
            <Typography variant="p">4. Mediation</Typography>
          </ul>
          <Separator />
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
