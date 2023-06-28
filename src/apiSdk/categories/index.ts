import axios from 'axios';
import queryString from 'query-string';
import { CategoryInterface, CategoryGetQueryInterface } from 'interfaces/category';
import { GetQueryInterface } from '../../interfaces';

export const getCategories = async (query?: CategoryGetQueryInterface) => {
  const response = await axios.get(`/api/categories${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCategory = async (category: CategoryInterface) => {
  const response = await axios.post('/api/categories', category);
  return response.data;
};

export const updateCategoryById = async (id: string, category: CategoryInterface) => {
  const response = await axios.put(`/api/categories/${id}`, category);
  return response.data;
};

export const getCategoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/categories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCategoryById = async (id: string) => {
  const response = await axios.delete(`/api/categories/${id}`);
  return response.data;
};
