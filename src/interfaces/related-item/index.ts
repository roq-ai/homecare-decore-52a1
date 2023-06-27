import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface RelatedItemInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  product_id?: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  _count?: {};
}

export interface RelatedItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  product_id?: string;
}
