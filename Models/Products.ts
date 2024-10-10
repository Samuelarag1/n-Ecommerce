import ISizeStock from "./SizeStock";

export default interface IProduct {
  id?: string;
  name: string;
  price: string | number;
  sizes: ISizeStock[];
  brand: string;
  discount: number;
  categorie: "Deportivo" | "Hombre" | "Mujer" | "Nino" | "";
  subCategorie: "Nuevos Ingresos" | "Calzados" | "Ropa" | "Accesorios" | "";
  imageUrl: string;
}
