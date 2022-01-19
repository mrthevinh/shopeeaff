export interface Post {    
    name: string;
    description: string;
    image: string;
    images: string  [];
    catid: string;
    category: string[];
    max_price: number;
    price: number;
    discount: string;
    sold: number;
    shop_location: string;
    url: string;
}

export interface Category {
    name: string;
}
export interface Image {
    name: string;
}