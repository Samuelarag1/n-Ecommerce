export default interface IProduct {
  id: string;
  name: string;
  price: string;
  size: "XS" | "S" | "M" | "L" | "XL" | "2XL" | "4XL";
  brand: string;
  discount: number;
  stock: number;
  categorie: "Deportivo" | "Hombre" | "Mujer" | "Nino";
  subCategorie: "Nuevos Ingresos" | "Calzados" | "Ropa" | "Accesorios" | "";
  imageUrl: string;
}
