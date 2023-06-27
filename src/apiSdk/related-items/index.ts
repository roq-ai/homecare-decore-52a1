import axios from 'axios';
import queryString from 'query-string';
import { RelatedItemInterface, RelatedItemGetQueryInterface } from 'interfaces/related-item';
import { GetQueryInterface } from '../../interfaces';

export const getRelatedItems = async (query?: RelatedItemGetQueryInterface) => {
  const response = await axios.get(`/api/related-items${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createRelatedItem = async (relatedItem: RelatedItemInterface) => {
  const response = await axios.post('/api/related-items', relatedItem);
  return response.data;
};

export const updateRelatedItemById = async (id: string, relatedItem: RelatedItemInterface) => {
  const response = await axios.put(`/api/related-items/${id}`, relatedItem);
  return response.data;
};

export const getRelatedItemById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/related-items/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRelatedItemById = async (id: string) => {
  const response = await axios.delete(`/api/related-items/${id}`);
  return response.data;
};
