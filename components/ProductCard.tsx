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
    <div>
      <div className="ml-2 mr-2 h-96 shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-red-50 flex rounded-l-md rounded-b-none rounded-r-md h-56 w-fit">
          <a href="#">
            <Image
              className="rounded-l-md rounded-r-md rounded-b-none h-full object-cover"
              src={imageSrc}
              alt="product image"
            />
          </a>
        </div>
        <div className="ml-2">
          <a href="#">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {title}
            </h3>
          </a>
          <div className="flex items-center">
            <span className="text-green-500 font-light px-2">600 vendidos</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
          </div>
          <div className="mt-2 relative right-0">
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
