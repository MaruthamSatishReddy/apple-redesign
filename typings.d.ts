export interface Category {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'category';
  slug: {
    _type: 'slug';
    current: string;
  };
  title: string;
}

export interface Image {
  _key: string;
  _type: 'image';
  asset: {
    url: string;
  };
}

export interface Product {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'product';
  title: string;
  price: number;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: Child;
  category: {
    _type: 'reference';
    _ref: string;
  };
  privewImages: Image[];
  image: Image[];
  ratings: number;
  quantity: number;
}
export interface Child {
  _key: string;
  listItem: string;
  markDefs: any[];
  children: any[];
  level: number;
  _type: string;
  style: string;
}
export interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
}
