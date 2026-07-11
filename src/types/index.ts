export interface ProductVariant {
  color: string;
  image: string;
  price: number;
  originalPrice: number | null;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  discount?: number;
  learnMoreUrl: string;
  variants: ProductVariant[];
}

export interface BundleItem {
  productId: number;
  color?: string;
  quantity: number;
}
export interface BundleState {
  cameras: BundleItem[];
  sensors: BundleItem[];
  protections: BundleItem[];
  plan: string | null;
}



export type Sensor = Product;


export interface ProtectionVariant {
  price: number;
  originalPrice: number | null;
}

export interface Protection {
  id: number;
  name: string;
  description: string;
  icon?: string;
  type: string;
  required: boolean;
  learnMoreUrl: string;
  variants: ProtectionVariant[];
}
