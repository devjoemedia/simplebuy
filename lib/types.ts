export interface ProductAttributes {
  createdAt: string;
  locale: string;
  publishedAt: string;
  updatedAt: string;
}

export interface productInterface {
  name: string;
  price: number;
  discountPrice: number;
  imageUrl: string;
  slug: string;
  description: string;
  id: string;
  quantity: number;
}

export interface userInterface {
  name: string;
  id: string;
  email: string;
  phone: string;
}
