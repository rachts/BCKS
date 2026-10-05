import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export default function BrandLogo({
  className = "h-12 w-12",
  sizes = "48px",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/images/brand/bcks-logo.png"
      alt=""
      width={640}
      height={640}
      sizes={sizes}
      priority={priority}
      className={`aspect-square shrink-0 object-contain ${className}`}
    />
  );
}
