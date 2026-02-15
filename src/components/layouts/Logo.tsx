import Image from "next/image";
import Link from "next/link";

interface Logo {
  url: string;
  src: string;
  alt: string;
  title: string;
}

const logo: Logo = {
  url: "/",
  src: "/logo.png",
  alt: "logo",
  title: "RENT-VEHICLE",
};

export default function Logo() {
  return (
    <Link href={logo.url} className="flex items-center gap-2">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={32}
        height={32}
        className="max-h-8 dark:invert"
      />
      <span className="text-lg font-semibold tracking-tighter">
        {logo.title}
      </span>
    </Link>
  );
}
