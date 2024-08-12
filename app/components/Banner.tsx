import Image, { StaticImageData } from "next/image";

interface BannerProps {
  src: string | StaticImageData;
  alt: string;
}

const Banner: React.FC<BannerProps> = ({ src, alt }) => {
  return (
    <div className="h-40 flex items-center justify-center bg-black">
      <Image
        src={src}
        className="max-h-full max-w-full object-cover opacity-60"
        alt={alt}
      />
    </div>
  );
};

export default Banner;
