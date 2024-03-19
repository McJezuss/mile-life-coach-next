import { Footer } from "@/sections/layouts/public/footer";
import { Navbar } from "@/sections/layouts/public/navbar";
import { getImageProps } from "next/image";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function InfoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "Vines growing background",
    width: 2000,
    height: 1500,
    quality: 100,
    src: "/images/vines.png",
  });
  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <main className="bg-isabelline">
      <Navbar />

      <section
        className="bg-fixed bg-cover lg:bg-cover lg:bg-top"
        style={{
          backgroundImage,
        }}
      >
        <div className="p-5 lg:pt-0 tracking-tight h-full">{children}</div>
      </section>

      <Footer />
    </main>
  );
}
