import type { ProductFilters, Product } from '../types/product';
import axios from './api';


export const fetchProducts = async (filters?: ProductFilters): Promise<Product[]> => {
  const response = await axios.get('/products', { params: filters });
  return response.data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await axios.get('/products/search', { params: { q: query } });
  return response.data;
};