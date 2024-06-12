export interface Product {
    id: string;
    image: string;
    name: string;
    description: string;
    type: string;
    products: { id: string, image: string, title: string }[];
}