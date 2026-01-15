export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  featured: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}