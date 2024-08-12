import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
}) => {
  return (
    <div className="w-48 flex flex-col rounded-[5px] shadow-sm shadow-black overflow-hidden">
      <Image
        src={imageSrc}
        className="w-full h-auto object-cover"
        alt={title}
        height={400}
        width={400}
      />
      <div className="w-full flex justify-between items-center p-1">
        <p className="text-sm text-black text-start">{title}</p>
      </div>
      <div className="text-black">
        <p className="text-xs font-bold overflow-auto h-14 p-1">
          S M L XL 2XL 4XL
        </p>
      </div>
      <div className="flex items-center w-full justify-between p-2">
        <div className="text-black">
          <p className="text-xs">
            <span className="font-bold text-xs">$</span>
            {price}
          </p>
        </div>
        <div>
          <button className="text-[10px] bg-green-800 text-white p-1 rounded-full">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
