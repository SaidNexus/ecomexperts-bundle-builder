export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  step: number;
  badge?: string;
  learnMoreUrl: string;
  variants: ProductVariant[];
}

export interface ProductVariant {
  sku: string;
  color?: string;
  image: string;
  price: number;
  comparePrice?: number;
}

export type ProductCategory =
  | "camera"
  | "sensor"
  | "plan"
  | "accessory";