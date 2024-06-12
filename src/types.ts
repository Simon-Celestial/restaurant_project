export interface Product {
    id: string;
    image: string;
    name: string;
    description: string;
    type: string;
    products: { id: string, image: string, title: string }[];
}

export interface JobDetail {
    header: string;
    content: string;
}

export interface Job {
    id: string;
    title: string;
    details: JobDetail[];
}
