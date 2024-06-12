import * as importedInterfaces from "./ProductInterface";

export interface ProductType {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: importedInterfaces.Rating
}