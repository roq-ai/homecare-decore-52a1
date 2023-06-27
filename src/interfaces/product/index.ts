import { RelatedItemInterface } from 'interfaces/related-item';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  related_item?: RelatedItemInterface[];
  organization?: OrganizationInterface;
  _count?: {
    related_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  organization_id?: string;
}
