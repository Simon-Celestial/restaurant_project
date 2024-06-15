export interface Product {
    id: string;
    image: string;
    name: string;
    description: string;
    type: string;
    products: ProductDetail[] ;
}

export interface JobDetail {
    header: string;
    content: string;
}

export interface ProductDetail {
    id: string;
    image: string;
    title: string;
    rating: string;
    regularPrice: number | null;
    salePrice: number;
    quantity: number ;
    description: string
    ingredients: string[]
}


export interface Job {
    id: string;
    title: string;
    details: JobDetail[];
}
